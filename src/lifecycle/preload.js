import megamanxsprite1 from '/assets/sprites/megamanxatlas.png';
import megaman from '/assets/sprites/megaman.png';
import megamanJSON from '/assets/sprites/megaman.json';
// import level1 from '/assets/level/tiled map test.json';
// import tiles from '/assets/level/Request pack/sheet.png';
import smallTiles from '/assets/level/16x16 tilesize test.json';
import mtrdSet from '/assets/level/mtrd_tileset/mtrd_tileset.png';

module.exports = function preload() {

    this.load.spritesheet('megamanxsprite1', megamanxsprite1, {
        frameWidth: 32,
        frameHeight: 64
    });

    //load in the megaman animation atlas
    this.load.atlas('megaman', megaman, megamanJSON)

    // this.load.image('tiles', tiles);
    // this.load.tilemapTiledJSON('level1', level1);
    this.load.image('tiles', mtrdSet);
    this.load.tilemapTiledJSON('small_tiles', smallTiles);

    this.load.image('bullet', '/assets/sprites/megaman/frame123.png')
};
