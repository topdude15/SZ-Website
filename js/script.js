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



const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");

/* Toggle mobile menu */
function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "Menu";
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "Close Menu";
  }
}

/* Activate Submenu */
function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
  if (menu.querySelector(".submenu-active")) {
    let isClickInside = menu
      .querySelector(".submenu-active")
      .contains(e.target);

    if (!isClickInside && menu.querySelector(".submenu-active")) {
      menu.querySelector(".submenu-active").classList.remove("submenu-active");
    }
  }
}
/* Event Listeners */
toggle.addEventListener("click", toggleMenu, false);
for (let item of items) {
  if (item.querySelector(".submenu")) {
    item.addEventListener("click", toggleItem, false);
  }
  item.addEventListener("keypress", toggleItem, false);
}
document.addEventListener("click", closeSubmenu, false);

