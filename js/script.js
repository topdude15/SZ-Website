function createData(jsonFile) {
	$.getJSON(jsonFile, function(data) {

    var tmp = '';
		$.each(data, function(key, value) {
			tmp += '<a href = "' + value.destination + '" class = "menuItem">';
			tmp += '	<div class = "orderItem" id = "' + value.divId + '">';
			tmp += '		<img src="' + value.imagePath + '" width = "' + value.imageWidth + '">';
			tmp += '		<p>' + value.name + '</p>';
			tmp += '</div>';
			tmp += '</a>';
		});

		$('#main').prepend(tmp);
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
	console.log(sensData);
	console.log(sizes);
  var tmp = '';

  tmp += '<div class = "left">';
  tmp += '<img src = "' + sensData.imagePath + '">';
  tmp += '</div>';
  tmp += '<div class = "right">';
  tmp += '<h1>' + sensData.name + '</h1>';
  tmp += '<p>' + sensData.description + '</p>';
  
  tmp += '<h1>Choose Your Size</h1>';
  tmp += '<select class="form-select form-select-lg mb-3 sensationSelect">';
  tmp += '<option selected hidden disabled>Choose your size...</option>';
  for (const size of sizes) {
    tmp += '<option value="' + size + '">' + size + '</option>';
  }
  tmp += '</select>';

  tmp += '<link rel="stylesheet" href="style/style.css">';
  tmp += '<link rel="stylesheet" href="style/navbar.css">';

  $('#sensationInfo').prepend(tmp);

}