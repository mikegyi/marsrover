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

 function applyActions(position, actions) {
    for(const action of actions) {
        position = applyAction(position, action)
        
    }
    return position
 }

function adaptPositionToString(position) {
    return position.x + ' ' + position.y + ' ' + position.heading
}

function adaptStringToPosition(string) {
    return {x: string[0], y: string[2], heading: string[4]}
}

 function marsRover(input) {
    const lines = input.split('\n')
    const positionFirstRover = adaptStringToPosition(lines[1])
    const actionsFirstRover = lines[2]
    const positionSecondRover = adaptStringToPosition(lines[3])
    const actionsSecondRover = lines[4]

    const finalFirstRover = applyActions(positionFirstRover, actionsFirstRover)
    const secondFirstRover = applyActions(positionSecondRover, actionsSecondRover)

    return adaptPositionToString(finalFirstRover) + '\n' + adaptPositionToString(secondFirstRover)
 }

module.exports = {
    applyAction,
    applyActions,
    marsRover
}