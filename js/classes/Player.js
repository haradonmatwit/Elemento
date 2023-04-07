class Player extends Sprite {
  constructor({ collisionBlocks = [], imageSrc, frameRate, animations, loop }) {
    super({ imageSrc, frameRate, animations, loop })
    this.position = {
      x: 200,
      y: 200,
    }

    this.velocity = {
      x: 0,
      y: 0,
    }

    this.sides = {
      bottom: this.position.y + this.height,
    }
    this.gravity = 1
    this.collisionBlocks = collisionBlocks

    // player character's elements
    this.normalElement = true
    this.fireElement = false
    this.waterElement = false
    this.airElement = false
    this.earthElement = false
  }

  update() {
    // this is the blue box
    // c.fillStyle = 'rgba(0, 0, 255, 0.5)'
    // c.fillRect(this.position.x, this.position.y, this.width, this.height)

    this.position.x += this.velocity.x

    this.updateHitbox()

    this.checkForHorizontalCollisions()
    this.applyGravity()

    this.updateHitbox()

    // // hitbox
    // c.fillRect(
    //   this.hitbox.position.x,
    //   this.hitbox.position.y,
    //   this.hitbox.width,
    //   this.hitbox.height
    // )

    this.checkForVerticalCollisions()

    // obstacle collisions
    this.checkForSpikeCollisions()
    this.checkForFireCollisions()
    this.checkForWaterCollisions()
    this.checkForIceCollisions()
  }

  handleInput(keys) {
    if (this.preventInput) return
    this.velocity.x = 0
    if (keys.r.pressed) {
      this.switchSprite('runRight')
      this.velocity.x = 5
      this.lastDirection = 'right'
    } else if (keys.l.pressed) {
      this.switchSprite('runLeft')
      this.velocity.x = -5
      this.lastDirection = 'left'
    } else {
      if (this.lastDirection === 'left') this.switchSprite('idleLeft')
      else this.switchSprite('idleRight')
    }
  }

  // switch between sprite animations
  switchSprite(name) {
    if (this.image === this.animations[name].image) return
    this.currentFrame = 0
    this.image = this.animations[name].image
    this.frameRate = this.animations[name].frameRate
    this.frameBuffer = this.animations[name].frameBuffer
    this.loop = this.animations[name].loop
    this.currentAnimation = this.animations[name]
  }

  updateHitbox() {
    this.hitbox = {
      position: {
        x: this.position.x - 5,
        y: this.position.y - 1,
      },
      width: 20,
      height: 30,
    }
  }

  checkForHorizontalCollisions() {
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i]

      // if a collision exists
      if (
        this.hitbox.position.x <=
          collisionBlock.position.x + collisionBlock.width &&
        this.hitbox.position.x + this.hitbox.width >=
          collisionBlock.position.x &&
        this.hitbox.position.y + this.hitbox.height >=
          collisionBlock.position.y &&
        this.hitbox.position.y <=
          collisionBlock.position.y + collisionBlock.height
      ) {
        // collision on x axis going left
        if (this.velocity.x < -0) {
          const offset = this.hitbox.position.x - this.position.x
          this.position.x =
            collisionBlock.position.x + collisionBlock.width - offset + 0.01
          break
        }
        // collision on x axis going right
        if (this.velocity.x > 0) {
          const offset =
            this.hitbox.position.x - this.position.x + this.hitbox.width
          this.position.x = collisionBlock.position.x - offset - 0.01
          break
        }
      }
    }
  }

  applyGravity() {
    this.velocity.y += this.gravity
    this.position.y += this.velocity.y
  }

  checkForVerticalCollisions() {
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i]

      // if a collision exists
      if (
        this.hitbox.position.x <=
          collisionBlock.position.x + collisionBlock.width &&
        this.hitbox.position.x + this.hitbox.width >=
          collisionBlock.position.x &&
        this.hitbox.position.y + this.hitbox.height >=
          collisionBlock.position.y &&
        this.hitbox.position.y <=
          collisionBlock.position.y + collisionBlock.height
      ) {
        // collision on y axis going upwards
        if (this.velocity.y < 0) {
          this.velocity.y = 0
          const offset = this.hitbox.position.y - this.position.y
          this.position.y =
            collisionBlock.position.y + collisionBlock.height - offset + 0.01
          break
        }

        // collision on y axis going downwards
        if (this.velocity.y > 0) {
          this.velocity.y = 0
          const offset =
            this.hitbox.position.y - this.position.y + this.hitbox.height
          this.position.y = collisionBlock.position.y - offset - 0.01
          break
        }
      }
    }
  }

  checkForSpikeCollisions() {
    for (let i = 0; i < spikes.length; i++) {
      const spike = spikes[i]

      // check if player hits the spikes
      if (
        this.hitbox.position.x <=
          spike.position.x + spike.width &&
        this.hitbox.position.x + this.hitbox.width >=
          spike.position.x &&
        this.hitbox.position.y + this.hitbox.height >=
          spike.position.y &&
        this.hitbox.position.y <=
          spike.position.y + spike.height
      ) {
        // player dies regardless of element
        player.velocity.x = 0
        player.velocity.y = 0
        levels[level].init()
        player.switchSprite('idleRight')
        player.preventInput = false
        return
      }
    }
  }

  checkForFireCollisions() {
    for (let i = 0; i < fires.length; i++) {
      const fire = fires[i]

      // check if player hits the fire
      if (
        this.hitbox.position.x <=
          fire.position.x + fire.width &&
        this.hitbox.position.x + this.hitbox.width >=
          fire.position.x &&
        this.hitbox.position.y + this.hitbox.height >=
          fire.position.y &&
        this.hitbox.position.y <=
          fire.position.y + fire.height
      ) {
       if (this.waterElement) { // if player is water, remove fire
          fires.splice(i, 1)
          break
        } else { // otherwise player dies
          this.velocity.x = 0
          this.velocity.y = 0
          levels[level].init()
          this.switchSprite('idleRight')
          this.preventInput = false
          break
        }
      }
    }
  }

  checkForWaterCollisions() {
    for (let i = 0; i < waters.length; i++) {
      const water = waters[i]

      // check if player hits the water
      if (
        this.hitbox.position.x <=
          water.position.x + water.width &&
        this.hitbox.position.x + this.hitbox.width >=
          water.position.x &&
        this.hitbox.position.y + this.hitbox.height >=
          water.position.y &&
        this.hitbox.position.y <=
          water.position.y + water.height
      ) {
        if (player.airElement) { // if player is air, freeze water
          waters.splice(i, 1) // remove water and replace with ice
          ices.push(
            new Sprite({
              position: {
                x: water.position.x,
                y: water.position.y,
              },
              imageSrc: './img/obstacles/iceTile.png',
              currentFrame: 0,
              autoplay: false,
            }),
          )
        } else { // otherwise player dies
          player.velocity.x = 0
          player.velocity.y = 0
          levels[level].init()
          player.switchSprite('idleRight')
          player.preventInput = false
          return
        }
      }
    }
  }

  checkForIceCollisions() {
    for (let i = 0; i < ices.length; i++) {
      const ice = ices[i]

      // check if player hits the water
      if (
        this.hitbox.position.x <=
          ice.position.x + ice.width &&
        this.hitbox.position.x + this.hitbox.width >=
          ice.position.x &&
        this.hitbox.position.y + this.hitbox.height >=
          ice.position.y &&
        this.hitbox.position.y <=
          ice.position.y + ice.height
      ) {
        if (this.fireElement) { // if player is fire, remove ice
          ices.splice(i, 1)
          return
        }
        else { // otherwise player does nothing to the ice
          if (this.velocity.y < 0) {
            this.velocity.y = 0
            const offset = this.hitbox.position.y - this.position.y
            this.position.y =
            ice.position.y + ice.height - offset
            break
          }
  
          if (this.velocity.y > 0) {
            this.velocity.y = 0
            const offset =
              this.hitbox.position.y - this.position.y + this.hitbox.height
            this.position.y = ice.position.y - offset
            break
          }

          if (this.velocity.x < -0) {
            const offset = this.hitbox.position.x - this.position.x
            this.position.x =
            ice.position.x + ice.width - offset
            break
          }
          
          if (this.velocity.x > 0) {
            const offset =
              this.hitbox.position.x - this.position.x + this.hitbox.width
            this.position.x = ice.position.x - offset
            break
          }
          return
        }
      }
    }
  }
}