<button type="button" class="right show-vertical-grid" id="show-vertical-grid">V</button>
<button type="button" class="right show-horizontal-grid-8" id="show-horizontal-grid-8">H8</button>
<button type="button" class="right show-horizontal-grid-16" id="show-horizontal-grid-16">H16</button>
<button type="button" class="right show-horizontal-grid-32" id="show-horizontal-grid-32">H32</button>

<div class="row hide" id="grid-vertical">
    <div class="grid">
        <div class="columns small-1 medium-1 large-1"></div>
        <div class="columns small-1 medium-1 large-1"></div>
        <div class="columns small-1 medium-1 large-1"></div>
        <div class="columns small-1 medium-1 large-1"></div>
        <div class="columns medium-1 large-1"></div>
        <div class="columns medium-1 large-1"></div>
        <div class="columns medium-1 large-1"></div>
        <div class="columns medium-1 large-1"></div>
        <div class="columns large-1"></div>
        <div class="columns large-1"></div>
        <div class="columns large-1"></div>
        <div class="columns large-1"></div>
    </div>
</div>

<div class="row hide" id="grid-horizontal-8">
    <div class="grid-horizontal grid-8">
        <?php for ($i = 1; $i <= 300; $i++): ?>
            <div></div>
        <?php endfor; ?>
    </div>
</div>

<div class="row hide" id="grid-horizontal-16">
    <div class="grid-horizontal grid-16">
        <?php for ($i = 1; $i <= 150; $i++): ?>
            <div></div>
        <?php endfor; ?>
    </div>
</div>

<div class="row hide" id="grid-horizontal-32">
    <div class="grid-horizontal grid-32">
        <?php for ($i = 1; $i <= 75; $i++): ?>
            <div></div>
        <?php endfor; ?>
    </div>
</div>