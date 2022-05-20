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


function loadSensation(sensId, jsonFile) {
  console.log("Loading sensation with ID of " + sensId);

  $.getJSON(jsonFile, function(data) {
    var obj = data.find(o => o.id === 1);
    createSensationInfo(obj);
  });
}

function createSensationInfo(sensData) {
  console.log(sensData["name"]);
}