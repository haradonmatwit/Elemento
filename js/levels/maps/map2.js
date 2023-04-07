// map for level 2
levels[2] = {
    init: () => {
        parsedCollisions = collisionsLevel2.parse2D()
        collisionBlocks = parsedCollisions.createObjectsFrom2D()
        player.collisionBlocks = collisionBlocks

        // starting position of the player
        player.position.x = 950
        player.position.y = 60

        // reset player's animation
        if (player.currentAnimation) player.currentAnimation.isActive = false

        // create map, obstacles, etc for the level
        background = new Sprite({ position: { x: 0, y: 0, }, imageSrc: './img/levels/level2.png', })

        doors = [
            new Sprite({ position: { x: 604, y: 459, }, imageSrc: './img/obstacles/normalDoor.png',
              frameRate: 8, frameBuffer: 2, loop: false, autoplay: false, }),
        ]

        spikes = [
            new Sprite({ position: { x: 224, y: 300, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 256, y: 300, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 288, y: 300, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 320, y: 300, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 352, y: 300, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 384, y: 300, }, imageSrc: './img/obstacles/spikes.png', }),

            new Sprite({ position: { x: 704, y: 300, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 736, y: 300, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 768, y: 300, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 800, y: 300, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 832, y: 300, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 864, y: 300, }, imageSrc: './img/obstacles/spikes.png', }),

            new Sprite({ position: { x: 800, y: 556, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 832, y: 556, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 864, y: 556, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 896, y: 556, }, imageSrc: './img/obstacles/spikes.png', }),
            new Sprite({ position: { x: 928, y: 556, }, imageSrc: './img/obstacles/spikes.png', }),
        ]

        fires = [
            new Sprite({ position: { x: 160, y: 96, }, imageSrc: './img/obstacles/fireTile.png', frameRate: 7, frameBuffer: 6, }),
            new Sprite({ position: { x: 192, y: 96, }, imageSrc: './img/obstacles/fireTile.png', frameRate: 7, frameBuffer: 6, }),
            new Sprite({ position: { x: 224, y: 96, }, imageSrc: './img/obstacles/fireTile.png', frameRate: 7, frameBuffer: 6, }),
            new Sprite({ position: { x: 256, y: 96, }, imageSrc: './img/obstacles/fireTile.png', frameRate: 7, frameBuffer: 6, }),
            new Sprite({ position: { x: 288, y: 96, }, imageSrc: './img/obstacles/fireTile.png', frameRate: 7, frameBuffer: 6, }),
            new Sprite({ position: { x: 320, y: 96, }, imageSrc: './img/obstacles/fireTile.png', frameRate: 7, frameBuffer: 6, }),
            new Sprite({ position: { x: 352, y: 96, }, imageSrc: './img/obstacles/fireTile.png', frameRate: 7, frameBuffer: 6, }),
            new Sprite({ position: { x: 384, y: 96, }, imageSrc: './img/obstacles/fireTile.png', frameRate: 7, frameBuffer: 6, }),
            new Sprite({ position: { x: 416, y: 96, }, imageSrc: './img/obstacles/fireTile.png', frameRate: 7, frameBuffer: 6, }),
        ]

        waters = [
            new Sprite({ position: { x: 640, y: 96, }, imageSrc: './img/obstacles/waterTile.png', frameRate: 8, frameBuffer: 6, }),
            new Sprite({ position: { x: 672, y: 96, }, imageSrc: './img/obstacles/waterTile.png', frameRate: 8, frameBuffer: 6, }),
            new Sprite({ position: { x: 704, y: 96, }, imageSrc: './img/obstacles/waterTile.png', frameRate: 8, frameBuffer: 6, }),
            new Sprite({ position: { x: 736, y: 96, }, imageSrc: './img/obstacles/waterTile.png', frameRate: 8, frameBuffer: 6, }),
            new Sprite({ position: { x: 768, y: 96, }, imageSrc: './img/obstacles/waterTile.png', frameRate: 8, frameBuffer: 6, }),
            new Sprite({ position: { x: 800, y: 96, }, imageSrc: './img/obstacles/waterTile.png', frameRate: 8, frameBuffer: 6, }),
            new Sprite({ position: { x: 832, y: 96, }, imageSrc: './img/obstacles/waterTile.png', frameRate: 8, frameBuffer: 6, }),
            new Sprite({ position: { x: 864, y: 96, }, imageSrc: './img/obstacles/waterTile.png', frameRate: 8, frameBuffer: 6, }),
            new Sprite({ position: { x: 896, y: 96, }, imageSrc: './img/obstacles/waterTile.png', frameRate: 8, frameBuffer: 6, }),
        ]

        ices = [
          // small ice
          new Sprite({ position: { x: 288, y: 352, }, imageSrc: './img/obstacles/iceTile.png', }),
          new Sprite({ position: { x: 320, y: 352, }, imageSrc: './img/obstacles/iceTile.png', }),
          new Sprite({ position: { x: 352, y: 352, }, imageSrc: './img/obstacles/iceTile.png', }),
          new Sprite({ position: { x: 384, y: 352, }, imageSrc: './img/obstacles/iceTile.png', }),
          new Sprite({ position: { x: 416, y: 352, }, imageSrc: './img/obstacles/iceTile.png', }),
          new Sprite({ position: { x: 448, y: 352, }, imageSrc: './img/obstacles/iceTile.png', }),
          new Sprite({ position: { x: 480, y: 352, }, imageSrc: './img/obstacles/iceTile.png', }),
          new Sprite({ position: { x: 512, y: 352, }, imageSrc: './img/obstacles/iceTile.png', }),
          new Sprite({ position: { x: 544, y: 352, }, imageSrc: './img/obstacles/iceTile.png', }),

          new Sprite({ position: { x: 192, y: 512, }, imageSrc: './img/obstacles/iceTile.png', }),
          new Sprite({ position: { x: 224, y: 512, }, imageSrc: './img/obstacles/iceTile.png', }),
          new Sprite({ position: { x: 256, y: 512, }, imageSrc: './img/obstacles/iceTile.png', }),
          new Sprite({ position: { x: 288, y: 512, }, imageSrc: './img/obstacles/iceTile.png', }),
          new Sprite({ position: { x: 320, y: 512, }, imageSrc: './img/obstacles/iceTile.png', }),
          new Sprite({ position: { x: 352, y: 512, }, imageSrc: './img/obstacles/iceTile.png', }),
          new Sprite({ position: { x: 384, y: 512, }, imageSrc: './img/obstacles/iceTile.png', }),
          new Sprite({ position: { x: 416, y: 512, }, imageSrc: './img/obstacles/iceTile.png', }),
          new Sprite({ position: { x: 448, y: 512, }, imageSrc: './img/obstacles/iceTile.png', }),

          // big ice
          new Sprite({ position: { x: 288, y: 160, }, imageSrc: './img/obstacles/ice2.png', }),
          new Sprite({ position: { x: 768, y: 160, }, imageSrc: './img/obstacles/ice2.png', }),
          new Sprite({ position: { x: 896, y: 416, }, imageSrc: './img/obstacles/ice2.png', }),
        ]
    },
  }