<nav class="show-for-large-up row" aria-label="Navigation principale" role="navigation">
    <ul id="l-navigation" class="columns no-bullet l-navigation block-grid" itemscope itemtype="http://www.schema.org/SiteNavigationElement">
        <?php for ($item = 1; $item <= 5; $item++): ?>
            <li class="l-navigation-item" itemprop="name">
                <a href="/" itemprop="url">Item <?php echo $item ?></a>
            </li>
        <?php endfor; ?>
    </ul>
</nav>