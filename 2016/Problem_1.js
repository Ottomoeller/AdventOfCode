let input = "R1, L4, L5, L5, R2, R2, L1, L1, R2, L3, R4, R3, R2, L4, L2, R5, L1, R5, L5, L2, L3, L1, R1, R4, R5, L3, R2, L4, L5, R1, R2, L3, R3, L3, L1, L2, R5, R4, R5, L5, R1, L190, L3, L3, R3, R4, R47, L3, R5, R79, R5, R3, R1, L4, L3, L2, R194, L2, R1, L2, L2, R4, L5, L5, R1, R1, L1, L3, L2, R5, L3, L3, R4, R1, R5, L4, R3, R1, L1, L2, R4, R1, L2, R4, R4, L5, R3, L5, L3, R1, R1, L3, L1, L1, L3, L4, L1, L2, R1, L5, L3, R2, L5, L3, R5, R3, L4, L2, R2, R4, R4, L4, R5, L1, L3, R3, R4, R4, L5, R4, R2, L3, R4, R2, R1, R2, L4, L2, R2, L5, L5, L3, R5, L5, L1, R4, L1, R1, L1, R4, L5, L3, R4, R1, L3, R4, R1, L3, L1, R1, R2, L4, L2, R1, L5, L4, L5"
// let input = "R8, R4, R4, R8, L40, R2, L2"
let letters = input.match(/[a-zA-Z]/g)
let numbers = input.match(/\d+/g)

let grid = []

let x = 0
let y  = 0
let newPos = 0
let direction = 'N'
let exit = false

for(let n = 0; n < letters.length; n++) {
    let startPosX = x
    let startPosY = y
    console.log(x + " pos x")
    console.log(y + " pos y ")
    // console.log(startPosX + " startposx")
    // console.log(startPosY + " startposy")
    // console.log(grid)
    // console.log(direction + " dir")
    // console.log(letters[n] + " letters")
    // console.log(numbers[n] + " numbers ")
    console.log('------------------------------------------------')

    /////////North////////////
    if(direction == 'N' && letters[n] == "L"){
        x-=parseInt(numbers[n])
        direction = 'W'
        newPos = x
        for(let k = startPosX-1; k>=newPos; k--){
            if(!grid.includes(`${k} , ${y}`)){
                grid.push(`${k} , ${y}`)
            } else {
                x=k
                exit = true
                break
            }
        }
        if(exit == true){
            console.log("break point " + `${x} , ${y}`)
            break
        }

    }
    else if(direction == 'N' && letters[n] == "R") {
        x+=parseInt(numbers[n])
        direction = 'E'
        newPos = x
        for(let k = startPosX+1; k<=newPos; k++){
            console.log(`${k} , ${y}`)
            if(!grid.includes(`${k} , ${y}`)){
                grid.push(`${k} , ${y}`)
            } else {
                x=k
                exit = true
                break
            }
        }
        if(exit == true){
            console.log("break point " + `${x} , ${y}`)
            break
        }
    }
    /////////South////////////
    else if(direction == 'S' && letters[n] == "L"){

        x+=parseInt(numbers[n])
        direction = 'E'
        newPos = x
        for(let k = startPosX+1; k<=newPos; k++){
            if(!grid.includes(`${k} , ${y}`)){
                grid.push(`${k} , ${y}`)
            } else {
                x=k
                exit = true
                break
            }
        }
        if(exit == true){
            console.log("break point " + `${x} , ${y}`)
            break
        }
    }
    else if(direction == 'S' && letters[n] == "R") {

        x-=parseInt(numbers[n])
        direction = 'W'
        newPos = x
        for(let k = startPosX-1; k>=newPos; k--){
            if(!grid.includes(`${k} , ${y}`)){
                grid.push(`${k} , ${y}`)
            } else {
                x=k
                exit = true
                break
            }
        }
        if(exit == true){
            console.log("break point " + `${x} , ${y}`)
            break
        }
    }
    /////////East////////////
    else if(direction == 'E' && letters[n] == "L"){

        y+=parseInt(numbers[n])
        direction = 'N'
        newPos=y
        for(let k = startPosY+1; k<=newPos; k++){
            if(!grid.includes(`${x} , ${k}`)){
                grid.push(`${x} , ${k}`)
            } else {
                y=k
                exit = true
                break
            }
        }
        if(exit == true){
            console.log("break point " + `${x} , ${y}`)
            break
        }
    }
    else if(direction == 'E' && letters[n] == "R") {

        y-=parseInt(numbers[n])
        direction = 'S'
        newPos=y
        for(let k = startPosY-1; k>=newPos; k--){
            console.log(grid)
            console.log(x)
            console.log(y)
            if(!grid.includes(`${x} , ${k}`)){
                grid.push(`${x} , ${k}`)
            } else {
                y=k
                exit = true
                break
            }
        }
        if(exit == true){
            console.log("break point " + `${x} , ${y}`)
            break
        }
    }
    /////////West////////////
    else if(direction == 'W' && letters[n] == "L"){
 
        y-=parseInt(numbers[n])
        direction = 'S'
        newPos=y
        for(let k = startPosY-1; k>=newPos; k--){
            if(!grid.includes(`${x} , ${k}`)){
                grid.push(`${x} , ${k}`)
            } else {
                y=k
                exit = true
                break
            }
        }
        if(exit == true){
            console.log("break point " + `${x} , ${y}`)
            break
        }
    }
    else if(direction == 'W' && letters[n] == "R") {
   
        y+=parseInt(numbers[n])
        direction = 'N'
        newPos=y
        for(let k = startPosY+1; k<=newPos; k++){
            if(!grid.includes(`${x} , ${k}`)){
                grid.push(`${x} , ${k}`)
            } else {
                y=k
                exit = true
                break
            }
        }
        if(exit == true){
            console.log("break point " + `${x} , ${y}`)
            break
        }
    }
}

console.log(Math.abs(x)+Math.abs(y))