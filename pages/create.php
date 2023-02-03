<html>
<head>
	<link rel="stylesheet" href="../style/style.css">
	<link rel="stylesheet" href="../style/form.css">
	<link rel="stylesheet" href="../style/navbar.css">
	<link rel="stylesheet" href="../style/order.css">
	<link rel="stylesheet" href="../style/footer.css">
	<meta name="viewport" content="width=device-width,initial-scale=1.0">
	<link rel="icon" type="image/x-icon" href="../img/favicon.ico">
	<title>Sub Zero Ice Cream</title>

	<style>@import url('https://fonts.cdnfonts.com/css/gotham-rounded');</style>

	<script src="https://kit.fontawesome.com/ef00204d1d.js" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
	<link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons'>

</head>

<body onload="loadBasic(); createFlavorData('../data/options.json')">
	<div id = "navbar">
		<?php
			require_once("navbar.php");
		?>
	</div>

	<div class = "content">
		<div class = "container" id = "main">
			<div class = "orderBar" id = "orderBar">
			</div>
			<div class = "sensationContent">
				<div class = "container" id = "sensationInfo">
					<div class = "topLeftSensation" id = "topLeftSensation">
					</div>
					<div class = "topRightSensation" id = "topRightSensation">
						<div id = "topRightSensationInfo">
						</div>
						<div id = "topRightSensationOptions">
							<h2>Choose Your Size</h2>
							<select class = "form-select form-select-lg mb-3 selects" id = "topRightSensationSize" name = "topRightSensationSize">
								<option selected disabled hidden>Select Your Size...</option>
							</select>
							<h2>Choose Your Base</h2>
							<select class = "form-select form-select-lg mb-3 selects" id = "topRightSensationBase" name = "topRightSensationBase">
								<option selected disabled hidden>Select Your Base...</option>
							</select>
							<h2>Choose Your Flavor(s)</h2>
							<div class = "flavors" id = "flavors">
							</div>
							<h2>Would you like a waffle bowl?</h2>
							<div id = "waffleSelect">
								<input id = "waffle-yes" name = "waffle" type="radio" checked>
								<label for = "waffle-yes">Yes</label>
								<input id = "waffle-no" name = "waffle" type= "radio">
								<label for = "waffle-no">No</label>
							</div>
							<br>
							<button type = "button" id="addToOrderCreateButton" class = "addToOrder" disabled> Add to Order</button>
							<!-- <button id="deleteOrderButton">Delete Order</button> -->
							<br>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div id = "footer">
		<?php
			require_once("footer.php");
		?>
	</div>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	<script src="../js/loadData.js"></script>
	<script src="../js/sensationPage.js"></script>
	<script src="../js/shoppingCart.js"></script>
	<script>
		$(function() {
			$("#orderBar").load("cartBar.html");
		})
	</script>
</body>

</html>
