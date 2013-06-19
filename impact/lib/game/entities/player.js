ig.module(
    'game.entities.player'
)
.requires(
    'impact.entity'
)
.defines(function() {
    EntityPlayer = ig.Entity.extend({
        //tiles are 16x16
        animSheet: new ig.AnimationSheet('media/ship_spritesheet.png', 200, 200),
        size: {x: 200, y: 200},
        offset: {x: 5, y: 0},
        upTimer: null,
        directionArr: ['N', 'E', 'S', 'W'],
        direction: 'N',
        currDir: 0,
        init: function (x, y, settings) {
            this.parent(x, y, settings);
            this.addAnim('idle', .6, [0,1]);
            this.addAnim('move', 1, [4,5,6,7,7,7,7,7,7,7]);
            this.currentAnim = this.anims.idle;
            this.upTimer = new ig.Timer();
        },
        update: function() {
            //this.currentAnim = this.anims.idle;
            if(ig.input.pressed('forwardOne')) {
                this.currentAnim = this.anims.move;
                var dirMultiplier = (this.direction == 'N' || this.direction == 'W') ? -1 : 1;
                if(this.direction == 'N' || this.direction == 'S')
                    this.vel.y = dirMultiplier*500;
                else
                    this.vel.x = dirMultiplier*500;
                this.upTimer.reset();
            }
            if(ig.input.pressed('reverseOne')) {
                this.currentAnim = this.anims.move;
                var dirMultiplier = (this.direction == 'N' || this.direction == 'W') ? 1 : -1;
                if(this.direction == 'N' || this.direction == 'S')
                    this.vel.y = dirMultiplier*500;
                else
                    this.vel.x = dirMultiplier*500;
                this.upTimer.reset();
            }
            if(ig.input.pressed('turnLeft')) {
               this.currDir = this.currDir-1;
               if(this.currDir < 0) 
                   this.currDir = 3;
               this.direction = this.directionArr[this.currDir];
               console.log(this.direction);
            }
            if(ig.input.pressed('turnRight')) {
               this.currDir = this.currDir+1;
               if(this.currDir > 3) 
                   this.currDir = 0;
               this.direction = this.directionArr[this.currDir];
               console.log(this.direction);
            }
            if(ig.input.pressed('uTurn')) {
                this.currDir = (this.currDir+2)%4;
                this.direction = this.directionArr[this.currDir];
                console.log("u"+this.direction);
            }
            if(this.upTimer.delta() > 1) {
                this.vel.y = 0;
                this.vel.x = 0;
                this.accel.y = 0;
                this.accel.x = 0;
                this.currentAnim = this.anims.idle;
            }
        	this.parent();
        }
    });
});