ig.module(
    'game.entities.player'
)
.requires(
    'impact.entity'
)
.defines(function() {
    EntityPlayer = ig.Entity.extend({
        //setup Sprite Sheet
        //tiles are 16x16
        animSheet: new ig.AnimationSheet('media/ship_spritesheet.png', 140, 150),
        size: {x: 150, y: 150},
        //offset = 4 pixels on left and right, 2 pixels on top and bottom
        //used for collision
        //makes collision space smaller than the sprite, accounting for translucent space
        offset: {x: 5, y: 0},
        init: function (x, y, settings) {
            this.parent(x, y, settings);
            //name, duration, array of sprite sheet frames
            this.addAnim('idle', .6, [0,1]);
        },
        update: function() {
            this.currentAnim = this.anims.idle;
        	this.parent();
        }
    });
});