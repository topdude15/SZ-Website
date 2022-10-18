<html>
<head>
	<link rel="stylesheet" href="../style/style.css">
	<link rel="stylesheet" href="../style/navbar.css">
	<link rel="stylesheet" href="../style/cart.css">
	<title>Sub Zero Ice Cream</title>
	<style>@import url('https://fonts.cdnfonts.com/css/gotham-rounded');</style>
	<script src="https://kit.fontawesome.com/ef00204d1d.js" crossorigin="anonymous"></script>            
</head>

<body onload = "loadShoppingCart(); calculatePricing();">
	<div id = "navbar">
		<?php
		require_once('navbar.php')
		?>
	</div>
	<div class = "content">
		<div class = "container" id = "main">
		</div>
	</div>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	<script src="../js/script.js"></script>
	<script src="../js/shoppingCart.js"></script>
</body>

</html>