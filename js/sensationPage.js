if ($('#addToOrderSensationButton').length > 0) {
  var orderButton = document.getElementById("addToOrderSensationButton");
  orderButton.addEventListener("click", addToOrder);
}
if ($('#addToOrderCreateButton').length > 0) {
  var createOrderButton = document.getElementById("addToOrderCreateButton");
  createOrderButton.addEventListener("click", addToOrder)
}

// var deleteButton = document.getElementById("deleteOrderButton");
// deleteButton.addEventListener("click", clearOrder);


function addToOrder(type) {
  
  let selectedSize = document.getElementById("topRightSensationSize").value;
  let selectedBase = document.getElementById("topRightSensationBase").value;
  let waffleSelection = document.getElementById("waffle-yes").checked;

  if (type == "sensation") {
  
  let params = (new URL(document.location)).searchParams;
  let sensId = params.get("sensId");

  var sensData;

  $.getJSON("../data/sensations.json", function(data) {
    var obj = data.find(function(sensation, index) {
      if (sensation.id == sensId) {
        sensData = data[index];

        var currentData = sessionStorage.getItem("szOrder");
        var newData = "";


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
    
  } else if (type == "create") {
  
    var flavors = [];
    var mixins = [];

    var currentData = sessionStorage.getItem("szOrder");
    var newData = "";
    
    if (currentData == null) {
      console.log("Current order does not exist");
      const newOrderId = revisedRandId();
      const order = {"orderId": newOrderId, "orderItems": [{"itemType": "create", "itemSize": selectedSize, "itemBase": selectedBase, "includeWaffle": waffleSelection, "mixins": mixins, "flavors": flavors}]};
      sessionStorage.setItem("szOrder", JSON.stringify(order));
    } else {
      console.log("Current order exists");
      var order = JSON.parse(currentData);
      order.orderItems.push({"itemType": "create", "itemSize": selectedSize, "itemBase": selectedBase, "includeWaffle": waffleSelection, "mixins": mixins, "flavors": flavors});
      sessionStorage.setItem("szOrder", JSON.stringify(order));
    }
  }

    updateShoppingCart();
    updateCartNumber();
  })

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