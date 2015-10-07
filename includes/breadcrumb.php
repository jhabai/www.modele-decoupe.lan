<nav class="show-for-large-up columns" role="menubar" aria-label="breadcrumb">
    <ol class="breadcrumb block-grid no-bullet" itemscope itemtype="http://schema.org/BreadcrumbList">
        <?php for ($item = 1; $item <= 5; $item++): ?>
            <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem" role="menuitem">
                <a href="" itemprop="item"><span itemprop="name">Breadcrumb <?php echo $item ?></span></a>
                <meta itemprop="position" content="<?php echo $item ?>" />
            </li>
        <?php endfor; ?>
    </ol>
</nav>