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
	console.log(bases);
  var tmp = '';

  tmp += '<div class = "left">';
  tmp += '<img src = "' + sensData.imagePath + '">';
  tmp += '</div>';
  tmp += '<div class = "right">';
  tmp += '<h1>' + sensData.name + '</h1>';
  tmp += '<p>' + sensData.description + '</p>';
  
  // tmp += '<h1>Choose Your Size</h1>';
  // tmp += '<div class = "select"> <div class = "selectWrapper"> <select class = "selectNative js-selectNative">';
  // for (const size of sizes) {
  // 	tmp += '<option>' + size + '</option>';
  // }
  // tmp += '</select><div class = "selectCustom js-selectCustom" aria-hidden = "true"> <div class = "selectCustom-trigger">Select Size...</div> <div class = "selectCustom-options">';
  // for (const size of sizes) {
  // 	tmp += '<div class = "selectCustom-option">' + size + "</div>";
  // }
  // tmp += '</div> </div> </div> </div>';

  
  // tmp += "<h1>Choose Your Base</h1>";
  // tmp += '<div class = "select"> <div class = "selectWrapper"> <select class = "selectNative js-selectNative">';
  // for (const base of bases) {
  // 	tmp += '<option>' + base + '</option>';
  // }
  // tmp += '</select><div class = "selectCustom js-selectCustom" aria-hidden = "true"> <div class = "selectCustom-trigger">Select Base...</div> <div class = "selectCustom-options">';
  // for (const base of bases) {
  // 	tmp += '<div class = "selectCustom-option">' + base + '</div>';
  // }
  // tmp += '</div> </div> </div> </div>';
  tmp += '</div>'

  $('#sensationInfo').prepend(tmp);
}