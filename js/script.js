var jsonData ='[{"name":"Sensations","imagePath":"img/ChocolateConduction.png","destination":"sensations.html","imageWidth":"70%","divId":"sensations"},{"name":"Create Your Own","imagePath":"img/PeanutButterBonds.png","destination":"create.html","imageWidth":"70%","divId":"create"},{"name":"Soda Lab","imagePath":"img/coke.png","destination":"sodalab.html","imageWidth":"45.75%","divId":"sodalab"},{"name":"Pies","imagePath":"img/TropicalTurbine.png","destination":"pie.html","imageWidth":"70%","divId":"pie"},{"name":"Specialty Items","imagePath":"img/MagneticMint.png","destination":"special.html","imageWidth":"70%","divId":"special"},{"name":"Specialty Items","imagePath":"img/MagneticMint.png","destination":"special.html","imageWidth":"70%","divId":"special"}]';

var obj = JSON.parse( jsonData );

var tmp = '';

$.each(obj, function(key, value) {
		tmp += '<a href = "' + value.destination + '" class = "menuItem">';
		tmp += '	<div class = "orderItem" id = "' + value.divId + '">';
		tmp += '		<img src="' + value.imagePath + '" width = "' + value.imageWidth + '">';
		tmp += '		<p>' + value.name + '</p>';
		tmp += '</div>';
		tmp += '</a>';
	});

$('#main').prepend(tmp);