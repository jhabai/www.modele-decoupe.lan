<!doctype html>
<!--[if IE 9]>    <html lang="fr" class="ie9"><![endif]-->
<!--[if !IE]><!--><html lang="fr"><!--<![endif]-->
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
    <link rel="stylesheet" href="/css/app.min.css">

    <script src="/js/modernizr.min.js"></script>
</head>
<body itemscope itemtype="http://schema.org/WebPage">

    <div class="off-canvas-wrap" data-offcanvas>

        <div class="inner-wrap">

            <!-- Off Canvas Menu -->
            <aside class="left-off-canvas-menu l-navigation-mobile" role="navigation" aria-label="Navigation mobile">
                <?php include('includes/navigation-mobile.php') ?>
            </aside>

            <div class="header-sticky">

                <!-- Header section -->
                <header class="l-header row clearfix" role="banner" itemscope itemtype="http://schema.org/WPHeader">
                    
                    <div class="columns small-1 hide-for-large-up">
                        <button class="left-off-canvas-toggle small-4">Menu</button>
                    </div>

                    <!-- Navigation principale -->
                    <nav class="show-for-large-up right" role="navigation" aria-label="Navigation principale" itemscope itemtype="http://schema.org/SiteNavigationElement">
                        <?php include('includes/navigation.php') ?>
                    </nav>
                    
                </header>

            </div>