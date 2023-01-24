<html>
<head>
	<link rel="stylesheet" href="../style/home.css">
	<link rel="stylesheet" href="../style/style.css">
	<link rel="stylesheet" href="../style/navbar.css">
	<link rel="stylesheet" href="../style/footer.css">
	<link rel="stylesheet" href="../style/catering.css">
	<meta name="viewport" content="width=device-width,initial-scale=1.0">
	<link rel="icon" type="image/x-icon" href="../img/favicon.ico">
	<title>Sub Zero Ice Cream - Catering</title>
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
				<h1>Cater Differently</h1>
				<p>Sub Zero offers a unique and jawdropping catering experience for your event!</p>
				<button class = "primary-action" onclick = "window.location.href='index.php'">Schedule Your Event Today</button>
			</div>
			<div class = "mainRight">
				<img src="../img/catering.jpg">
			</div>
		</div>	

	</section>

	<div class="custom-shape-divider-top-1669611750">
			<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
				<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
			</svg>
		</div>

	<section id = "video">
		<div id = "videoLeft">
			<iframe src="https://www.youtube.com/embed/JxoSMwgkE2E?modestbranding=1&?rel=0&?mute=1" title="30 Second 1080" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</div>

		<div id = "videoRight">
			<h2>Customize to Impress</h2>
			<p>Do something here</p>
		</div>
		
	</section>

	<section id="action-boxes">
		<div class = "action-box">
			<img src = "../img/experience.png"></i>
			<h2>Experience</h2>
			<p>Not just a dessert, but an experience.</p>
		</div>
		<div class = "action-box">
			<img src = "../img/customized.png"></i>
			<h2>Customized</h2>
			<p>Pick the flavors you want to share. Nothing comapres to freshly frozen ice cream, made specifically for you.</p>
		</div>
		<div class = "action-box">
			<img src = "../img/hasslefree.png"></i>
			<h2>Hassle-Free</h2>
			<p>Present 4-5 highly exciting liquid nitrogen experiements = Fun Learning Experience</p>
		</div>
		<div class = "action-box">
			<img src = "../img/memorable.png"></i>
			<h2>Memorable</h2>
			<p>Celebrate the good times in a unique and tasty way that your guests will always remember and talk about.</p>
		</div>
		<div class = "action-box">
			<img src = "../img/worryfree.png"></i>
			<h2>Worry-Free</h2>
			<p>Enjoy your party while we take care of your guests from setup to cleanup.</p>
		</div>
	</section>

	<section id = "eventTypes">
		<!-- <h2>Make Your Next Event the Highlight of the Year!</h2> -->
		<section id = "events">
			<div class = "event">
				<img src="../img/business.jpg">
				<h2>Business</h2>
				<p>Business Events</p>
			</div>
			<div class = "event">
				<img src="../img/celebration.jpg">
				<h2>Business</h2>
				<p>Business Events</p>
			</div>
			<div class = "event">
				<img src="../img/wedding.jpg">
				<h2>Business</h2>
				<p>Business Events</p>
			</div>

		</section>
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