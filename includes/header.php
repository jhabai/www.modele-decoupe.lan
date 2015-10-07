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

    <script src="/public/js/prefixfree.min.js"></script>
    <script src="/public/js/modernizr.min.js"></script>
</head>
<body>

    <input type="checkbox" id="left-off-canvas-toggle" class="left-off-canvas-toggle">

    <div class="off-canvas-wrap" data-offcanvas>

        <div class="inner-wrap">

            <!-- Off Canvas Menu -->
            <?php include('includes/navigation-mobile.php') ?>

            <div id="header-sticky" class="header-sticky">

                <!-- Header section -->
                <header class="l-header row" role="banner">

                    <div class="columns small-1 hide-for-large-up">
                        <label for="left-off-canvas-toggle" class="button">Menu</label>
                    </div>

                </header>

                <!-- Navigation principale -->
                <?php include('includes/navigation.php') ?>

            </div>

            <!-- Contenu -->            
            <div class="l-container" id="l-container">

                <?php include('includes/grid.php') ?>

                <main class="l-content row block-grid" id="l-content" role="main" itemprop="mainContentOfPage">