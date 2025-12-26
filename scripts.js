// bound elements
const loaderContainer = document.getElementById('LOADER_CONTAINER')
const loader = document.getElementById('LOADER')
const yearFooter = document.getElementById('YEAR_FOOTER')
const yearExpCount = document.getElementById('YEAR_EXP')


// helpers
function fadeOut() {

  // fade out the loader container after the animation cycles
  loader.addEventListener('animationiteration', () => {

    // remove loader
    loader.remove()

    // add a smooth fade-out effect
    loaderContainer.style.transition = 'opacity 500ms'

    // set the opacity to 0 to initiate the fade-out
    loaderContainer.style.opacity = '0'

    // remove the element from the DOM after the animation
    setTimeout(() => {
      loaderContainer.remove()
    }, 500)
  })
}

function setYear() {

  // grab year from date as string
  const currentYear = new Date().getFullYear().toString()

  // append the current year
  yearFooter.appendChild(document.createTextNode(currentYear))
}

function setExpInYears() {

  const _MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365

  // grab year from date as string
  const startDate = new Date(2018, 7).getTime()
  const now = new Date().getTime()

  // determine year count
  const yearCount = Math.floor(Math.abs(now - startDate) / _MS_PER_YEAR)

  // append the calculated value
  yearExpCount.appendChild(document.createTextNode(yearCount.toString()))
}


// listeners
window.addEventListener('load', () => {
  setExpInYears()
  setYear()
  fadeOut()
})
