<ul class="off-canvas-list l-navigation-mobile" id="l-navigation-mobile">
	<li>
		<label>Un sous-menu</label>
		<ul class="submenu">
			<li><a href="">Test 1</a></li>
			<li><a href="">Test 2</a></li>
			<li><a href="">Test 3</a></li>
			<li><a href="">Test 4</a></li>
			<li><a href="">Test 5</a></li>
		</ul>
	</li>
	<li class="active">
		<label>Un second sous-menu</label>
		<ul class="submenu">
			<li><a href="">Test 1</a></li>
			<li><a href="">Test 2</a></li>
			<li><a href="">Test 3</a></li>
			<li><a href="">Test 4</a></li>
			<li><a href="">Test 5</a></li>
		</ul>
	</li>
	<?php for ($item = 1; $item <= 20; $item++): ?>
	    <li><a href="">Item <?php echo $item ?></a></li>
	<?php endfor ?>
</ul>