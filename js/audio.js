let ajaSound = new Audio("../assets/aja.m4a")
let alyssaSound = new Audio("../assets/alyssa.mp3")

function playAjaSound() {
  ajaSound.volume = .25
  ajaSound.play()
}

function playAlyssaSound() {
  alyssaSound.volume = .25
  alyssaSound.play()
}



export {
  playAjaSound,
  playAlyssaSound
}
