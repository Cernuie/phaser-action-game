import megamanxsprite1 from '/assets/sprites/megamanxatlas.png';

module.exports = function preload() {

    // this.load.spritesheet('megamanxsprite1', megamanxsprite1, {
    //     frameWidth: 32,
    //     frameHeight: 64
    // });

    this.load.atlas('spawnIn', '/assets/sprites/mmxspawn.png', '/assets/sprites/mmxspawn.json')
};
