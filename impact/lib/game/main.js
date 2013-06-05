ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'game.levels.blankfield'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	
	init: function() {
		this.loadLevel(LevelBlankfield);
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		
		// Add your own, additional update code here
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
		
		// Add your own drawing code here
		var x = ig.system.width/2,
			y = ig.system.height/2;
		
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 320, 240, 2 );

});
