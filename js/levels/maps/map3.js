// map for level 3
levels[3] = {
    init: () => {
        parsedCollisions = collisionsLevel3.parse2D()
        collisionBlocks = parsedCollisions.createObjectsFrom2D()
        player.collisionBlocks = collisionBlocks
        
        // starting position of the player
        player.position.x = 906
        player.position.y = 470

        // reset player's animation
        if (player.currentAnimation) player.currentAnimation.isActive = false

        // create map, obstacles, etc for the level
        background = new Sprite({ position: { x: 0, y: 0, }, imageSrc: './img/levels/level3.png', })

        doors = [
            new Sprite({ position: { x: 76, y: 428, }, imageSrc: './img/obstacles/normalDoor.png',
                frameRate: 8, frameBuffer: 2, loop: false, autoplay: false, }),
        ]

        spikes = [
            new Sprite({ position: { x: 384, y: 556, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 416, y: 556, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 448, y: 556, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 480, y: 556, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 512, y: 556, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 544, y: 556, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 576, y: 556, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 608, y: 556, }, imageSrc: './img/obstacles/spikes.png', }),
        ]

        fires = [
            new Sprite({ position: { x: 800, y: 256, }, imageSrc: './img/obstacles/fireTile.png', frameRate: 7, frameBuffer: 6, }),
            new Sprite({ position: { x: 832, y: 256, }, imageSrc: './img/obstacles/fireTile.png', frameRate: 7, frameBuffer: 6, }),
            new Sprite({ position: { x: 864, y: 256, }, imageSrc: './img/obstacles/fireTile.png', frameRate: 7, frameBuffer: 6, }),
            new Sprite({ position: { x: 896, y: 256, }, imageSrc: './img/obstacles/fireTile.png', frameRate: 7, frameBuffer: 6, }),
            new Sprite({ position: { x: 928, y: 256, }, imageSrc: './img/obstacles/fireTile.png', frameRate: 7, frameBuffer: 6, }),

            new Sprite({ position: { x: 160, y: 512, }, imageSrc: './img/obstacles/fireTile.png', frameRate: 7, frameBuffer: 6, }),
            new Sprite({ position: { x: 192, y: 512, }, imageSrc: './img/obstacles/fireTile.png', frameRate: 7, frameBuffer: 6, }),
            new Sprite({ position: { x: 224, y: 512, }, imageSrc: './img/obstacles/fireTile.png', frameRate: 7, frameBuffer: 6, }),
            new Sprite({ position: { x: 256, y: 512, }, imageSrc: './img/obstacles/fireTile.png', frameRate: 7, frameBuffer: 6, }),
            new Sprite({ position: { x: 288, y: 512, }, imageSrc: './img/obstacles/fireTile.png', frameRate: 7, frameBuffer: 6, }),
        ]

        waters = [
            new Sprite({ position: { x: 64, y: 256, }, imageSrc: './img/obstacles/waterTile.png', frameRate: 8, frameBuffer: 6, }),
            new Sprite({ position: { x: 96, y: 256, }, imageSrc: './img/obstacles/waterTile.png', frameRate: 8, frameBuffer: 6, }),
            new Sprite({ position: { x: 128, y: 256, }, imageSrc: './img/obstacles/waterTile.png', frameRate: 8, frameBuffer: 6, }),
            new Sprite({ position: { x: 160, y: 256, }, imageSrc: './img/obstacles/waterTile.png', frameRate: 8, frameBuffer: 6, }),
            new Sprite({ position: { x: 192, y: 256, }, imageSrc: './img/obstacles/waterTile.png', frameRate: 8, frameBuffer: 6, }),
            
            new Sprite({ position: { x: 704, y: 512, }, imageSrc: './img/obstacles/waterTile.png', frameRate: 8, frameBuffer: 6, }),
            new Sprite({ position: { x: 736, y: 512, }, imageSrc: './img/obstacles/waterTile.png', frameRate: 8, frameBuffer: 6, }),
            new Sprite({ position: { x: 768, y: 512, }, imageSrc: './img/obstacles/waterTile.png', frameRate: 8, frameBuffer: 6, }),
            new Sprite({ position: { x: 800, y: 512, }, imageSrc: './img/obstacles/waterTile.png', frameRate: 8, frameBuffer: 6, }),
            new Sprite({ position: { x: 832, y: 512, }, imageSrc: './img/obstacles/waterTile.png', frameRate: 8, frameBuffer: 6, }),
        ]

        ices = [
            // small ice
            new Sprite({ position: { x: 384, y: 128, }, imageSrc: './img/obstacles/iceTile.png', }),
            new Sprite({ position: { x: 384, y: 160, }, imageSrc: './img/obstacles/iceTile.png', }),
            new Sprite({ position: { x: 384, y: 192, }, imageSrc: './img/obstacles/iceTile.png', }),
            new Sprite({ position: { x: 384, y: 224, }, imageSrc: './img/obstacles/iceTile.png', }),
            new Sprite({ position: { x: 384, y: 256, }, imageSrc: './img/obstacles/iceTile.png', }),

            new Sprite({ position: { x: 384, y: 320, }, imageSrc: './img/obstacles/iceTile.png', }),
            new Sprite({ position: { x: 384, y: 352, }, imageSrc: './img/obstacles/iceTile.png', }),
            new Sprite({ position: { x: 384, y: 384, }, imageSrc: './img/obstacles/iceTile.png', }),
            new Sprite({ position: { x: 384, y: 416, }, imageSrc: './img/obstacles/iceTile.png', }),
            new Sprite({ position: { x: 384, y: 448, }, imageSrc: './img/obstacles/iceTile.png', }),
            
            new Sprite({ position: { x: 608, y: 128, }, imageSrc: './img/obstacles/iceTile.png', }),
            new Sprite({ position: { x: 608, y: 160, }, imageSrc: './img/obstacles/iceTile.png', }),
            new Sprite({ position: { x: 608, y: 192, }, imageSrc: './img/obstacles/iceTile.png', }),
            new Sprite({ position: { x: 608, y: 224, }, imageSrc: './img/obstacles/iceTile.png', }),
            new Sprite({ position: { x: 608, y: 256, }, imageSrc: './img/obstacles/iceTile.png', }),

            new Sprite({ position: { x: 608, y: 320, }, imageSrc: './img/obstacles/iceTile.png', }),
            new Sprite({ position: { x: 608, y: 352, }, imageSrc: './img/obstacles/iceTile.png', }),
            new Sprite({ position: { x: 608, y: 384, }, imageSrc: './img/obstacles/iceTile.png', }),
            new Sprite({ position: { x: 608, y: 416, }, imageSrc: './img/obstacles/iceTile.png', }),
            new Sprite({ position: { x: 608, y: 448, }, imageSrc: './img/obstacles/iceTile.png', }),
            
            // big ice
            new Sprite({ position: { x: 256, y: 224, }, imageSrc: './img/obstacles/ice2.png', }),
            new Sprite({ position: { x: 704, y: 224, }, imageSrc: './img/obstacles/ice2.png', }),
        ]
    },
}