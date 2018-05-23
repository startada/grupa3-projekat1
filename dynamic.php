<!doctype html>
<!--[if lt IE 7]>
<html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>
<html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>
<html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang=""> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="img/icons/favicon.ico" type="image/x-icon"/>
    <link rel="apple-touch-icon" href="img/icons/apple-touch-icon.png"/>
    <link rel="apple-touch-icon" sizes="57x57" href="img/icons/apple-touch-icon-57x57.png"/>
    <link rel="apple-touch-icon" sizes="72x72" href="img/icons/apple-touch-icon-72x72.png"/>
    <link rel="apple-touch-icon" sizes="76x76" href="img/icons/apple-touch-icon-76x76.png"/>
    <link rel="apple-touch-icon" sizes="114x114" href="img/icons/apple-touch-icon-114x114.png"/>
    <link rel="apple-touch-icon" sizes="120x120" href="img/icons/apple-touch-icon-120x120.png"/>
    <link rel="apple-touch-icon" sizes="144x144" href="img/icons/apple-touch-icon-144x144.png"/>
    <link rel="apple-touch-icon" sizes="152x152" href="img/icons/apple-touch-icon-152x152.png"/>
    <link rel="apple-touch-icon" sizes="180x180" href="img/icons/apple-touch-icon-180x180.png"/>

    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="css/lightbox.min.css">
    <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900|Ubuntu:300,400,500,700&amp;subset=latin-ext" rel="stylesheet">

    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/main.min.css">

    <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>

</head>
<body>
<div class="media-checker"></div>
<!--[if lt IE 8]>
<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]-->
<div class="head-content-wrapper"></div>
<?php
$prva = 12345;
$niz  = array(1, 2, 3, 4);

?>
<main>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="finale-content-wrapper">
                    <h1>Grand Finale</h1>
                    <?php
                    echo '<div>Hello World' . $prva . '</div>';
                    echo "<div>Hello world $prva</div>";
                    echo (123 + 456) . '<br>';
                    echo (123 - 456) . '<br>';
                    echo (123 * 456) . '<br>';
                    echo (123 / 456) . '<br>';
                    echo (456 % 3) . '<br>';
                    print_r( $niz);
                    echo $niz[1];
                    echo '<br>';
                    $student =  new stdClass();
                    $student->ime = 'Tijana';
                    $student->prezime = 'Jovanovic';
                    $student->brojIndexa = '1234-sc';


                    print_r($student);

                    echo '<br>';
                    echo $student->prezime;
                    ?>
                </div>
            </div>
        </div>

    </div>
</main>
<div class="footer-content-wrapper"></div>
<script src=";//ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.12.4.min.js"><\/script>')</script>
<script src="js/vendor/jquery.ba-throttle-debounce.min.js"></script>
<script src="js/vendor/bootstrap.min.js"></script>
<script src="js/vendor/lightbox.min.js"></script>
<script src="js/common/utilities.min.js"></script>
<script src="js/main.min.js"></script>

<!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
<script>
    (function(b, o, i, l, e, r) {
        b.GoogleAnalyticsObject = l;
        b[l] || (b[l] =
            function() {
                (b[l].q = b[l].q || []).push(arguments)
            });
        b[l].l = +new Date;
        e = o.createElement(i);
        r = o.getElementsByTagName(i)[0];
        e.src = '//www.google-analytics.com/analytics.js';
        r.parentNode.insertBefore(e, r)
    }(window, document, 'script', 'ga'));
    ga('create', 'UA-XXXXX-X', 'auto');
    ga('send', 'pageview');
</script>
</body>
</html>
