// map for level 5
levels[5] = {
    init: () => {
        parsedCollisions = collisionsLevel5.parse2D()
        collisionBlocks = parsedCollisions.createObjectsFrom2D()
        player.collisionBlocks = collisionBlocks

        // starting position of the player
        player.position.x = 70
        player.position.y = 400

        // reset player's animation
        if (player.currentAnimation) player.currentAnimation.isActive = false

        // create map, obstacles, etc for the level
        background = new Sprite({ position: { x: 0, y: 0, }, imageSrc: './img/levels/level5.png', })

        doors = [
            new Sprite({ position: { x: 716, y: 44, }, imageSrc: './img/obstacles/normalDoor.png',
                frameRate: 8, frameBuffer: 2, loop: false, autoplay: false, }),
        ]

        spikes = [
            new Sprite({ position: { x: 416, y: 364, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 448, y: 364, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 480, y: 364, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 512, y: 364, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 544, y: 364, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 576, y: 364, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 608, y: 364, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 640, y: 364, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 672, y: 364, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 704, y: 364, }, imageSrc: './img/obstacles/spikes.png', }),

            new Sprite({ position: { x: 256, y: 556, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 288, y: 556, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 320, y: 556, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 352, y: 556, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 384, y: 556, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 416, y: 556, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 448, y: 556, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 480, y: 556, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 512, y: 556, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 544, y: 556, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 576, y: 556, }, imageSrc: './img/obstacles/spikes.png', }),

            new Sprite({ position: { x: 736, y: 556, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 768, y: 556, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 800, y: 556, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 832, y: 556, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 864, y: 556, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 896, y: 556, }, imageSrc: './img/obstacles/spikes.png', }),
        ]

        fires = [
            new Sprite({ position: { x: 32, y: 128, }, imageSrc: './img/obstacles/fireTile.png', frameRate: 7, frameBuffer: 6, }),
            new Sprite({ position: { x: 64, y: 128, }, imageSrc: './img/obstacles/fireTile.png', frameRate: 7, frameBuffer: 6, }),
            
            new Sprite({ position: { x: 352, y: 256, }, imageSrc: './img/obstacles/fireTile.png', frameRate: 7, frameBuffer: 6, }),
            new Sprite({ position: { x: 384, y: 256, }, imageSrc: './img/obstacles/fireTile.png', frameRate: 7, frameBuffer: 6, }),
            new Sprite({ position: { x: 416, y: 256, }, imageSrc: './img/obstacles/fireTile.png', frameRate: 7, frameBuffer: 6, }),
            new Sprite({ position: { x: 448, y: 256, }, imageSrc: './img/obstacles/fireTile.png', frameRate: 7, frameBuffer: 6, }),

            new Sprite({ position: { x: 32, y: 320, }, imageSrc: './img/obstacles/fireTile.png', frameRate: 7, frameBuffer: 6, }),
            new Sprite({ position: { x: 64, y: 320, }, imageSrc: './img/obstacles/fireTile.png', frameRate: 7, frameBuffer: 6, }),

            new Sprite({ position: { x: 224, y: 352, }, imageSrc: './img/obstacles/fireTile.png', frameRate: 7, frameBuffer: 6, }),
            new Sprite({ position: { x: 256, y: 352, }, imageSrc: './img/obstacles/fireTile.png', frameRate: 7, frameBuffer: 6, }),

            new Sprite({ position: { x: 832, y: 480, }, imageSrc: './img/obstacles/fireTile.png', frameRate: 7, frameBuffer: 6, }),
            new Sprite({ position: { x: 864, y: 480, }, imageSrc: './img/obstacles/fireTile.png', frameRate: 7, frameBuffer: 6, }),
            new Sprite({ position: { x: 896, y: 480, }, imageSrc: './img/obstacles/fireTile.png', frameRate: 7, frameBuffer: 6, }),
        ]

        waters = [
            new Sprite({ position: { x: 64, y: 224, }, imageSrc: './img/obstacles/waterTile.png', frameRate: 8, frameBuffer: 6, }),
            new Sprite({ position: { x: 96, y: 224, }, imageSrc: './img/obstacles/waterTile.png', frameRate: 8, frameBuffer: 6, }),
            
            new Sprite({ position: { x: 192, y: 224, }, imageSrc: './img/obstacles/waterTile.png', frameRate: 8, frameBuffer: 6, }),
            new Sprite({ position: { x: 224, y: 224, }, imageSrc: './img/obstacles/waterTile.png', frameRate: 8, frameBuffer: 6, }),

            new Sprite({ position: { x: 736, y: 320, }, imageSrc: './img/obstacles/waterTile.png', frameRate: 8, frameBuffer: 6, }),
            new Sprite({ position: { x: 768, y: 320, }, imageSrc: './img/obstacles/waterTile.png', frameRate: 8, frameBuffer: 6, }),

            new Sprite({ position: { x: 928, y: 416, }, imageSrc: './img/obstacles/waterTile.png', frameRate: 8, frameBuffer: 6, }),
            new Sprite({ position: { x: 960, y: 416, }, imageSrc: './img/obstacles/waterTile.png', frameRate: 8, frameBuffer: 6, }),
        ]

        ices = [
            new Sprite({ position: { x: 512, y: 32, }, imageSrc: './img/obstacles/ice2.png', }),
            new Sprite({ position: { x: 864, y: 288, }, imageSrc: './img/obstacles/ice2.png', }),
            new Sprite({ position: { x: 640, y: 480, }, imageSrc: './img/obstacles/ice2.png', }),
        ]
    },
}