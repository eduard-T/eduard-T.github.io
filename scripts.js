// bound elements
const loader = document.getElementById('PAGE_LOADER')
const yearText = document.getElementById('footer-year')


// helpers
function fadeOut() {

  // fade out the element after a delay
  window.setTimeout(() => {

    // add a smooth fade-out effect
    loader.style.transition = 'opacity 500ms'

    // set the opacity to 0 to initiate the fade-out
    loader.style.opacity = '0'

    // remove the element from the DOM after the animation
    setTimeout(() => {
      loader.remove()
    }, 500)
  }, 750)
}

function setYear() {

  // grab year from date as string
  const currentYear = new Date().getFullYear().toString()

  // append the current year
  yearText.appendChild(document.createTextNode(currentYear))
}


// listeners
window.addEventListener('load', () => {
  setYear()
  fadeOut()
})
