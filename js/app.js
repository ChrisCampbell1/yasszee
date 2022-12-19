/*--------------------------------Constants----------------------------*/

let player1Name = "Tixie"
let player2Name = "Katya"

/*---------------------------- Variables (state) ----------------------------*/
let roundCounter, rollCounter, turn, gameInProgress, winner, tie, turnOver

let diceTally = {}

let scoreboard1 = {
  aces: null,
  twos: null,
  threes: null,
  fours: null,
  fives: null,
  sixes: null,
  threeofakind: null,
  fourofakind: null,
  fullHouse: null,
  smallStraight: null,
  largeStraight: null,
  yasszee: null,
  chance: null,
  acesValue: 0,
  twosValue: 0,
  threesValue: 0,
  foursValue: 0,
  fivesValue: 0,
  sixesValue: 0,
  threeOfAKindValue: 0,
  fourOfAKindValue: 0,
  fullHouseValue: 0,
  smallStraightValue: 0,
  largeStraightValue: 0,
  yasszeeValue: 0,
  chanceValue: 0,
  upperHalfBonus: 0
}

let scoreboard2 = {
  aces: null,
  twos: null,
  threes: null,
  fours: null,
  fives: null,
  sixes: null,
  threeofakind: null,
  fourofakind: null,
  fullHouse: null,
  smallStraight: null,
  largeStraight: null,
  yasszee: null,
  chance: null,
  acesValue: 0,
  twosValue: 0,
  threesValue: 0,
  foursValue: 0,
  fivesValue: 0,
  sixesValue: 0,
  threeOfAKindValue: 0,
  fourOfAKindValue: 0,
  fullHouseValue: 0,
  smallStraightValue: 0,
  largeStraightValue: 0,
  yasszeeValue: 0,
  chanceValue: 0,
  upperHalfBonus: 0
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

let p1Score = scoreboard1.acesValue + scoreboard1.twosValue + scoreboard1.threesValue + scoreboard1.foursValue + scoreboard1.fivesValue + scoreboard1.sixesValue + scoreboard1.threeOfAKindValue + scoreboard1.fourOfAKindValue + scoreboard1.fullHouseValue + scoreboard1.smallStraightValue + scoreboard1.largeStraightValue + scoreboard1.yasszeeValue + scoreboard1.chanceValue

let p2Score = scoreboard2.acesValue + scoreboard2.twosValue + scoreboard2.threesValue + scoreboard2.foursValue + scoreboard2.fivesValue + scoreboard2.sixesValue + scoreboard2.threeOfAKindValue + scoreboard2.fourOfAKindValue + scoreboard2.fullHouseValue + scoreboard2.smallStraightValue + scoreboard2.largeStraightValue + scoreboard2.yasszeeValue + scoreboard2.chanceValue

/*------------------------ Cached Element References ------------------------*/
const messageEl = document.querySelector("#message")
const rollBtn = document.querySelector("#roll-btn")
const endTurnBtn = document.querySelector("#end-turn-btn")
const restartBtn = document.querySelector("#restart-btn")
const tableDiceEl = document.querySelector("#table-dice")
const scoreboard1El = document.querySelector("#player-one-scoreboard")
const scoreboard2El = document.querySelector("#player-two-scoreboard")
const dieEl = document.querySelectorAll(".table-die")
const rollCountEl = document.querySelector("#roll-count")
const turnCountEl = document.querySelector("#round-count")
const lockBtnEls = document.querySelectorAll(".lock-btn")
const p1DisplayEls = document.querySelectorAll("td.p1")
const p2DisplayEls = document.querySelectorAll("td.p2")

/*----------------------------- Event Listeners -----------------------------*/
restartBtn.addEventListener("click", init)
rollBtn.addEventListener("click", rollDiceHandle)
tableDiceEl.addEventListener("click", lockDice)
endTurnBtn.addEventListener("click", endTurnHandle)
scoreboard1El.addEventListener("click", scoreboardClickHandle)
scoreboard2El.addEventListener("click", scoreboardClickHandle)

/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  turnOver = false
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
  threeofakind: null,
  fourofakind: null,
  fullhouse: null,
  smallstraight: null,
  largestraight: null,
  yasszee: null,
  chance: null,
  acesValue: 0,
  twosValue: 0,
  threesValue: 0,
  foursValue: 0,
  fivesValue: 0,
  sixesValue: 0,
  threeOfAKindValue: 0,
  fourOfAKindValue: 0,
  fullHouseValue: 0,
  smallStraightValue: 0,
  largeStraightValue: 0,
  yasszeeValue: 0,
  chanceValue: 0,
  upperHalfBonus: 0
  }
  scoreboard2 = {
  aces: null,
  twos: null,
  threes: null,
  fours: null,
  fives: null,
  sixes: null,
  threeofakind: null,
  fourofakind: null,
  fullhouse: null,
  smallstraight: null,
  largestraight: null,
  yasszee: null,
  chance: null,
  acesValue: 0,
  twosValue: 0,
  threesValue: 0,
  foursValue: 0,
  fivesValue: 0,
  sixesValue: 0,
  threeOfAKindValue: 0,
  fourOfAKindValue: 0,
  fullHouseValue: 0,
  smallStraightValue: 0,
  largeStraightValue: 0,
  yasszeeValue: 0,
  chanceValue: 0,
  upperHalfBonus: 0
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
  renderScoreboard1(p1DisplayEls)
  renderScoreboard2(p2DisplayEls)
  render()
  resetLockBtns(lockBtnEls)
}

function render() {
rollCountEl.textContent = rollCounter
turnCountEl.textContent = roundCounter
displayMessage()
renderDice(diceOnTable)
}

function displayMessage() {
  turn === 1 ? messageEl.textContent = `${player1Name}, you better work those dice!` : messageEl.textContent = `${player2Name}, you better work those dice!`
}

function rollDiceHandle() {
  if(gameInProgress === false){
    return
  }
  if(rollCounter >= 3 || turnOver === true){
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
  if(gameInProgress === false){
    return
  }
  let divId = evt.path[1].id
  let diceId = divId.replace("die-","")
  if(diceOnTable[diceId].value === 0){
    return
  }
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

function resetDice() {
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
}

function rollIncrement() {
  rollCounter++
  rollCountEl.textContent = rollCounter
}

function changeTurn() {
  turn = turn * -1
  console.log(turn)
}

function resetLockBtns(arr){
  arr.forEach(btn => {
    btn.classList.remove("locked")
  });
}

function tallyDice(arr) {
  for(let i = 0; i < arr.length; i++){
    let die = arr[i]
    if(diceTally[die.value]){
      diceTally[die.value]++
    } else diceTally[die.value] = 1
  } console.log(diceTally)
}

function placeHand(evt) {
  let scoreboardKey = evt.target.textContent.toLowerCase().replaceAll(" ", "")
  if (turn === 1){
      scoreboard1[scoreboardKey] = diceTally
  } else if (turn === -1){
    scoreboard2[scoreboardKey] = diceTally
  }
}

function renderScoreboard1(arr) {
  let handString = ""
  for(let i = 0; i < arr.length; i++){
    let scoreboardKey = arr[i].id.slice(3).replaceAll("-", "")
    let hand = scoreboard1[scoreboardKey]
    for(prop in hand){
      for(let i = 0; i < hand[prop]; i++){
        handString = handString + prop
    }
    }
    arr[i].textContent = handString
    handString = ""
  }
}

function renderScoreboard2(arr) {
  let handString = ""
  for(let i = 0; i < arr.length; i++){
    let scoreboardKey = arr[i].id.slice(3).replaceAll("-", "")
    let hand = scoreboard2[scoreboardKey]
    for(prop in hand){
      for(let i = 0; i < hand[prop]; i++){
        handString = handString + prop
    }
    }
    arr[i].textContent = handString
    handString = ""
  }
}

function scoreboardClickHandle(evt) {
  if(gameInProgress === false){
    return
  }
  if(turnOver === false){
    return
  }
  const targetType = evt.srcElement.type
  if(targetType !== "submit"){
    return
  }
  const target = evt.target
  let scoreboardKey = evt.target.textContent.toLowerCase().replaceAll(" ","")
  if(turn === 1 && target.classList.contains("p2")){
    return
  }
  if(turn === 1 && scoreboard1[scoreboardKey] !== null){
    return
  }
  if(turn === -1 && target.classList.contains("p1")){
    return
  }
  if(turn === -1 && scoreboard2[scoreboardKey] !== null){
    return
  }
  console.log("scoreboard was clicked")
  placeHand(evt)
  diceTally = {}
  if(turn === 1){
  renderScoreboard1(p1DisplayEls)
} else if (turn === -1){
  renderScoreboard2(p2DisplayEls)
}
  turnOver = false
  if(turn === -1){
    roundCounter++
  }
  changeTurn()
  resetLockBtns(lockBtnEls)
  resetDice(diceOnTable)
  rollCounter = 0
  endTurnBtn.classList.remove("true")
  if (roundCounter === 13){
    gameInProgress === false
  }
  render()
}

function endTurnHandle(evt) {
  if(gameInProgress === false){
    return
  }
  if(rollCounter === 0){
    return
  }
  evt.target.classList.add("true")
  tallyDice(diceOnTable)
  turnOver = true
}


/*------------------------ scoring functions -----------------------------*/

function scoreAces(scoreboard){
  if(scoreboard.aces[1] === undefined){
    return
  }
  let acesValue = scoreboard.aces[1] * 1
  scoreboard.acesValue = acesValue
}

function scoreTwos(scoreboard){
  if(scoreboard.twos[2] === undefined){
    return
  }
  let twosValue = scoreboard.twos[2] * 2
  scoreboard.twosValue = twosValue
}

function scoreThrees(scoreboard){
  if(scoreboard.threes[3] === undefined){
    return
  }
  let threesValue = scoreboard.threes[3] * 3
  scoreboard.threesValue = threesValue
}

function scoreFours(scoreboard){
  if(scoreboard.fours[4] === undefined){
    return
  }
  let foursValue = scoreboard.fours[4] * 4
  scoreboard.foursValue = foursValue
}

function scoreFives(scoreboard){
  if(scoreboard.fives[5] === undefined){
    return
  }
  let fivesValue = scoreboard.fives[5] * 5
  scoreboard.fivesValue = fivesValue
}

function scoreSixes(scoreboard){
  if(scoreboard.sixes[6] === undefined){
    return
  }
  let sixesValue = scoreboard.sixes[6] * 6
  scoreboard.sixesValue = sixesValue
}

function upperHalfBonus(scoreboard) {
  if(scoreboard.acesValue + scoreboard.twosValue + scoreboard.threesValue + scoreboard.foursValue + scoreboard.fivesValue + scoreboard.sixesValue >= 63 )
  scoreboard.upperHalfBonus = 35
}

function scoreThreeOfAKind(scoreboard){
//loop through key value pairs in scoreboard.threeofakind
//leep track of what the highest value is
//if value is at least three sum the total of all values
//if value is lower than three return
let valueTracker = 0
let diceTotal = 0
for(dice in scoreboard.threeofakind){
  console.log(dice, "dice")
  console.log(scoreboard.threeofakind[dice], "values")
  diceTotal = diceTotal + (dice * scoreboard.threeofakind[dice])
  if(scoreboard.threeofakind[dice] > valueTracker){
    valueTracker = scoreboard.threeofakind[dice]
  }
}
console.log(valueTracker, "value tracker")
console.log(diceTotal, "dice total")
if(valueTracker >= 3){
  scoreboard.threeOfAKindValue = diceTotal
} else return
}

function scoreFourOfAKind(scoreboard){

}
function scoreFullHouse(scoreboard){

}
function scoreSmallStraight(scoreboard){

}
function scoreLargeStraight(scoreboard){

}
function scoreYasszee(scoreboard){

}
function scoreChance(scoreboard){

}
function calculateScore(scoreboard, score){
  scoreAces(scoreboard)
  scoreTwos(scoreboard)
  scoreThrees(scoreboard)
  scoreFours(scoreboard)
  scoreFives(scoreboard)
  scoreSixes(scoreboard)
  upperHalfBonus(scoreboard)
  scoreThreeOfAKind(scoreboard)
  addScore(score, scoreboard)
}

function addScore(score, scoreboard) {
  score = scoreboard.acesValue + scoreboard.twosValue + scoreboard.threesValue + scoreboard.foursValue + scoreboard.fivesValue + scoreboard.sixesValue + scoreboard.threeOfAKindValue + scoreboard.fourOfAKindValue + scoreboard.fullHouseValue + scoreboard.smallStraightValue + scoreboard.largeStraightValue + scoreboard.yasszeeValue + scoreboard.chanceValue + scoreboard.upperHalfBonus
  console.log(score)
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
