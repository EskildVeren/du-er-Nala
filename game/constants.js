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
const canvasWidth = 1200
const canvasHeight = 600
const tileSize = 40
//HTML elements
const body = document.querySelector("body")

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const summonObjectButton = document.getElementById("summonObject")
const giveStopButton = document.getElementById("giveStop")
const givePushButton = document.getElementById("givePush")

//Dictionaries for removing repetitive code
const movementMappings = [
    {keyCode: 37, direction: "left", vx: -1, vy: 0},
    {keyCode: 38, direction: "up", vx: 0, vy: -1},
    {keyCode: 39, direction: "right", vx: 1, vy: 0},
    {keyCode: 40, direction: "down", vx: 0, vy: 1},
]