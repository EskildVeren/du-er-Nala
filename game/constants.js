/*
This is constants such as colors and canvas, which rarely will be changed.
*/

//colors
const background = "#050820"
const text = "#dde0fa"
const primary = "#8890EC"
const secondary = "#591898"
const accent = "#be4ae2"

//Game constants
const xTiles = 10
const yTiles = 10
const tileSize = 40
const canvasWidth = xTiles * tileSize
const canvasHeight = yTiles * tileSize
//HTML elements
const body = document.querySelector("body")

const canvas = document.getElementById("canvas")
canvas.height = canvasHeight
canvas.width = canvasWidth
const ctx = canvas.getContext("2d")
const arrowLeftImg = document.getElementById("arrowLeft")
const arrowUpImg = document.getElementById("arrowUp")
const arrowRightImg = document.getElementById("arrowRight")
const arrowDownImg = document.getElementById("arrowDown")
const playerImg = document.getElementById("player")

//Dictionaries for removing repetitive code
const movementMappings = [
    {keyCode: 37, direction: "left", vx: -1, vy: 0},
    {keyCode: 38, direction: "up", vx: 0, vy: -1},
    {keyCode: 39, direction: "right", vx: 1, vy: 0},
    {keyCode: 40, direction: "down", vx: 0, vy: 1},
]
//Used for spawning new vacuums
const vacuumGoingLeft = {
    startX: xTiles,
    startY: "random",
    vx: -1,
    vy: 0,
    sprite: arrowLeftImg
}
const vacuumGoingUp = {
    startX: "random",
    startY: yTiles,
    vx: 0,
    vy: -1,
    sprite: arrowUpImg
}
const vacuumGoingRight = {
    startX: -1,
    startY: "random",
    vx: 1,
    vy: 0,
    sprite: arrowRightImg
}
const vacuumGoingDown = {
    startX: "random",
    startY: -1,
    vx: 0,
    vy: 1,
    sprite: arrowDownImg
}