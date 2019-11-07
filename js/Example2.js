/*
	Original Author: Warren Moreno
	Date Created: October 9th, 2019
	Version: 
	Date Last Modified: October 11th, 2019
	Modified by: Warren Moreno
	Modification log: 
	Author: Warren Moreno
	Date:   October 11nd, 2019
	Filename: Example2.js
*/
  
class Example2 extends Phaser.Scene {
	constructor(){
		super({key:"Example2"});
	}
	
	create() {
		this.text = this.add.text(0, 0, "get to the plane!", {font:"40px Impact"});
		
		var tween = this.tweens.add({
			targets:this.text,
			x:200,
			y:250,
			duration:2000,
			ease:"Elastic",
			easeParams:[1.5,0.5],
			delay:1000,
			onComplete:function(src,tgt){
				tgt[0].x = 400;
				tgt[0].y = 500;
				tgt[0].setColor("Red");
			}
		}, this);
		
		this.key_3 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE);
	}
	
	update(delta){
		if(this.key_3.isDown)
			this.scene.start("Example3");
	}
}

