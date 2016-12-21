let input = "R1, L4, L5, L5, R2, R2, L1, L1, R2, L3, R4, R3, R2, L4, L2, R5, L1, R5, L5, L2, L3, L1, R1, R4, R5, L3, R2, L4, L5, R1, R2, L3, R3, L3, L1, L2, R5, R4, R5, L5, R1, L190, L3, L3, R3, R4, R47, L3, R5, R79, R5, R3, R1, L4, L3, L2, R194, L2, R1, L2, L2, R4, L5, L5, R1, R1, L1, L3, L2, R5, L3, L3, R4, R1, R5, L4, R3, R1, L1, L2, R4, R1, L2, R4, R4, L5, R3, L5, L3, R1, R1, L3, L1, L1, L3, L4, L1, L2, R1, L5, L3, R2, L5, L3, R5, R3, L4, L2, R2, R4, R4, L4, R5, L1, L3, R3, R4, R4, L5, R4, R2, L3, R4, R2, R1, R2, L4, L2, R2, L5, L5, L3, R5, L5, L1, R4, L1, R1, L1, R4, L5, L3, R4, R1, L3, R4, R1, L3, L1, R1, R2, L4, L2, R1, L5, L4, L5"

let letters = input.match(/[a-zA-Z]/g)
let numbers = input.match(/\d+/g)

let grid = new Array(200)

let x = 0
let y  = 0
let currPos = 0
let endPos = 0
let direction = 'N'

for(let n = 0; n < letters.length; n++) {
    // console.log(x)
    // console.log(y)
    // console.log(grid)
    console.log('------------------------------')
    // console.log(direction)
    // console.log(letters[n])
    // console.log(numbers[n])
    console.log('------------------------------')
    // currPos=x
    /////////North////////////
    if(direction == 'N' && letters[n] == "L"){
        if(!grid.includes(`${x} , ${y}`)){
            grid.push(`${x} , ${y}`)
        } else {
            console.log(" 11111111111111111111111")
            break
        }
        x-=parseInt(numbers[n])
        direction = 'W'
        endPos=x
        for(let k = currPos-1; k<endPos; k--){
            grid.push(`${k} , ${y}`)
        }
    }
    else if(direction == 'N' && letters[n] == "R") {
        if(!grid.includes(`${x} , ${y}`)){
            grid[n] = `${x} , ${y}`
        } else {
            console.log(" 22222222222222222222222222222")
            break
        }
        x+=parseInt(numbers[n])
        direction = 'E'
        endPos=x
        for(let k = currPos+1; k<endPos; k++){
            grid.push(`${k} , ${y}`)
        }
    }
    /////////South////////////
    else if(direction == 'S' && letters[n] == "L"){
        if(!grid.includes(`${x} , ${y}`)){
            grid[n] = `${x} , ${y}`
        } else {
            console.log(" 333333333333333333333333333")
            break
        }
        x+=parseInt(numbers[n])
        direction = 'E'
        endPos=x
        for(let k = currPos+1; k<endPos; k++){
            grid.push(`${k} , ${y}`)
        }
    }
    else if(direction == 'S' && letters[n] == "R") {
        if(!grid.includes(`${x} , ${y}`)){
            grid[n] = `${x} , ${y}`
        } else {
            console.log(" 444444444444444444444444444")
            break
        }
        x-=parseInt(numbers[n])
        direction = 'W'
        endPos=x
        for(let k = currPos-1; k<endPos; k--){
            grid.push(`${k} , ${y}`)
        }
    }
    /////////East////////////
    else if(direction == 'E' && letters[n] == "L"){
        if(!grid.includes(`${x} , ${y}`)){
            grid[n] = `${x} , ${y}`
        } else {
            console.log(" 5555555555555555555555555555")
            break
        }
        y+=parseInt(numbers[n])
        direction = 'N'
        endPos=y
        for(let k = currPos+1; k<endPos; k++){
            grid.push(`${x} , ${k}`)
        }
    }
    else if(direction == 'E' && letters[n] == "R") {
        if(!grid.includes(`${x} , ${y}`)){
            grid[n] = `${x} , ${y}`
        } else {
            console.log(" 66666666666666666666666")
            break
        }
        y-=parseInt(numbers[n])
        direction = 'S'
        endPos=y
        for(let k = currPos-1; k<endPos; k--){
            grid.push(`${x} , ${k}`)
        }
    }
    /////////West////////////
    else if(direction == 'W' && letters[n] == "L"){
        if(!grid.includes(`${x} , ${y}`)){
            grid[n] = `${x} , ${y}`
        } else {
            console.log(" 77777777777777777777777777777777")
            break
        }
        y-=parseInt(numbers[n])
        direction = 'S'
        endPos=y
        for(let k = currPos-1; k<endPos; k--){
            grid.push(`${x} , ${k}`)
        }
    }
    else if(direction == 'W' && letters[n] == "R") {
        if(!grid.includes(`${x} , ${y}`)){
            grid[n] = `${x} , ${y}`
        } else {
            console.log(" 8888888888888888888888888888888888")
            break
        }
        y+=parseInt(numbers[n])
        direction = 'N'
        endPos=y
        for(let k = currPos+1; k<endPos; k++){
            grid.push(`${x} , ${k}`)
        }
    }
}

console.log(Math.abs(x)+Math.abs(y))