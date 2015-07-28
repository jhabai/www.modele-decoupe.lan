<aside class="left-off-canvas-menu">
    <ul id="l-navigation-mobile" class="off-canvas-list l-navigation-mobile" role="navigation" aria-label="Navigation mobile">
        <li>
            <input type="radio" name="navigation-menu" id="submenu-1" class="show-submenu is-hidden">
            <label for="submenu-1">Un sous-menu</label>
            <ul class="no-bullet submenu">
                <?php for($item = 1; $item <= 5; $item++): ?>
                    <li><a href="">First sub-menu <?php echo $item ?></a></li>
                <?php endfor; ?>
            </ul>
        </li>
        <li class="active">
            <input type="radio" name="navigation-menu" id="submenu-2" class="show-submenu is-hidden">
            <label for="submenu-2">Un second sous-menu</label>
            <ul class="no-bullet submenu">
                <?php for($item = 1; $item <= 5; $item++): ?>
                    <li><a href="">Secondsub-menu <?php echo $item ?></a></li>
                <?php endfor; ?>
            </ul>
        </li>
        <li class="active">
            <input type="radio" name="navigation-menu" id="submenu-3" class="show-submenu is-hidden">
            <label for="submenu-3">Un second sous-menu</label>
            <ul class="no-bullet submenu">
                <?php for($item = 1; $item <= 5; $item++): ?>
                    <li><a href="">Secondsub-menu <?php echo $item ?></a></li>
                <?php endfor; ?>
            </ul>
        </li>
        <li class="active">
            <input type="radio" name="navigation-menu" id="submenu-4" class="show-submenu is-hidden">
            <label for="submenu-4">Un second sous-menu</label>
            <ul class="no-bullet submenu">
                <?php for($item = 1; $item <= 5; $item++): ?>
                    <li><a href="">Secondsub-menu <?php echo $item ?></a></li>
                <?php endfor; ?>
            </ul>
        </li>
        <?php for ($item = 1; $item <= 20; $item++): ?>
            <li><a href="">Item <?php echo $item ?></a></li>
        <?php endfor ?>
    </ul>
</aside>