/*
	Original Author: Warren Moreno
	Date Created:October 9th, 2019
	Version: 
	Date Last Modified: October 11th, 2019
	Modified by: Warren Moreno
	Modification log: 
	Author: Warren Moreno
	Date:   October 11nd, 2019
	Filename: Example3.js
*/

class Example3 extends Phaser.Scene {
	constructor(){
		super({key:"Example3"});
	}
	preload(){
		this.load.image('sky', 'images/skyBackground.png');
		this.load.image('plane', 'images/plane1.png');
		this.load.audio('test', ['media/WagnerTheRideOfTheValkyrieswww.keepvid.com.mp3']);
	}
	
	create(){	
		this.add.image(400, 300, 'sky');
		this.image = this.add.image(400, 300, 'plane');
		
		this.soundFX = this.sound.add('test', {loop: "true"});
		this.soundFX.play();
		this.soundFX.rate = 0.75;
		
		this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
		this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
		this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
		this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
		
		
		this.input.keyboard.on("keydown_L", function(e){
			this.soundFX.loop = !this.soundFX.loop;
			if(this.soundFX) this.soundFX.play();
		},this);
		
		this.input.keyboard.on("keydown_P", function(e){
			if(this.soundFX.isPlaying) this.soundFX.pause();
			else this.soundFX.resume();
		},this);
		
		
		this.input.keyboard.on('keyup', function(e) {
			if(e.key == "4"){
				if(this.soundFX.isPlaying) this.soundFX.pause();
				this.scene.start("Example4");
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