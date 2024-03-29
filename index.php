<?php include('includes/header.php') ?>

    <?php include('includes/breadcrumb.php'); ?>

    <section class="columns">
        <h2>Le contenu</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid tempore nihil eius fuga, ipsam quisquam omnis aspernatur consectetur? Velit aliquid rem maiores culpa, iste accusantium, modi. Impedit expedita, consequatur repellat!</p>
        <p>Lorem ipsum dolor sit amet, consectetur <a href="" class="cb-iframe">adipisicing</a> elit. Aliquid tempore nihil eius fuga, ipsam quisquam omnis aspernatur consectetur? Velit aliquid rem maiores culpa, iste accusantium, modi. Impedit expedita, consequatur repellat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel magni, necessitatibus ipsa ut. Libero quo accusantium tenetur eos impedit, harum ut tempora error, sed nostrum iure dolor ab, fugiat fugit.</p>
    </section>

    <section class="small-4">
        <ul class="small-block-grid-2 medium-block-grid-6 large-block-grid-4">
            <?php for ($i = 1; $i <= 16; $i++): ?>
                <li class="columns">Colonne <?php echo $i ?></li>
            <?php endfor; ?>
        </ul>
    </section>

    <section class="large-8">

        <h2 class="columns">Un formulaire</h2>

        <?php if ($_POST): ?>
            <p class="alert-box success">Message envoyé</p>
        <?php endif; ?>

        <!-- Ajouter role="search" pour les formulaires de recherche -->
        <form action="" method="post" class="block-grid" data-abide>
            <div class="columns small-4">
                <label for="">Un select</label>
                <div class="select">
                    <select name="" id="">
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                        <option value="Option 4">Option 4</option>
                        <option value="Option 5">Option 5</option>
                    </select>
                </div>
            </div>
            <div class="columns small-2">
                <div>
                    <label for="label-1">Un label</label>
                    <input type="text" id="label-1">
                </div>
            </div>
            <div class="columns small-2">
                <div>
                    <label for="label-2">Un label</label>
                    <input type="text" id="label-2" placeholder="Placeholder" required>
                    <small class="error">Un champ obligatoire</small>
                </div>
            </div>
            <div class="columns small-4 large-6">
                <div>
                    <input type="checkbox" name="" id="required" class="checkbox" required>
                    <label for="required">Une checkbox obligatoire</label>
                    <small class="error">Un champ obligatoire</small>
                </div>
                <div>
                    <input type="checkbox" name="" id="checkbox" class="checkbox">
                    <label for="checkbox">Une checkbox</label>
                </div>
            </div>
            <div class="columns small-4 large-6">
                <div>
                    <input type="radio" name="radio" id="radio-1" class="radio" required>
                    <label for="radio-1">Radio 1 obligatoire</label>
                </div>
                <div>
                    <input type="radio" name="radio" id="radio-2" class="radio" required>
                    <label for="radio-2">Radio 2</label>
                </div>
            </div>
            <div class="columns small-4">
                <label for="textarea">Un textarea</label>
                <textarea id="textarea"></textarea>
            </div>
            <div class="columns small-4 medium-4 large-4">
                <button class="full">Envoyer</button>
                <a href="" class="full button">Envoyer</a>
                <button class="full disabled" disabled>Envoyer</button>
            </div>
        </form>
    </section>

    <aside role="complementary" class="columns large-4">
        <h2>Une sidebar</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero totam ipsum nulla magni neque assumenda cupiditate accusantium aliquid cum quis molestiae animi eligendi illum, magnam aspernatur doloremque ducimus enim esse.</p>
    </aside>

<?php include('includes/footer.php') ?>