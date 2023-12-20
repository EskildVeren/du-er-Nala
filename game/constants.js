/*
This is constants such as colors and canvas, which rarely will be changed.
*/

//colors
const background = "#050820"
const text = "#dde0fa"
const primary = "#8890EC"
const secondary = "#591898"
const accent = "#be4ae2"

const body = document.querySelector("body")

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
//What direction player is walking
let direction = null