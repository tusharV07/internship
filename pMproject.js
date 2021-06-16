let W_KEYS = ['q', 'w', 'e', 'r', 't', 'y', 'u']
let B_KEYS = ['a', 's', 'd', 'f', 'g']

let keys = document.querySelectorAll('.k')
let whiteKeys = document.querySelectorAll('.k.white')
let blackKeys = document.querySelectorAll('.k.black')

keys.forEach(key => {
  key.addEventListener('click', () => playSound(key))
})

document.addEventListener('keydown', t => {
  if (t.repeat) return
  let key = t.key
  let whiteKeyIndex = W_KEYS.indexOf(key)
  let blackKeyIndex = B_KEYS.indexOf(key)

  if (whiteKeyIndex > -1) playSound(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playSound(blackKeys[blackKeyIndex])
})

function playSound(key) {
  let noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = -1
  noteAudio.play()
  key.classList.add('active')
  noteAudio.addEventListener('ended', () => {
  key.classList.remove('active')
  })
}

function changeColor() {
document.getElementById("rec").style.backgroundColor = document.getElementById("pianocolor").value;
}