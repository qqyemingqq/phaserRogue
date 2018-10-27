class Game extends window.Phaser.State {
    create() {
        this.bg = this.add.tileSprite(
            0,
            0,
            this.world.width,
            this.world.height,
            'bg'
        );
        // this.hero = this.add.sprite(this.world.centerX, this.world.centerY, 'hero');
        // this.hero.anchor.setTo(0.5);
        // this.hero.inputEnabled = true;
        // this.hero.input.enableDrag();

        this.player = this.add.sprite(this.world.centerX, this.world.centerY, 'player');
        this.player.animations.add('idle', [0, 1, 2, 3, 4], 10, true);
        this.player.animations.add('roll', [5, 6, 7, 8, 9, 10], 10, true);
        this.player.animations.add('run', [11, 12, 13, 14, 15, 16, 17, 18], 10, true);
        this.player.animations.add('die', [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 10, true);
        this.player.animations.play('run');
    }

    update() {
        this.bg.tilePosition.y += 1;
    }
}

export default Game;
