const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 32 * 32 // 1024
canvas.height = 32 * 18 // 576

let parsedCollisions
let collisionBlocks
let background
let doors
let spikes
let fires

const keys = {
  l: {
    pressed: false,
  },
  r: {
    pressed: false,
  },
}

function animate() {
  window.requestAnimationFrame(animate)

  background.draw()

  // draw collision blocks
  // collisionBlocks.forEach((collisionBlock) => {
  //   collisionBlock.draw()
  // })

  // draw door
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

  // draw ice
  ices.forEach((ice) => {
    ice.draw()
  })

  switchElement()
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