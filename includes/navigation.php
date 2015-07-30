<nav class="show-for-large-up row" aria-label="Navigation principale" role="navigation">
    <ul id="l-navigation" class="no-bullet l-navigation block-grid">
        <meta itemprop="name" content="navigation_menu">
        <?php for ($item = 1; $item <= 5; $item++): ?>
            <li class="l-navigation-item" itemtype="http://www.schema.org/SiteNavigationElement" itemscope itemprop="additionalType">
                <a href="" itemprop="url"><span itemprop="name">Item <?php echo $item ?></span></a>
            </li>
        <?php endfor; ?>
    </ul>
</nav>