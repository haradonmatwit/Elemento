// keydown = when key is pressed down
window.addEventListener('keydown', (event) => {
  if (player.preventInput) return
  switch (event.key) {
    case 'w': // switch to water element
      player.normalElement = false 
      player.waterElement = true
      player.airElement = false
      player.fireElement = false
      player.earthElement = false
      break
    case 'a': // switch to air element
      player.normalElement = false 
      player.waterElement = false
      player.airElement = true
      player.fireElement = false
      player.earthElement = false
      break
    case 's': // switch to fire element
      player.normalElement = false
      player.waterElement = false 
      player.airElement = false
      player.fireElement = true
      player.earthElement = false
      break
    case 'd': // switch to earth  element
      player.normalElement = false  
      player.waterElement = false  
      player.airElement = false
      player.fireElement = false
      player.earthElement = true
      break
    case 'ArrowUp': // jump
      event.preventDefault();  
      if (player.velocity.y === 0) player.velocity.y = -15
      break
    case 'ArrowDown': // enter door
      event.preventDefault();
      for (let i = 0; i < doors.length; i++) {
        const door = doors[i]

        // check if player is in front of the door
        if (
          player.hitbox.position.x + player.hitbox.width <=
            door.position.x + door.width &&
          player.hitbox.position.x >= door.position.x &&
          player.hitbox.position.y + player.hitbox.height >= door.position.y &&
          player.hitbox.position.y <= door.position.y + door.height
        ) {
          player.velocity.x = 0
          player.velocity.y = 0
          player.preventInput = true
          player.switchSprite('enterDoor')
          door.play()
          return
        }
      }
      break
    case 'ArrowLeft': // move left
      event.preventDefault();
      keys.l.pressed = true
      break
    case 'ArrowRight': // move right
      event.preventDefault();
      keys.r.pressed = true
      break
  }
})

// keyup = when key is released up
window.addEventListener('keyup', (event) => {
  // stop player from continuously moving left or right
  switch (event.key) {
    case 'ArrowLeft':
      keys.l.pressed = false
      event.preventDefault();
      break
    case 'ArrowRight':
      keys.r.pressed = false
      event.preventDefault();
      break
  }
})