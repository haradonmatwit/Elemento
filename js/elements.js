// switch elements (visually on screen) by switching sprite images
function switchElement() {
    if (player.waterElement) {
      player.animations['idleRight'].image = idleRightWater
      player.animations['idleLeft'].image = idleLeftWater
      player.animations['runRight'].image = runRightWater
      player.animations['runLeft'].image = runLeftWater
      player.animations['enterDoor'].image = enterWater
    } else if (player.airElement) {
      player.animations['idleRight'].image = idleRightAir
      player.animations['idleLeft'].image = idleLeftAir
      player.animations['runRight'].image = runRightAir
      player.animations['runLeft'].image = runLeftAir
      player.animations['enterDoor'].image = enterAir
    } else if (player.fireElement) {
      player.animations['idleRight'].image = idleRightFire
      player.animations['idleLeft'].image = idleLeftFire
      player.animations['runRight'].image = runRightFire
      player.animations['runLeft'].image = runLeftFire
      player.animations['enterDoor'].image = enterFire
    } else if (player.earthElement) {
      player.animations['idleRight'].image = idleRightEarth
      player.animations['idleLeft'].image = idleLeftEarth
      player.animations['runRight'].image = runRightEarth
      player.animations['runLeft'].image = runLeftEarth
      player.animations['enterDoor'].image = enterEarth
    } else {
      player.animations['idleRight'].image = idleRight
      player.animations['idleLeft'].image = idleLeft
      player.animations['runRight'].image = runRight
      player.animations['runLeft'].image = runLeft
      player.animations['enterDoor'].image = enter
    }
}

// normal sprites
var idleLeft = new Image();
var idleRight = new Image();
var runLeft = new Image();
var runRight = new Image();
var enter = new Image();

idleLeft.src = './img/sprites/normal/idleLeft.png'
idleRight.src = './img/sprites/normal/idleRight.png'
runLeft.src = './img/sprites/normal/runLeft.png'
runRight.src = './img/sprites/normal/runRight.png'
enter.src = './img/sprites/normal/enter.png'

// water sprites
var idleLeftWater = new Image();
var idleRightWater = new Image();
var runLeftWater = new Image();
var runRightWater = new Image();
var enterWater = new Image();

idleLeftWater.src = './img/sprites/water/idleLeftWater.png';
idleRightWater.src = './img/sprites/water/idleRightWater.png';
runLeftWater.src = './img/sprites/water/runLeftWater.png';
runRightWater.src = './img/sprites/water/runRightWater.png';
enterWater.src = './img/sprites/water/enterWater.png';

// air sprites
var idleLeftAir = new Image();
var idleRightAir = new Image();
var runLeftAir = new Image();
var runRightAir = new Image();
var enterAir = new Image();

idleLeftAir.src = './img/sprites/air/idleLeftAir.png';
idleRightAir.src = './img/sprites/air/idleRightAir.png';
runLeftAir.src = './img/sprites/air/runLeftAir.png';
runRightAir.src = './img/sprites/air/runRightAir.png';
enterAir.src = './img/sprites/air/enterAir.png';

// fire sprites
var idleLeftFire = new Image();
var idleRightFire = new Image();
var runLeftFire = new Image();
var runRightFire = new Image();
var enterFire = new Image();

idleLeftFire.src = './img/sprites/fire/idleLeftFire.png';
idleRightFire.src = './img/sprites/fire/idleRightFire.png';
runLeftFire.src = './img/sprites/fire/runLeftFire.png';
runRightFire.src = './img/sprites/fire/runRightFire.png';
enterFire.src = './img/sprites/fire/enterFire.png';

// earth sprites
var idleLeftEarth = new Image();
var idleRightEarth = new Image();
var runLeftEarth = new Image();
var runRightEarth = new Image();
var enterEarth = new Image();

idleLeftEarth.src = './img/sprites/earth/idleLeftEarth.png';
idleRightEarth.src = './img/sprites/earth/idleRightEarth.png';
runLeftEarth.src = './img/sprites/earth/runLeftEarth.png';
runRightEarth.src = './img/sprites/earth/runRightEarth.png';
enterEarth.src = './img/sprites/earth/enterEarth.png';