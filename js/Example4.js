/*
	Original Author: Warren Moreno
	Date Created:October 9th, 2019
	Version: 
	Date Last Modified: October 11th, 2019
	Modified by: Warren Moreno
	Modification log: EveryThing
	Author: Warren Moreno
	Date:   October 11nd, 2019
	Filename: Example4.js
*/

class Example4 extends Phaser.Scene {
	constructor(){
		super({key:"Example4"});
	}
	
	create() {
		this.text = this.add.text(540, 600, "You need to survive!", {font:"40px Impact"});
		
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
				tgt[0].setColor("Blue");
			}
		}, this);
		
		this.key_5 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FIVE);
	}
	
	update(delta){
		if(this.key_5.isDown)
			this.scene.start("Example5");
	}
}
