<!doctype html>
<!--[if IE 9]>    <html lang="fr" class="ie9"><![endif]-->
<!--[if !IE]><!--><html lang="fr"><!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>[Titre de la page] - [Nom du projet]</title>

    <link rel="stylesheet" href="/css/app.css">
    <script src="/js/modernizr.min.js"></script>
</head>
<body>

    <div class="colorbox clearfix credits">
        
        <h1>Crédits</h1>

        <div class="columns large-9 centered">

            <div class="columns large-5 logo-ice text-center">
                <a href="http://www.ice-dev.com/" target="_blank">
                    <img src="/images/logo/logo-ice-development.jpg" alt="Logo Ice Development">
                </a>
            </div>

            <div class="columns large-6 large-offset-1 text-center">
                <ul class="ice-dev">
                    <li><a href="http://www.ice-dev.com/creation-site-web/concevoir.html" target="_blank" rel="nofollow">Conception</a></li>
                    <li><a href="http://www.ice-dev.com/" target="_blank" rel="nofollow">Développement</a></li>
                    <li><a href="http://www.ice-dev.com/hebergement/les-services.html" target="_blank" rel="nofollow">Hébergement</a></li>
                    <li><a href="http://www.ice-dev.com/referencement/referencement-de-site.html" target="_blank" rel="nofollow">Référencement</a></li>
                </ul>
                <a href="http://www.ice-dev.com/" class="responsive icon-responsive" target="_blank"><span>www.ice-dev.com</span></a>
            </div>

        </div>

    </div>

    <!-- javascript -->
    <script src="/js/app.min.js"></script>
    <script>
        $(document).ready(function() {

            // On fixe la hauteur de la colorbox

            taille = $('.colorbox').outerHeight();
            
            parent.$.colorbox.resize({
                height: taille
            });

        });
    </script>

</body>
</html>