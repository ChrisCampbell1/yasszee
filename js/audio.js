let ajaSound = new Audio("../assets/aja.m4a")
let alyssaSound = new Audio("../assets/alyssa.mp3")
let bendelaSound = new Audio("../assets/bendelacreme.m4a")
let jinkxSound = new Audio("../assets/jinkx.m4a")
let katyaSound = new Audio("../assets/katya.mp3")
let laganjaSound = new Audio("../assets/laganja.mp3")
let latriceSound = new Audio("../assets/latrice.mp3")
let shangelaSound = new Audio("../assets/shangela.m4a")
let tatiannaSound = new Audio("../assets/tatianna.m4a")
let trixieSound = new Audio("../assets/trixie.mp3")

function playAjaSound() {
  ajaSound.volume = .25
  ajaSound.play()
}

function playAlyssaSound() {
  alyssaSound.volume = .25
  alyssaSound.play()
}

function playBendelaSound() {
  bendelaSound.volume = .6
  bendelaSound.play()
}

function playJinkxSound() {
  jinkxSound.volume = .6
  jinkxSound.play()
}

function playKatyaSound() {
  katyaSound.volume = .25
  katyaSound.play()
}

function playLaganjaSound() {
  laganjaSound.volume = .25
  laganjaSound.play()
}

function playLatriceSound() {
  latriceSound.volume = .25
  latriceSound.play()
}

function playShangelaSound() {
  shangelaSound.volume = .25
  shangelaSound.play()
}

function playTatiannaSound() {
  tatiannaSound.volume = .5
  tatiannaSound.play()
}

function playTrixieSound() {
  trixieSound.volume = .25
  trixieSound.play()
}




export {
  playAjaSound,
  playAlyssaSound,
  playBendelaSound,
  playJinkxSound,
  playKatyaSound,
  playLaganjaSound,
  playLatriceSound,
  playShangelaSound,
  playTatiannaSound,
  playTrixieSound
}
