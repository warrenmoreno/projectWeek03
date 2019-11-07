/*
	Original Author: Warren Moreno
	Date Created:October 9th, 2019
	Version: 
	Date Last Modified: October 11th, 2019
	Modified by: Warren Moreno
	Modification log: EveryThing
	Author: Warren Moreno
	Date:   October 11nd, 2019
	Filename: Example5.js
*/

class Example5 extends Phaser.Scene {
	constructor(){
		super({key:"Example5"});
	}
	
	preload() {
		this.load.image('crashNBurn', 'images/burnedCraft.png');
		this.load.image('destroyedPlane', 'images/Dead.png');
		this.load.image('ground', 'images/ground.jpg');
		this.load.audio('test1', ['media/fire_sound.mp3']);
	}
	
	create() {
		this.add.image(400, 300, 'ground');
		this.image = this.add.image(400, 400, 'destroyedPlane');
		this.image = this.add.image(400, 400, 'crashNBurn')
		this.soundFX = this.sound.add('test1', {loop: "true"});
		this.soundFX.play();
		
		this.input.keyboard.on('keyup_E', function(event) {
			var physicsImage = this.physics.add.image(this.image.x, this.image.y, 'fireBall');
			physicsImage.setVelocity(Phaser.Math.RND.integerInRange(-100,200)-300);
		}, this);
		
		this.text = this.add.text(300, 100, "WHAT DID i JUST SAY!!!", {font:"40px Impact"});
		
		var tween = this.tweens.add({
			targets:this.text,
			x:200,
			y:250,
			duration:2000,
			ease:"Elastic",
			easeParams:[1.5,0.5],
			delay:1000,
			onComplete:function(src,tgt){
				tgt[0].x = 0;
				tgt[0].y = 0;
				tgt[0].setColor("Black");
			}
		}, this);
		
		
		this.input.keyboard.on('keyup', function(e) {
			if(e.key == "1"){
				if(this.soundFX.isPlaying) this.soundFX.pause();
				this.scene.start("Example1");
			}
		}, this);
	}
	
}
