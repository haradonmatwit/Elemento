// create starting player character 
const player = new Player({
    imageSrc: './img/sprites/normal/idleRight.png',
    frameRate: 16,
    animations: {
      idleRight: {
        frameRate: 16,
        frameBuffer: 8,
        loop: true,
        imageSrc: './img/sprites/normal/idleRight.png',
      },
      idleLeft: {
        frameRate: 16,
        frameBuffer: 8,
        loop: true,
        imageSrc: './img/sprites/normal/idleLeft.png',
      },
      runRight: {
        frameRate: 8,
        frameBuffer: 4,
        loop: true,
        imageSrc: './img/sprites/normal/runRight.png',
      },
      runLeft: {
        frameRate: 8,
        frameBuffer: 4,
        loop: true,
        imageSrc: './img/sprites/normal/runLeft.png',
      },
      enterDoor: {
        frameRate: 5,
        frameBuffer: 4,
        loop: false,
        imageSrc: './img/sprites/normal/enter.png',
        onComplete: () => {
          console.log('completed animation')
          level++
          if (level === 6) level = 1
          levels[level].init()
          player.switchSprite('idleRight')
          player.preventInput = false
        },
      },
    },
  })