<?php $urlCurrent = $_SERVER['PHP_SELF'] ?>
<!doctype html>
<!--[if IE 9]>    <html lang="fr" class="ie9" xmlns:og="http://ogp.me/ns#"><![endif]-->
<!--[if !IE]><!--><html lang="fr" xmlns:og="http://ogp.me/ns#"><!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>[Titre de la page] - [Nom du projet]</title>
    <meta name="description" content="[Description de la page]">

    <meta property="og:site_name" content="[Nom du site]">
    <meta property="og:title" content="[Titre de la page]">
    <meta property="og:image" content="[Image de la page]">
    <meta property="og:description" content="[Description de la page]">
    <meta property="og:type" content="[Type]">
    <meta property="og:url" content="[URL de la page]">

    <link rel="canonical" href="[URL de la page]">
    <link rel="stylesheet" href="/public/css/app.min.css">

    <script src="https://raw.githubusercontent.com/LeaVerou/prefixfree/gh-pages/prefixfree.min.js"></script>
    <script src="/public/js/modernizr.min.js"></script>
</head>
<body>

    <div class="off-canvas-wrap move-right" data-offcanvas>

        <div class="inner-wrap">

            <!-- Off Canvas Menu -->
            <?php include('includes/navigation-mobile.php') ?>

            <div class="header-sticky">

                <!-- Header section -->
                <header class="l-header row clearfix" role="banner">

                    <div class="columns small-1 hide-for-large-up">
                        <button class="left-off-canvas-toggle small-4">Menu</button>
                    </div>

                    <!-- Navigation principale -->
                    <?php include('includes/navigation.php') ?>

                </header>

            </div>