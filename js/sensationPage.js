if ($('#addToOrderSensationButton').length > 0) {
  var orderButton = document.getElementById("addToOrderSensationButton");
  orderButton.addEventListener("click", function() {
    addToOrder("sensation");
  });
}
if ($('#addToOrderCreateButton').length > 0) {
  var createOrderButton = document.getElementById("addToOrderCreateButton");
  createOrderButton.addEventListener("click", function() {
    addToOrder("create");
  })
}

// var deleteButton = document.getElementById("deleteOrderButton");
// deleteButton.addEventListener("click", clearOrder);

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

function addToOrder(type) {

  if (type == "sensation") {

    let selectedSize = document.getElementById("topRightSensationSize").value;
    let selectedBase = document.getElementById("topRightSensationBase").value;
    let waffleSelection = document.getElementById("waffle-yes").checked;

    let params = (new URL(document.location)).searchParams;
    let sensId = params.get("sensId");

    var sensData;

    $.getJSON("../data/sensations.json", function(data) {
      var obj = data.find(function(sensation, index) {
        if (sensation.id == sensId) {
          sensData = data[index];

          var currentData = sessionStorage.getItem("szOrder");
          var newData = "";

          if (currentData == null) {
            const newOrderId = revisedRandId();
            const order = {"orderId": newOrderId, "orderItems": [{"itemType": "sensation", "sensationId": sensData.id, "itemSize": selectedSize, "itemBase": selectedBase, "includeWaffle": waffleSelection}]};
            sessionStorage.setItem("szOrder", JSON.stringify(order));
          } else {
            var order = JSON.parse(currentData);
            order.orderItems.push({"itemType": "sensation", "sensationId": sensData.id, "itemSize": selectedSize, "itemBase": selectedBase, "includeWaffle": waffleSelection});
            sessionStorage.setItem("szOrder", JSON.stringify(order));
          }
        }
      })
      updateShoppingCart();
      updateCartNumber();
    })
  } else if (type == "create") {
    var flavors = [];
    var mixins = [];

    document.querySelectorAll('input[name="flavor"]:checked').forEach(function(elem) {
      flavors.push(elem.id);
    })
    document.querySelectorAll('input[name="mixin]:checked').forEach(function(elem) {
      mixins.push(elem.id);
    })
  }
}

function clearOrder() {
  sessionStorage.removeItem("szOrder");
}

// Random ID used for order ID
function revisedRandId() {
 return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
}

let sizeSelected, baseSelected;

const sels = document.querySelectorAll('.selects').forEach((item) => {
  item.addEventListener('change', function(e) {
    if (e.target.id === "topRightSensationSize") {
      sizeSelected = true;
    }
    if (e.target.id === "topRightSensationBase") {
      baseSelected = true;
    }
    if (sizeSelected && baseSelected) {
      if($('#addToOrderSensationButton').length > 0) {
       $('#addToOrderSensationButton').prop('disabled', false);
     }
     if($('#addToOrderCreateButton').length > 0) {
       $('#addToOrderCreateButton').prop('disabled', false);
     }
   }
 })
})

$(document).on("change", "input[type='checkbox']", function () {
  $(this).parent()[this.checked ? "addClass" : "removeClass"]("checked");
});