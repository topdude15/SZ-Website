function createData(jsonFile) {

	$.getJSON(jsonFile, function(data) {

    var tmp = '';

    $.each(data, function(key ,value) {
     tmp += '<a href = "' + value.destination + '" class = "menuItem">';
     tmp += '	<div class = "orderItem" id = "' + value.divId + '">';
     tmp += '		<img src="../' + value.imagePath + '" width = "' + value.imageWidth + '">';
     tmp += '		<p>' + value.name + '</p>';
     tmp += '</div>';
     tmp += '</a>';
   });

    $('#main').append(tmp);
  });
}

function createFlavorData(jsonFile) {
  $.getJSON(jsonFile, function(data) {
    
    var tmp = '';
    var flavors = [];

    $.each(data["flavors"], function(key, value) {
      tmp += '<button type="button" class="collapsible">' + key + '</button>';
      tmp += '<div class = "flavorGroup">';
      for(flavor in value) {
        tmp += '<div class = "flavor" onclick="this.querySelector(\'input[type=checkbox]\' style="pointer-events:none").click()">';
        tmp += '<input type = "checkbox" id = "' + value[flavor] + '">';
        tmp += '<label for = "' + value[flavor] + '">' + value[flavor] + '</label>';
        tmp += '</div>';
      }
      tmp += '</div>';
      tmp += '<script>var coll = document.getElementsByClassName("collapsible"); var i; for (i = 0; i < coll.length; i++) { coll[i].addEventListener("click", function() { this.classList.toggle("active"); var content = this.nextElementSibling; if (content.style.display === "flex") { content.style.display = "none"; } else { content.style.display = "flex"; } }); }</script>';
    });
    $('#flavors').append(tmp);
  })
}
function loadBasic() {
  console.log("Loading basic information");

  var optionsFile = '../data/options.json';

  var sizes = [];
  var bases = [];

  $.getJSON(optionsFile, function(data) {
    for (const size of data["sizes"]) {
      sizes.push(size);
    }
    for (const base of data["bases"]) {
      bases.push(base);
    }
    for (var i = 0; i < sizes.length; i++) {
      topRightSensationSize.innerHTML += '<option value="' + sizes[i] + '">' + sizes[i] + '</option>';
    }

    topRightSensationBase = document.getElementById('topRightSensationBase');

    for (var i = 0; i < bases.length; i++) {
      topRightSensationBase.innerHTML += '<option value = "' + bases[i] + '">' + bases[i] + '</option>';
    }

  /* Reload dropdown HTML to make options appear on first page load */
    var sizeContent = topRightSensationSize.innerHTML;
    topRightSensationSize.innerHTML = sizeContent;
    var baseContent = topRightSensationBase.innerHTML;
    topRightSensationBase.innerHTML = baseContent;
  });

  console.log(sizes);
  console.log(bases);

  
}

function loadSensation(sensId, sensationFile, optionsFile) {
  console.log("Loading sensation with ID of " + sensId);

  var sizes = [];
  var bases = [];

  $.getJSON(optionsFile, function(data) {
  	for (const size of data["sizes"]) {
  		sizes.push(size);
  	}
  	for (const base of data["bases"]) {
  		bases.push(base);
  	}
  });

  $.getJSON(sensationFile, function(data) {
    var obj = data.find(function(sensation, index) {
    	if (sensation.id == sensId) {
        console.log("Creating sensation info");
        createSensationInfo(data[index], sizes, bases);
      }
    })
  });
}

function createSensationInfo(sensData, sizes, bases) {

  document.getElementById('topLeftSensation').innerHTML = '<img src = "../' + sensData.imagePath + '">';

  document.getElementById('topRightSensationInfo').innerHTML += '<h1>' + sensData.name + '</h1>';
  document.getElementById('topRightSensationInfo').innerHTML += '<p>' + sensData.description + '</p>';

  topRightSensationSize = document.getElementById('topRightSensationSize');

  for (var i = 0; i < sizes.length; i++) {
    topRightSensationSize.innerHTML += '<option value="' + sizes[i] + '">' + sizes[i] + '</option>';
  }

  topRightSensationBase = document.getElementById('topRightSensationBase');

  for (var i = 0; i < bases.length; i++) {
    topRightSensationBase.innerHTML += '<option value = "' + bases[i] + '">' + bases[i] + '</option>';
  }

  /* Reload dropdown HTML to make options appear on first page load */
  var sizeContent = topRightSensationSize.innerHTML;
  topRightSensationSize.innerHTML = sizeContent;
  var baseContent = topRightSensationBase.innerHTML;
  topRightSensationBase.innerHTML = baseContent;
}

function updateCartNumber() {
  let currentOrder = JSON.parse(sessionStorage.getItem("szOrder"));
  document.getElementById("orderSizeLabel").innerHTML = currentOrder.orderItems.length;
}