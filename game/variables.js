/*
Variables that will change a lot during development.
Objects and variables are defined here 
*/

const gameBoard = new GameBoard(background)
const player = new GameObject(4, 5, primary)
const tom = new GameObject(14, 5, secondary)
const tim = new GameObject(17, 5, accent)
const v1 = new GameObject(18, 6, secondary)
//Testing adjectives
tom.stop = true

gameBoard.entities = [player, tom, tim, v1]
gameBoard.pushEntities = [tom]
gameBoard.stopEntities = [tim]