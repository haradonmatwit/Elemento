window.addEventListener('keydown', (event) => {
  if (player.preventInput) return
  switch (event.key) {
    case 'ArrowUp':
      event.preventDefault();  
      if (player.velocity.y === 0) player.velocity.y = -15
      break
    case 'ArrowDown':
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
    case 'ArrowLeft':
      // move player to the left
      event.preventDefault();
      keys.l.pressed = true
      break
    case 'ArrowRight':
      // move player to the right
      event.preventDefault();
      keys.r.pressed = true
      break
  }
})

// stop player from continuously moving in a specific direction
window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault();
      break
    case 'ArrowLeft':
      // move player to the left
      keys.l.pressed = false
      event.preventDefault();
      break
    case 'ArrowRight':
      // move player to the right
      keys.r.pressed = false
      event.preventDefault();
      break
  }
})