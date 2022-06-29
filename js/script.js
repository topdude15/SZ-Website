function createData(jsonFile) {

	$.getJSON(jsonFile, function(data) {

    var tmp = '';

    $.each(data, function(key ,value) {
     tmp += '<a href = "/pages/' + value.destination + '" class = "menuItem">';
     tmp += '	<div class = "orderItem" id = "' + value.divId + '">';
     tmp += '		<img src="../' + value.imagePath + '" width = "' + value.imageWidth + '">';
     tmp += '		<p>' + value.name + '</p>';
     tmp += '</div>';
     tmp += '</a>';
   });

    $('#main').append(tmp);
  });
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
  topRightSensationSize.contentWindows.location.reload(true);
}

function updateCartNumber() {
  let currentOrder = JSON.parse(sessionStorage.getItem("szOrder"));
  document.getElementById("orderSizeLabel").innerHTML = currentOrder.orderItems.length;
}