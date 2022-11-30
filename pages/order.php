<html>
<head>
	<link rel="stylesheet" href="../style/style.css">
	<link rel="stylesheet" href="../style/navbar.css">
	<link rel="stylesheet" href="../style/footer.css">
	<meta name="viewport" content="width=device-width,initial-scale=1.0">
	<title>Sub Zero Ice Cream</title>
	<script src="https://kit.fontawesome.com/ef00204d1d.js" crossorigin="anonymous"></script>         
</head>

<body onload="createData('../data/mainMenu.json')">
	<div id = "navbar">
		<?php
			require_once("navbar.php");
		?>
	</div>
	<div class = "content">
		<div class = "container" id = "main">
			<div class = "orderBar" id = "orderBar">
			</div>
		</div>
	</div>

	<div id = "footer">
		<?php
		require_once("footer.php");
		?>
	</div>
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	<script src="../js/script.js"></script>   
	<script>
		$(function() {
			$("#orderBar").load("cartBar.html");
		})
	</script>
</body>
</html>