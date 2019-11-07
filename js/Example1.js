/*
	Original Author: Warren Moreno
	Date Created:October 9th, 2019
	Version: 
	Date Last Modified: October 11th, 2019
	Modified by: Warren Moreno
	Modification log: 
	Author: Warren Moreno
	Date:   October 11nd, 2019
	Filename: Example1.js
*/
  
class Example1 extends Phaser.Scene {
	constructor() {
		super({key:"Example1"});
	}
	
	preload() {
		this.load.image('fighterBlimp', 'images/fighterBlimp.png');
		this.load.image('fireBall', 'images/fireBall.png');
		this.load.image('sky', 'images/skyBackground.png');
		this.load.audio('test', ['media/blimp_turbine_sound.wav']);
	}
	
	
	create(){
		this.add.image(400, 300, 'sky');
		this.image = this.add.image(400, 300, 'fighterBlimp');
		this.soundFX = this.sound.add('test', {loop: "true"});
		this.soundFX.play();
		
		this.input.keyboard.on('keyup_SPACE', function(event){
			this.image.y -= 20;
			
		}, this);
		
		this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
		this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
		this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
		this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
		
		
		this.input.on('pointerdown', function(event) {
			this.image.x = event.x;
			this.image.y = event.y;
		}, this);
		
		this.input.keyboard.on('keyup_E', function(event) {
			var physicsImage = this.physics.add.image(this.image.x, this.image.y, 'fireBall');
			physicsImage.setVelocity(Phaser.Math.RND.integerInRange(-100,200)-300);
		}, this);
		
		this.input.keyboard.on('keyup', function(e) {
			if(e.key == "2"){
				if(this.soundFX.isPlaying) this.soundFX.pause();
				this.scene.start("Example2");
			}
			if(e.key == "3"){
				if(this.soundFX.isPlaying) this.soundFX.pause();
				this.scene.start("Example3");
			}
			if(e.key == "4"){
				if(this.soundFX.isPlaying) this.soundFX.pause();
				this.scene.start("Example4");
			}
			if(e.key == "5"){
				if(this.soundFX.isPlaying) this.soundFX.pause();
				this.scene.start("Example5");
			}
		}, this);
		
	}
	
	update(delta){
		if (this.key_D.isDown)
			this.image.x++;
		if (this.key_A.isDown)
			this.image.x--;
		if (this.key_S.isDown)
			this.image.y++;
		if (this.key_W.isDown)
			this.image.y--;
	}
}
