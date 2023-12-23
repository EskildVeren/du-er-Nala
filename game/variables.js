/*
Variables that will change a lot during development.
Objects and variables are defined here 
*/

//What direction player is walking
let direction = null
let pause = false
let isMoving = false

const gameBoard = new GameBoard(background)
const player = new GameObject(4, 5, primary)
const tom = new GameObject(14, 5, secondary)
const tim = new GameObject(17, 5, accent)
const v1 = new GameObject(30, 4, secondary)
const v2 = new GameObject(7, 15, secondary)
const v3 = new GameObject(-1, 7, secondary)
const v4 = new GameObject(4, -1, secondary)
//Testing adjectives
tom.stop = true

gameBoard.entities = [player, tom, tim, v1, v2, v3, v4]
gameBoard.pushEntities = [tom]
gameBoard.stopEntities = [tim]

let leftVacuums = {vx: -1, vy: 0, vacuums: [v1]}
let upVacuums = {vx: 0, vy: -1, vacuums: [v2]}
let rightVacuums = {vx: 1, vy: 0, vacuums: [v3]}
let downVacuums = {vx: 0, vy: 1, vacuums: [v4]}
const allVacuums = [leftVacuums, upVacuums, rightVacuums, downVacuums]