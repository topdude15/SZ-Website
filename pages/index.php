<html>
<head>
	<link rel="stylesheet" href="../style/home.css">
	<link rel="stylesheet" href="../style/style.css">
	<link rel="stylesheet" href="../style/navbar.css">
	<link rel="stylesheet" href="../style/footer.css">
	<meta name="viewport" content="width=device-width,initial-scale=1.0">
	<title>Sub Zero Ice Cream</title>
	<style>
		@import url('https://fonts.cdnfonts.com/css/gotham-rounded');
		@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap');
	</style>
	<script src="https://kit.fontawesome.com/ef00204d1d.js" crossorigin="anonymous"></script>         
</head>

<body>
	<div id = "navbar">
		<?php
		require_once("navbar.php");
		?>
	</div>

	<section id = "main" class = "homeContent">
		<div id = "banner">
			<div class = "mainLeft">
				<h1>Experience Our Difference</h1>
			</div>
			<div class = "mainRight">
				<img src="../img/newfrontpage.jpg">
			</div>
		</div>	

	</section>

	<div class="custom-shape-divider-top-1669611750">
			<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
				<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
			</svg>
		</div>

	<section id="action-boxes">
		<div class = "action-box">
			<i class="fa-solid fa-ice-cream fa-3x"></i>
			<h2>Catering</h2>
			<p>Feature Our Difference at Your Event!</p>
			<button>REQUEST CATERING INFORMATION</button>
		</div>
		<div class = "action-box">
			<i class="fa-solid fa-location-arrow fa-3x"></i>
			<h2>Find a Location</h2>
			<p>Visit our difference.  Come see us at a location near you.</p>
			<button>FIND A LOCATION</button>
		</div>
		<div class = "action-box">
			<i class="fa-solid fa-store fa-3x"></i>
			<h2>Order Online</h2>
			<p>Taste Our Difference by ordering online and have it ready for you to pickup when you arrive.</p>
			<button>ORDER ONLINE</button>
		</div>
	</section>

	<div id = "footer">
		<?php
		require_once("footer.php");
		?>
	</div>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	<script src="../js/script.js"></script> 
</body>
</html>