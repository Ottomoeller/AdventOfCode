let input = "R1, L4, L5, L5, R2, R2, L1, L1, R2, L3, R4, R3, R2, L4, L2, R5, L1, R5, L5, L2, L3, L1, R1, R4, R5, L3, R2, L4, L5, R1, R2, L3, R3, L3, L1, L2, R5, R4, R5, L5, R1, L190, L3, L3, R3, R4, R47, L3, R5, R79, R5, R3, R1, L4, L3, L2, R194, L2, R1, L2, L2, R4, L5, L5, R1, R1, L1, L3, L2, R5, L3, L3, R4, R1, R5, L4, R3, R1, L1, L2, R4, R1, L2, R4, R4, L5, R3, L5, L3, R1, R1, L3, L1, L1, L3, L4, L1, L2, R1, L5, L3, R2, L5, L3, R5, R3, L4, L2, R2, R4, R4, L4, R5, L1, L3, R3, R4, R4, L5, R4, R2, L3, R4, R2, R1, R2, L4, L2, R2, L5, L5, L3, R5, L5, L1, R4, L1, R1, L1, R4, L5, L3, R4, R1, L3, R4, R1, L3, L1, R1, R2, L4, L2, R1, L5, L4, L5"

let letters = input.match(/[a-zA-Z]/g)
let numbers = input.match(/\d+/g)

let grid = new Array(400)

for(let i = 0; i < grid.length; i++){
    grid[i] = new Array(400)
    for(let u = 0; u < grid.length; u++){
        grid[i][u] = 0
    }
}

let x = 0
let y  = 0
let direction = 'N'

for(let n = 0; n < letters.length; n++) {
    // console.log(x)
    // console.log(direction)
    // console.log(letters[n])
    // console.log(numbers[n])
    console.log(grid[x][y])
    /////////North////////////
    if(direction == 'N' && letters[n] == "L"){
        x-=parseInt(numbers[n])
        direction = 'W'
        if(grid[x][y] == 1){
            break
        } else {
            grid[x][y] == 1
        }
    } else if(direction == 'N' && letters[n] == "R") {
        x+=parseInt(numbers[n])
        direction = 'E'
        if(grid[x][y] == 1){
            break
        } else {
            grid[x][y] == 1
        }
    }
    /////////South////////////
    else if(direction == 'S' && letters[n] == "L"){
        x+=parseInt(numbers[n])
        direction = 'E'
        if(grid[x][y] == 1){
            break
        } else {
            grid[x][y] == 1
        }
    } else if(direction == 'S' && letters[n] == "R") {
        x-=parseInt(numbers[n])
        direction = 'W'
        if(grid[x][y] == 1){
            break
        } else {
            grid[x][y] == 1
        }
    }
    /////////East////////////
    else if(direction == 'E' && letters[n] == "L"){
        y+=parseInt(numbers[n])
        direction = 'N'
        if(grid[x][y] == 1){
            break
        } else {
            grid[x][y] == 1
        }
    } else if(direction == 'E' && letters[n] == "R") {
        y-=parseInt(numbers[n])
        direction = 'S'
        if(grid[x][y] == 1){
            break
        } else {
            grid[x][y] == 1
        }
    }
    /////////West////////////
    else if(direction == 'W' && letters[n] == "L"){
        y-=parseInt(numbers[n])
        direction = 'S'
        if(grid[x][y] == 1){
            break
        } else {
            grid[x][y] == 1
        }
    } else if(direction == 'W' && letters[n] == "R") {
        y+=parseInt(numbers[n])
        direction = 'N'
        if(grid[x][y] == 1){
            break
        } else {
            grid[x][y] == 1
        }
    }
}


console.log(Math.abs(x)+Math.abs(y))