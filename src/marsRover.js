function applyAction(position, action) {
    if (action === 'M') {
        if (position.heading === 'N') {
            position.y++
        } else if (position.heading === 'E') {
            position.x++
        } else if (position.heading === 'S') {
            position.y--
        } else if (position.heading === 'W') {
            position.x--
        }             
    } else if (action === 'L') {
        if (position.heading === 'N') {
            position.heading = 'W'
        } else if (position.heading === 'E') {
            position.heading = 'N'
        } else if (position.heading === 'S') {
            position.heading = 'E'
        } else if (position.heading === 'W') {
            position.heading = 'S'
        }                 
    } else if (action === 'R') {
        if (position.heading === 'N') {
            position.heading = 'E'
        } else if (position.heading === 'E') {
            position.heading = 'S'
        } else if (position.heading === 'S') {
            position.heading = 'W'
        } else if (position.heading === 'W') {
            position.heading = 'N'
        } 
    }
    return position
 }

 function marsRover(input) {
    const lines = input.split('\n')
    const firstRover = {
        position:lines[1],
        action:lines[2]
    }
    const secondRover = {
        position:lines[3],
        action:lines[4]
    }
 }

module.exports = {
    applyAction,
    marsRover
}
