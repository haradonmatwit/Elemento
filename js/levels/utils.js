// parse collision blocks from the collision arrays for each level
Array.prototype.parse2D = function () {
  const rows = []
  for (let i = 0; i < this.length; i += 32) {
    rows.push(this.slice(i, i + 32))
  }

  return rows
}

// create collision blocks on map
Array.prototype.createObjectsFrom2D = function () {
  const objects = []
  this.forEach((row, y) => {
    row.forEach((symbol, x) => {
      if (symbol === 1) {
        // push a new collision into collisionblocks array
        objects.push(
          new CollisionBlock({
            position: {
              x: x * 32,
              y: y * 32,
            },
          })
        )
      }
    })
  })

  return objects
}
