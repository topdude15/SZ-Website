var orderButton = document.getElementById("addToOrderButton");
orderButton.addEventListener("click", addToOrder);

// var deleteButton = document.getElementById("deleteOrderButton");
// deleteButton.addEventListener("click", clearOrder);

function addToOrder() {

  let selectedSize = document.getElementById("topRightSensationSize").value;
  let selectedBase = document.getElementById("topRightSensationBase").value;

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
          const order = {"orderId": newOrderId, "orderItems": [{"itemType": "sensation", "sensationId": sensData.id, "itemSize": selectedSize, "itemBase": selectedBase}]};
          sessionStorage.setItem("szOrder", JSON.stringify(order));
        } else {
          var order = JSON.parse(currentData);
          order.orderItems.push({"itemType": "sensation", "sensationId": sensData.id, "itemSize": selectedSize, "itemBase": selectedBase});
          sessionStorage.setItem("szOrder", JSON.stringify(order));
        }
      }
    })
    updateShoppingCart();
    updateCartNumber();
  })
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
      $('#addToOrderButton').prop('disabled', false);
    }
  })
})