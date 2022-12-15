/*---------------------------- Variables (state) ----------------------------*/
let roundCounter, rollCounter, turn, gameInProgress, winner, tie

let diceTally = {}

let diceOnTable = []

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
  value: null,
  locked: false
}
let die1 = {
  value: null,
  locked: false
}
let die2 = {
  value: null,
  locked: false
}
let die3 = {
  value: null,
  locked: false
}
let die4 = {
  value: null,
  locked: false
}



/*------------------------ Cached Element References ------------------------*/
const messageEl = document.querySelector("#message")
const rollBtn = document.querySelector("#roll-btn")
const endTurnBtn = document.querySelector("#end-turn-btn")
const restartBtn = document.querySelector("#restart-btn")
const tableDiceEl = document.querySelector("#table-dice")
const scoreboard1El = document.querySelector("player-one-scoreboard")
const scoreboard2Ek = document.querySelector("player-two-scoreboard")





/*----------------------------- Event Listeners -----------------------------*/




/*-------------------------------- Functions --------------------------------*/





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
