/*--------------------------------Constants----------------------------*/
import * as yasszeeAudio from "./audio.js"

//todo after last push, renderscoreboard broke variables aren't being console logged in the chrome console anymore, uncaught reference error
/*---------------------------- Variables (state) ----------------------------*/
let roundCounter, rollCounter, turn, gameInProgress, winner, tie, turnOver, player1Name, player2Name

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

let scoreboard2 = {
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

let p1Score = 0

let p2Score = 0

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
const p1ScoreEl = document.querySelector("#p1-score")
const p2ScoreEl = document.querySelector("#p2-score")
const startBtn = document.querySelector("#start")
const modalEl = document.querySelector("#modal")
const queensGridEl = document.querySelector("#queens-grid")
const p1AvatarEl = document.querySelector("#p1-avatar")
const p2AvatarEl = document.querySelector("#p2-avatar")
const p1DisplayNameEl = document.querySelector("#p1-display-name")
const p2DisplayNameEl = document.querySelector("#p2-display-name")

/*----------------------------- Event Listeners -----------------------------*/
restartBtn.addEventListener("click", init)
rollBtn.addEventListener("click", rollDiceHandle)
tableDiceEl.addEventListener("click", lockDice)
endTurnBtn.addEventListener("click", endTurnHandle)
scoreboard1El.addEventListener("click", scoreboardClickHandle)
scoreboard2El.addEventListener("click", scoreboardClickHandle)
startBtn.addEventListener("click", closeModal)
queensGridEl.addEventListener("click", queenClickHandle)

/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  player1Name = null
  player2Name = null
  modalEl.classList.remove("closed")
  p1Score = 0
  p2Score = 0
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
  if(roundCounter < 14){
    turnCountEl.textContent = roundCounter
  } else turnCountEl.textContent = "Game Over"
  displayMessage()
  renderDice(diceOnTable)
}

function displayMessage() {
  turn === 1 ? messageEl.textContent = `${player1Name}, you better work those dice!` : messageEl.textContent = `${player2Name}, you better work those dice!`
  if(gameInProgress === false){
    if(tie === true){
      messageEl.textContent =`Y'all tied, try again?`
    } else p1Score > p2Score ? messageEl.textContent = `${player1Name}, you're a winner baby! ${player2Name} sashay away.` : messageEl.textContent = `${player2Name}, you're a winner baby! ${player1Name} sashay away.`
  }
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
  // if(rollCounter >= 3){
  //   endTurnHandle(evt)
  // }
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
  console.log("place hand ran")
  let scoreboardKey = evt.target.textContent.toLowerCase().replaceAll(" ", "")
  if (turn === 1){
      scoreboard1[scoreboardKey] = diceTally
  } else if (turn === -1){
    scoreboard2[scoreboardKey] = diceTally
  }
}

function renderScoreboard1(arr) {
  console.log("render scoreboard ran")
  let handString = ""
  for(let i = 0; i < arr.length; i++){
    let scoreboardKey = arr[i].id.slice(3).replaceAll("-", "")
    console.log(scoreboardKey)
    let hand = scoreboard1[scoreboardKey]
    for(let prop in hand){
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
    for(let prop in hand){
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
    if(roundCounter > 13){
      gameInProgress = false
    } endGame()
  }
  changeTurn()
  resetLockBtns(lockBtnEls)
  resetDice(diceOnTable)
  rollCounter = 0
  endTurnBtn.classList.remove("true")
  render()
}

function endTurnHandle(evt) {
  if(gameInProgress === false){
    return
  }
  if(rollCounter === 0){
    return
  }
  if(turnOver === true){
    return
  }
  evt.target.classList.add("true")
  tallyDice(diceOnTable)
  turnOver = true
}

function endGame() {
  if(gameInProgress === true){
    return
  } else if (gameInProgress === false){
    calculateScore(scoreboard1, p1Score)
    calculateScore(scoreboard2, p2Score)
    p1Score = addScore(scoreboard1)
    p2Score = addScore(scoreboard2)
    p1ScoreEl.textContent = p1Score
    p2ScoreEl.textContent = p2Score
  } if(p1Score === p2Score){
    tie = true
  }
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
  let valueTracker = 0
  let diceTotal = 0
  for(let dice in scoreboard.threeofakind){
    diceTotal = diceTotal + (dice * scoreboard.threeofakind[dice])
    if(scoreboard.threeofakind[dice] > valueTracker){
      valueTracker = scoreboard.threeofakind[dice]
    }
  }
  if(valueTracker >= 3){
    scoreboard.threeOfAKindValue = diceTotal
  } else return
}

function scoreFourOfAKind(scoreboard){
  let valueTracker = 0
  let diceTotal = 0
  for(let dice in scoreboard.fourofakind){
    console.log(dice, "dice")
    console.log(scoreboard.fourofakind[dice], "values")
    diceTotal = diceTotal + (dice * scoreboard.fourofakind[dice])
    if(scoreboard.fourofakind[dice] > valueTracker){
      valueTracker = scoreboard.fourofakind[dice]
    }
  }
  console.log(valueTracker, "value tracker")
  console.log(diceTotal, "dice total")
  if(valueTracker >= 4){
    scoreboard.fourOfAKindValue = diceTotal
  } else return
}

function scoreFullHouse(scoreboard){
  let highestValueTracker = 0
  let nextHighestValueTracker = 0
  for(let dice in scoreboard.fullhouse){
    console.log("for in is running")
    if(scoreboard.fullhouse[dice] > highestValueTracker){
      highestValueTracker = scoreboard.fullhouse[dice]
    } else if (scoreboard.fullhouse[dice] <= highestValueTracker){
      nextHighestValueTracker = scoreboard.fullhouse[dice]
    }
  }
  console.log(highestValueTracker, "hightest")
  console.log(nextHighestValueTracker, "next hightest")
  if(highestValueTracker === 3 && nextHighestValueTracker === 2){
    scoreboard.fullHouseValue = 25
    console.log(scoreboard.fullHouseValue, "value")
  } else return
}

function scoreSmallStraight(scoreboard){
  if((scoreboard.smallstraight.hasOwnProperty("1") && scoreboard.smallstraight.hasOwnProperty("2") && scoreboard.smallstraight.hasOwnProperty("3") && scoreboard.smallstraight.hasOwnProperty("4")) || (scoreboard.smallstraight.hasOwnProperty("2") && scoreboard.smallstraight.hasOwnProperty("3") && scoreboard.smallstraight.hasOwnProperty("4") && scoreboard.smallstraight.hasOwnProperty("5")) || (scoreboard.smallstraight.hasOwnProperty("3") && scoreboard.smallstraight.hasOwnProperty("4") && scoreboard.smallstraight.hasOwnProperty("5") && scoreboard.smallstraight.hasOwnProperty("6"))){
    scoreboard.smallStraightValue = 30
  } else return
}

function scoreLargeStraight(scoreboard){
  let valueTracker = 0
  for(let dice in scoreboard.largestraight){
    if(scoreboard.largestraight[dice] > valueTracker){
      valueTracker = scoreboard.largestraight[dice]
    }
  }
  if(valueTracker === 1){
    scoreboard.largeStraightValue = 40
  } else return
}

function scoreYasszee(scoreboard){
  let valueTracker = 0
  for(let dice in scoreboard.yasszee){
    if(scoreboard.yasszee[dice] > valueTracker){
      valueTracker = scoreboard.yasszee[dice]
    }
  }
  if(valueTracker === 5){
    scoreboard.yasszeeValue = 50
  } else return
}

function scoreChance(scoreboard){
  let diceTotal = 0
  for(let dice in scoreboard.chance){
    diceTotal = diceTotal + (dice * scoreboard.chance[dice])
  }
  scoreboard.chanceValue = diceTotal
}

function calculateScore(scoreboard){
  scoreAces(scoreboard)
  scoreTwos(scoreboard)
  scoreThrees(scoreboard)
  scoreFours(scoreboard)
  scoreFives(scoreboard)
  scoreSixes(scoreboard)
  upperHalfBonus(scoreboard)
  scoreThreeOfAKind(scoreboard)
  scoreFourOfAKind(scoreboard)
  scoreFullHouse(scoreboard)
  scoreSmallStraight(scoreboard)
  scoreLargeStraight(scoreboard)
  scoreYasszee(scoreboard)
  scoreChance(scoreboard)
}

function addScore(scoreboard) {
  let total = 0
  total = scoreboard.acesValue + scoreboard.twosValue + scoreboard.threesValue + scoreboard.foursValue + scoreboard.fivesValue + scoreboard.sixesValue + scoreboard.threeOfAKindValue + scoreboard.fourOfAKindValue + scoreboard.fullHouseValue + scoreboard.smallStraightValue + scoreboard.largeStraightValue + scoreboard.yasszeeValue + scoreboard.chanceValue + scoreboard.upperHalfBonus
  return total
}

/*------------------------ modal functions -----------------------------*/
function closeModal() {
  if(player1Name === null || player2Name === null){
    return
  }
  yasszeeAudio.playHersesSound()
  modalEl.classList.add("closed")
}

function queenClickHandle (evt){
  if(evt.target.classList.contains("selection")) {
    if(evt.target.classList.contains("p1Choice")) {
      if(player1Name === null){
        player1Name = evt.target.parentElement.id
        player1Name = player1Name.charAt(0).toUpperCase() + player1Name.slice(1)
        evt.target.classList.add("true")
        p1AvatarEl.src = `./assets/${evt.target.parentElement.id}.png`
        p1DisplayNameEl.textContent = player1Name
        playCharacterSound(evt)
        render()
      }
    } else if(evt.target.classList.contains("p2Choice")) {
        if(player2Name === null){
          player2Name = evt.target.parentElement.id
          player2Name = player2Name.charAt(0).toUpperCase() + player2Name.slice(1)
          evt.target.classList.add("true")
          p2AvatarEl.src = `./assets/${evt.target.parentElement.id}.png`
          p2DisplayNameEl.textContent = player2Name
          playCharacterSound(evt)
          render()
        }
    }
  } return
}

function playCharacterSound(evt) {
  if(evt.target.classList.contains("p1Choice")){
    if(player1Name === "Aja") {
      yasszeeAudio.playAjaSound()
    } else if(player1Name === "Alyssa") {
      yasszeeAudio.playAlyssaSound()
    } else if(player1Name === "Bendelacreme") {
      yasszeeAudio.playBendelaSound()
    } else if(player1Name === "Jinkx") {
      yasszeeAudio.playJinkxSound()
    } else if(player1Name === "Katya") {
      yasszeeAudio.playKatyaSound()
    } else if(player1Name === "Laganja") {
      yasszeeAudio.playLaganjaSound()
    } else if(player1Name === "Latrice") {
      yasszeeAudio.playLatriceSound()
    } else if(player1Name === "Shangela") {
      yasszeeAudio.playShangelaSound()
    } else if(player1Name === "Tatianna") {
      yasszeeAudio.playTatiannaSound()
    } else if(player1Name === "Trixie") {
      yasszeeAudio.playTrixieSound()
    }
  }
  if(evt.target.classList.contains("p2Choice")){
    if(player2Name === "Aja") {
      yasszeeAudio.playAjaSound()
    } else if(player2Name === "Alyssa") {
      yasszeeAudio.playAlyssaSound()
    } else if(player2Name === "Bendelacreme") {
      yasszeeAudio.playBendelaSound()
    } else if(player2Name === "Jinkx") {
      yasszeeAudio.playJinkxSound()
    } else if(player2Name === "Katya") {
      yasszeeAudio.playKatyaSound()
    } else if(player2Name === "Laganja") {
      yasszeeAudio.playLaganjaSound()
    } else if(player2Name === "Latrice") {
      yasszeeAudio.playLatriceSound()
    } else if(player2Name === "Shangela") {
      yasszeeAudio.playShangelaSound()
    } else if(player2Name === "Tatianna") {
      yasszeeAudio.playTatiannaSound()
    } else if(player2Name === "Trixie") {
      yasszeeAudio.playTrixieSound()
    }
  }
}

/*------------------------ Minimum Requirements -----------------------------*/
//// - **Render a game in the browser**. You may not use Canvas or jQuery.
//// - **Include win/loss logic and render win/loss messages in HTML.** You may not use alerts or prompt anywhere in your application.
// - Include separate HTML, CSS, JavaScript, and JavaScript Data files.
// - Be grammatically correct and be free of spelling errors.
//// - Display a favicon.
//// - Use CSS Flexbox or Grid.
// - Look and feel similar to apps we use daily - it has should have a consistent and polished user interface and offers a positive user experience, including accessibility features.
// - Have no remaining dead or commented out code, or console logs.
// - Be coded using proper indentation.
// - Be coded using function and variable names that make sense and follow the conventions demonstrated in lecture (for example: arrays are always plural).
// - **Display that you are making consistent code choices**. For example, choose between your preference for function declarations vs. function expressions.
//// - Be deployed online so that the rest of the world can play your game!
//// - Include functionality specific to your game as specified in square brackets in the Recommended Games section below, or as discussed with your instructor if building a game not on the Recommended Games list.
