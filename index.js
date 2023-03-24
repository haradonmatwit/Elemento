const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 64 * 16 // 1024
canvas.height = 64 * 9 // 576

let parsedCollisions
let collisionBlocks
let background
let doors
const player = new Player({
  imageSrc: './img/sprites/idleRight.png',
  frameRate: 16,
  animations: {
    idleRight: {
      frameRate: 16,
      frameBuffer: 8,
      loop: true,
      imageSrc: './img/sprites/idleRight.png',
    },
    idleLeft: {
      frameRate: 16,
      frameBuffer: 8,
      loop: true,
      imageSrc: './img/sprites/idleLeft.png',
    },
    runRight: {
      frameRate: 8,
      frameBuffer: 4,
      loop: true,
      imageSrc: './img/sprites/runRight.png',
    },
    runLeft: {
      frameRate: 8,
      frameBuffer: 4,
      loop: true,
      imageSrc: './img/sprites/runLeft.png',
    },
    enterDoor: {
      frameRate: 5,
      frameBuffer: 4,
      loop: false,
      imageSrc: './img/sprites/enter.png',
      onComplete: () => {
        console.log('completed animation')
        level++
        if (level === 2) level = 1
        levels[level].init()
        player.switchSprite('idleRight')
        player.preventInput = false
        // gsap.to(overlay, {
        //   opacity: 1,
        //   onComplete: () => {
        //     level++

        //     if (level === 4) level = 1
        //     levels[level].init()
        //     player.switchSprite('idleRight')
        //     player.preventInput = false
        //     gsap.to(overlay, {
        //       opacity: 0,
        //     })
        //   },
        // })
      },
    },
  },
})

let level = 1
let levels = {
  1: {
    init: () => {
      parsedCollisions = collisionsLevel1.parse2D()
      collisionBlocks = parsedCollisions.createObjectsFrom2D()
      player.collisionBlocks = collisionBlocks
      player.position.x = 200
      player.position.y = 300

      if (player.currentAnimation) player.currentAnimation.isActive = false

      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: './img/demoLevel copy.png',
      })

      doors = [
        new Sprite({
          position: {
            x: 767,
            y: 301,
          },
          imageSrc: './img/doorOpen1.png',
          frameRate: 8,
          frameBuffer: 2,
          loop: false,
          autoplay: false,
        }),
      ]

      spikes = [
        new Sprite({
          position: {
            x: 350,
            y: 353,
          },
          imageSrc: './img/obstacles/spikes.png',
        }),
      ]

      fires = [
        new Sprite({
          position: {
            x: 600,
            y: 353,
          },
          imageSrc: './img/obstacles/fireTile.png',
          frameRate: 8,
          frameBuffer: 7,
        }),
      ]

      waters = [
        new Sprite({
          position: {
            x: 468,
            y: 353,
          },
          imageSrc: './img/obstacles/waterTile.png',
          frameRate: 8,
          frameBuffer: 6,
        }),
      ]
    },
  },
  // 2: {
  //   init: () => {
  //     parsedCollisions = collisionsLevel2.parse2D()
  //     collisionBlocks = parsedCollisions.createObjectsFrom2D()
  //     player.collisionBlocks = collisionBlocks
  //     player.position.x = 96
  //     player.position.y = 140

  //     if (player.currentAnimation) player.currentAnimation.isActive = false

  //     background = new Sprite({
  //       position: {
  //         x: 0,
  //         y: 0,
  //       },
  //       imageSrc: './img/backgroundLevel2.png',
  //     })

  //     doors = [
  //       new Sprite({
  //         position: {
  //           x: 772.0,
  //           y: 336,
  //         },
  //         imageSrc: './img/doorOpen.jpeg',
  //         frameRate: 8,
  //         frameBuffer: 8,
  //         loop: false,
  //         autoplay: false,
  //       }),
  //     ]
  //   },
  // },
  // 3: {
  //   init: () => {
  //     parsedCollisions = collisionsLevel3.parse2D()
  //     collisionBlocks = parsedCollisions.createObjectsFrom2D()
  //     player.collisionBlocks = collisionBlocks
  //     player.position.x = 750
  //     player.position.y = 230
  //     if (player.currentAnimation) player.currentAnimation.isActive = false

  //     background = new Sprite({
  //       position: {
  //         x: 0,
  //         y: 0,
  //       },
  //       imageSrc: './img/backgroundLevel3.png',
  //     })

  //     doors = [
  //       new Sprite({
  //         position: {
  //           x: 176.0,
  //           y: 335,
  //         },
  //         imageSrc: './img/doorOpen.jpeg',
  //         frameRate: 8,
  //         frameBuffer: 8,
  //         loop: false,
  //         autoplay: false,
  //       }),
  //     ]
  //   },
  // },
}

const keys = {
  u: {
    pressed: false,
  },
  l: {
    pressed: false,
  },
  r: {
    pressed: false,
  },
}

const overlay = {
  opacity: 0,
}

function animate() {
  window.requestAnimationFrame(animate)

  background.draw()

  // draw collision blocks
  // collisionBlocks.forEach((collisionBlock) => {
  //   collisionBlock.draw()
  // })

  doors.forEach((door) => {
    door.draw()
  })

  // draw spikes
  spikes.forEach((spike) => {
    spike.draw()
  })

  // draw fire
  fires.forEach((fire) => {
    fire.draw()
  })

  // draw water
  waters.forEach((water) => {
    water.draw()
  })

  player.handleInput(keys)
  player.draw()
  player.update()

  c.save()
  c.globalAlpha = overlay.opacity
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)
  c.restore()
}

levels[level].init()
animate()
