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

    <div id="colorbox" class="colorbox">
        
        <h1>Mot de passe oublié</h1>

        <div class="colorbox-content">

            <!-- Contenu -->
            <div class="columns large-10 centered">

                <?php if (isset($_POST["email"])): ?>
                        
                    <?php if (!empty($_POST["email"])): ?>
                        <br>
                        <div data-alert class="alert-box success">
                            <?php echo "Votre mot de passe a été envoyé !" ?>
                        </div>
                    <?php endif ?>
                        
                    <?php if (empty($_POST["email"])): ?>
                        <br>
                        <div data-alert class="alert-box alert">
                            <?php echo "Merci de saisir votre adresse e-mail" ?>
                        </div>
                    <?php endif ?>
                        
                <?php endif ?>
                
                <form action="cb-pass-lost.php" method="post">
                    <div class="columns large-6">
                        <label for="id">Identifiant</label>
                        <input type="text" name="id" id="id">
                    </div>
                    <div class="columns large-6">
                        <label for="email">Adresse e-mail</label>
                        <input type="text" name="email" id="email">
                    </div>
                    <div class="columns">
                        <button type="submit" class="large-3">Envoyer</button>
                    </div>
                </form>

            </div>

        </div>

    </div>

    <!-- javascript -->
    <script src="/js/app.min.js"></script>

</body>
</html>