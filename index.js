// // 1. Grab the save-el paragrah and store it in a variable called saveEl
// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     count += 1
//     countEl.textContent = count
// }

// function save() {
//     // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
//     let countStr = count + " - "
//     // 3. Render the variable in the saveEl using innerText
//     saveEl.textContent += countStr
//     // NB: Make sure to not delete the existing content of the paragraph
//     countEl.textContent = 0
//     count = 0
// }

let Hscore = document.getElementById("countHome")
let Gscore = document.getElementById("countGuess")
let Record = document.getElementById("recordScore")

let homeScore = 0
let guestScore = 0
let record = 0

function homeplus1() {
    homeScore += 1
    Hscore.textContent = homeScore
}

function homeplus2() {
    homeScore += 2
    Hscore.textContent = homeScore
}

function homeplus3() {
    homeScore += 3
    Hscore.textContent = homeScore
}



function guestplus1() {
    guestScore += 1
    Gscore.textContent = guestScore
}

function guestplus2() {
    guestScore += 2
    Gscore.textContent = guestScore
}

function guestplus3() {
    guestScore += 3
    Gscore.textContent = guestScore
}


function newgame() {
    guestScore = 0
    homeScore = 0
    Hscore.textContent = homeScore
    Gscore.textContent = guestScore
    recordScore.textContent = "Records: "
}


function save() {
    let countStr = homeScore + " - " + guestScore + " , "
    recordScore.textContent += countStr
}


function records() {
    
}