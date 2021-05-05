const Phaser = require("phaser");
const { player } = require("../world");
const walkingSpeed = 250;
const dashingSpeed = 650;

class MegaMan extends Phaser.GameObjects.Sprite {
    constructor(scene, ...args) {
        super(scene, ...args);
        this.initialized = false;
        scene.add.existing(this);
    }

    JumpTimer = 0;
    JumpLimit = 12;
    IsJumping = false;
    IsDashing = false;
    IsLanded = true;

    // For some reason, Phaser needs this empty method.
    preUpdate(time, delta) {
        super.preUpdate(time, delta);
        if (!this.initialized) {
            this.body.collideWorldBounds = true;
        }
    }

    jump() {
        if (this.body.onFloor() && this.JumpTimer === 0 && this.IsLanded) {
            this.IsJumping = true
            this.IsLanded = false;
            this.JumpTimer += 1;
            this.body.setVelocityY(-275 - (35 * (this.JumpTimer)))
        } else if (this.JumpTimer > 0 && this.JumpTimer < this.JumpLimit) {
            this.JumpTimer += 1;
            this.body.setVelocityY(-275 - (35 * (this.JumpTimer)));
            if (this.anims.currentAnim.key !== 'jump' && !this.body.onFloor())
                this.play('jump');
            if (this.IsDashing) this.IsJumpDashing = true;
        } 
    }

    run(movingLeft) {
        if (this.IsDashing && this.flipX === !movingLeft && this.body.onFloor()){
            this.IsDashing = false;
        }
        if (!this.IsDashing) {
            let direction = 1
            if (movingLeft){
                direction = -1;
            }
            this.body.velocity.x = walkingSpeed * direction;
            if (this.anims.currentAnim.key !== 'run' && this.body.onFloor())
                this.play('run');
        }
        this.flipX = movingLeft;
    }

    dash() {
        this.IsDashing = true;
    }

    stopDashing() {
        this.IsDashing = false;
    }
}

Phaser.GameObjects.GameObjectFactory.register("megaMan", function (...args) {
    const megaMan = new MegaMan(this.scene, ...args);

    this.displayList.add(megaMan);
    this.updateList.add(megaMan);

    return megaMan;
});
