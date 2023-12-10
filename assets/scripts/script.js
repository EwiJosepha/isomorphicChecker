// Javascript function to check if two
// strings are isomorphic
// catching the DOM
const button = document.getElementById('submit-button')
const displayResult = document.getElementById('resultt')
// listening to a click button
// Event handeler
function isomorphicString (e) {
  e.preventDefault()
  const s = document.getElementById('string-one').value
  const t = document.getElementById('string-two').value
  if (s.length !== t.length) {
    displayResult.innerHTML = 'The two strings must bee the same'
  }
  const mapa = new Map()
  const mapb = new Map()
  for (let i = 0; i < s.length; i++) {
    if (mapa.has(s[i])) {
      if (mapa.get(s[i]) !== t[i]) {
        console.log(mapa.get(s[i]))
        displayResult.innerHTML = 'false'
        return
      }
    } else {
      mapa.set(s[i], t[i])
      console.log(mapa)
    }
    if (mapb.has(t[i])) {
      if (mapb.get(t[i]) !== s[i]) {
        displayResult.innerHTML = 'false'
        return
      }
    } else {
      mapb.set(t[i], s[i])
    }
  }
  displayResult.innerHTML = 'true'
}

button.addEventListener('click', isomorphicString)
