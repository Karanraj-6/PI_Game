class AnimationController {
    constructor() {
        this.animations = {};
        this.currentAnimation = null;
    }

    addAnimation(name, animation) {
        this.animations[name] = animation;
    }

    playAnimation(name) {
        if (this.animations[name]) {
            this.currentAnimation = this.animations[name];
            this.currentAnimation.play();
        }
    }

    stopAnimation() {
        if (this.currentAnimation) {
            this.currentAnimation.stop();
            this.currentAnimation = null;
        }
    }

    update(deltaTime) {
        if (this.currentAnimation) {
            this.currentAnimation.update(deltaTime);
        }
    }
}

export default AnimationController;