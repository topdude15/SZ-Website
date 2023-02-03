var orderButton = document.getElementById("checkOutButton");
orderButton.addEventListener("click", calculatePricing);

function updateShoppingCart() {
  let currentOrder = JSON.parse(sessionStorage.getItem("szOrder"));
  console.log("Current number of items in order:");
  console.log(currentOrder.orderItems.length);
}

function loadShoppingCart() {
  let currentOrder = JSON.parse(sessionStorage.getItem("szOrder"));
  console.log(currentOrder);
  var tmp = '';
  var sens = '';
  $.getJSON("../data/sensations.json", function(data) {
    var obj = data.find(function(sensation, index) {
      for (i = 0; i < currentOrder.orderItems.length; i++) {
        console.log(currentOrder.orderItems.length);
        if (currentOrder.orderItems[i].itemType == "sensation") {
          if (sensation.id == currentOrder.orderItems[i].sensationId) {
            tmp += '<div class = "cartItem">';
            tmp += '<img class = "cartImg" src = "../' + sensation.imagePath + '">';
            tmp += '<p class = "cartTitle">' + sensation.name + '</p>';
            tmp += '<p class = "cartSubtitle">Size: ' + currentOrder.orderItems[i].itemSize + '</p>';
            tmp += '<p class = "cartSubtitle">Base: ' + currentOrder.orderItems[i].itemBase + '</p>';
            tmp += '<p class = "cartSubtitle">Waffle included: ' + (currentOrder.orderItems[i].includeWaffle ? "Yes" : "No") + '</p>';
            tmp += '</div>';
          }
        } else if (currentOrder.orderItems[i].itemType == "create") {
          tmp += '<div class = "cartItem">';
          tmp += '<img class = "cartImg src = "../img/sensation/BananaCreamPi.png">';
          tmp += '<p class = "cartTitle">Create Your Own</p>';
          tmp += '<p class = "cartSubtitle">Size: ' + currentOrder.orderItems[i].itemSize + '</p>';
          tmp += '<p class = "cartSubtitle">Base: ' + currentOrder.orderItems[i].itemBase + '</p>';
          tmp += '<p class = "cartSubtitle">Waffle Included: ' + (currentOrder.orderItems[i].includeWaffle ? "Yes" : "No") + '</p>';
          tmp += '<p class = "cartSubtitle">Mixins: ';
          tmp += '<p class = "cartSubtitle">Flavors: ';
          tmp += '</div>';
        }
      };
    })
      $('#main').append(tmp);
  })
}

function calculatePricing() {
  let currentOrder = JSON.parse(sessionStorage.getItem("szOrder"));
  console.log(currentOrder);

  

  for (i = 0; i < currentOrder.orderItems.length; i++) {
    console.log(currentOrder.orderItems[i].includeWaffle)
  }
  // $.getJSON("../data/pricing.json", function(data) {
  //   var obj = data.find(function(sensation, index) {
  //     for (i = 0; i < currentOrder.orderItems.length; i++) {
  //       console.log(currentOrder.orderItems[i].includeWaffle);
  //     }
  //   })
  // })
}