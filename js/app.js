/*--------------------------------Constants----------------------------*/

let player1Name = "Tixie"
let player2Name = "Katya"


/*---------------------------- Variables (state) ----------------------------*/
let roundCounter, rollCounter, turn, gameInProgress, winner, tie

let diceTally = {}


let scoreboard1 = {
  aces: null,
  twos: null,
  threes: null,
  fours: null,
  fives: null,
  sixes: null,
  threeOfAKind: null,
  fourOfAKind: null,
  fullHouse: null,
  smallStraight: null,
  largeStraight: null,
  yasszee: null,
  chance: null,
}

let scoreboard2 = {
  aces: null,
  twos: null,
  threes: null,
  fours: null,
  fives: null,
  sixes: null,
  threeOfAKind: null,
  fourOfAKind: null,
  fullHouse: null,
  smallStraight: null,
  largeStraight: null,
  yasszee: null,
  chance: null,
}
//dice variables
let die0 = {
  value: 0,
  locked: false
}
let die1 = {
  value: 0,
  locked: false
}
let die2 = {
  value: 0,
  locked: false
}
let die3 = {
  value: 0,
  locked: false
}
let die4 = {
  value: 0,
  locked: false
}

let diceOnTable = [
  die0,
  die1,
  die2,
  die3,
  die4
]

/*------------------------ Cached Element References ------------------------*/
const messageEl = document.querySelector("#message")
const rollBtn = document.querySelector("#roll-btn")
const endTurnBtn = document.querySelector("#end-turn-btn")
const restartBtn = document.querySelector("#restart-btn")
const tableDiceEl = document.querySelector("#table-dice")
const scoreboard1El = document.querySelector("player-one-scoreboard")
const scoreboard2Ek = document.querySelector("player-two-scoreboard")
const dieEl = document.querySelectorAll(".table-die")
const rollCountEl = document.querySelector("#roll-count")


/*----------------------------- Event Listeners -----------------------------*/
restartBtn.addEventListener("click", init)
rollBtn.addEventListener("click", rollDiceHandle)
tableDiceEl.addEventListener("click", lockDice)

/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  roundCounter = 1
  rollCounter = 0
  turn = 1
  gameInProgress = true
  winner = false
  tie = false
  diceTally = {}
  scoreboard1 = {
  aces: null,
  twos: null,
  threes: null,
  fours: null,
  fives: null,
  sixes: null,
  threeOfAKind: null,
  fourOfAKind: null,
  fullHouse: null,
  smallStraight: null,
  largeStraight: null,
  yasszee: null,
  chance: null,
  }
  scoreboard2 = {
  aces: null,
  twos: null,
  threes: null,
  fours: null,
  fives: null,
  sixes: null,
  threeOfAKind: null,
  fourOfAKind: null,
  fullHouse: null,
  smallStraight: null,
  largeStraight: null,
  yasszee: null,
  chance: null,
  }
  die0 = {
    value: 0,
    locked: false
  }
  die1 = {
    value: 0,
    locked: false
  }
  die2 = {
    value: 0,
    locked: false
  }
  die3 = {
    value: 0,
    locked: false
  }
  die4 = {
    value: 0,
    locked: false
  }
  diceOnTable = [
    die0,
    die1,
    die2,
    die3,
    die4
  ]
  render()
}

function render() {
rollCountEl.textContent = rollCounter
displayMessage()
renderDice(diceOnTable)
}

function displayMessage() {
  turn === 1 ? messageEl.textContent = `${player1Name}, you better work those dice!` : messageEl.textContent = `${player2Name}, you better work those dice!`
}

function rollDiceHandle() {
  if(rollCounter >= 3){
    return
  }
  rollDice(diceOnTable)
}

function rollDice(arr) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].locked === false){
      arr[i].value = Math.floor(Math.random() * 6) + 1
    }
  } renderDice(diceOnTable)
  rollIncrement()
}

function lockDice(evt) {
  let divId = evt.path[1].id
  let diceId = divId.replace("die-","")
  if(diceOnTable[diceId].locked === false){
    diceOnTable[diceId].locked = true
    evt.target.classList.add("locked")
  } else if (diceOnTable[diceId].locked === true){
    diceOnTable[diceId].locked = false
    evt.target.classList.remove("locked")
  }
}

function renderDice(arr) {
  for(let i = 0; i < arr.length; i++) {
    dieEl[i].firstChild.textContent = `${diceOnTable[i].value}`
  }
}

function rollIncrement() {
  rollCounter++
  rollCountEl.textContent = rollCounter
}

function changeTurn() {
  turn = turn * -1
  console.log(turn)
}



/*------------------------ Minimum Requirements -----------------------------*/
// - **Render a game in the browser**. You may not use Canvas or jQuery.
// - **Include win/loss logic and render win/loss messages in HTML.** You may not use alerts or prompt anywhere in your application.
// - Include separate HTML, CSS, JavaScript, and JavaScript Data files.
// - Be grammatically correct and be free of spelling errors.
// - Display a favicon.
// - Use CSS Flexbox or Grid.
// - Look and feel similar to apps we use daily - it has should have a consistent and polished user interface and offers a positive user experience, including accessibility features.
// - Have no remaining dead or commented out code, or console logs.
// - Be coded using proper indentation.
// - Be coded using function and variable names that make sense and follow the conventions demonstrated in lecture (for example: arrays are always plural).
// - **Display that you are making consistent code choices**. For example, choose between your preference for function declarations vs. function expressions.
// - Be deployed online so that the rest of the world can play your game!
// - Include functionality specific to your game as specified in square brackets in the Recommended Games section below, or as discussed with your instructor if building a game not on the Recommended Games list.
