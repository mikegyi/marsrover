//Determine the logic behind the mars rover actions
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


//Loop over each individual action in the action sequence
 function applyActions(position, actions) {
    for(const action of actions) {
        postion = applyAction(position, action)
        
    }
    return position
 }

 //Convert the received position object as a string
function adaptPositionToString(position) {
    return position.x + ' ' + position.y + ' ' + position.heading
}

//Convert the received string to an object 
function adaptStringToPosition(string) {
    return {x: string[0], y: string[2], heading: string[4]}
}

//Move each mars rover sequentially
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

 //Export the functions so they are available in the test file
module.exports = {
    applyAction,
    applyActions,
    marsRover
}
