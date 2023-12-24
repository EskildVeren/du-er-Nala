/*
Variables that will change a lot during development.
Objects and variables are defined here 
*/

//What direction player is walking
let direction = null
let pause = false
let isMoving = false

const gameBoard = new GameBoard(background)

let leftVacuums = {vx: -1, vy: 0, vacuums: []}
let upVacuums = {vx: 0, vy: -1, vacuums: []}
let rightVacuums = {vx: 1, vy: 0, vacuums: []}
let downVacuums = {vx: 0, vy: 1, vacuums: []}
const allVacuums = [leftVacuums, upVacuums, rightVacuums, downVacuums]