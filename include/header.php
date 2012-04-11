<html>
<head profile="http://www.w3.org/2005/10/profile">
<link rel="icon" 
      type="image/png" 
      href="http://www.rossallenbell.com/myicon.png">
<title>Ross Allen Bell - www.rossallenbell.com</title>
</head>
<body>
    <h4 style="font-family: sans-serif">Welcome to the Homepage of</h4>
    <h1 style="font-family: sans-serif">Ross Allen Bell</h1>
    <div class="nav">
        <?php if($_SERVER["REQUEST_URI"] == "/"){ ?>
            About
        <?php } else { ?>
    	    <a href="http://<?php echo $_SERVER['HTTP_HOST'] ?>">About</a>
        <?php } ?> | 
    	<?php if($_SERVER["REQUEST_URI"] == "/funstuff/"){ ?>
            Fun Stuff
        <?php } else { ?>
            <a href="http://<?php echo $_SERVER['HTTP_HOST'] ?>/funstuff">Fun Stuff</a>
        <?php } ?> | 
    	<a target="_blank" href="http://<?php echo $_SERVER['HTTP_HOST'] ?>/Resume_Bell_Ross.pdf">Resume (2010-10-23)</a>
	</div>