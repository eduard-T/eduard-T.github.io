// elements
const loader = document.getElementById('pageLoader')
const asset = document.getElementById('waveAsset')
const adjustedHeader = document.getElementById('header')
const yearText = document.getElementById('year')
const burger = document.getElementById('burger')


// helpers
function fadeOut() {
  // fade out the element after a delay
  window.setTimeout(() => {
    // add a smooth fade-out effect
    loader.style.transition = 'opacity 1s'
    // set the opacity to 0 to initiate the fade-out
    loader.style.opacity = '0'

    // remove the element from the DOM after the animation
    setTimeout(() => {
      loader.remove()
    }, 750)
  }, 1000)
}

function setYear() {
  // append the current year
  yearText.appendChild(document.createTextNode(new Date().getFullYear()))
}

function handleAssetResize() {
  // get the new image size after resize
  const currentHeight = asset ? asset.clientHeight - 120 : 0

  // set the margin for the target element using the current asset height
  adjustedHeader.style.marginBottom = `${currentHeight + 100}px`
}

function toggleMenu() {
  // scroll to top to ensure smooth animation transition
  window.scrollTo({ top: 0, behavior: 'smooth' })

  // freeze scrolling when open
  if (burger.checked) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'visible'
  }
}

function scrollToSection(sectionId) {
  // remove mobile menu and restore scrolling
  if (burger.checked) {
    burger.checked = false
    document.body.style.overflow = 'visible'
  }

  // grab section based on id
  const section = document.getElementById(sectionId)

  // set y-axis offset
  let marginTop = 25

  // calculate scroll position
  const scrollPosition = section.getBoundingClientRect().top + window.scrollY - marginTop

  // scroll to the adjusted position
  window.scrollTo({ top: scrollPosition, behavior: 'smooth' })
}


// listeners
window.addEventListener('resize', handleAssetResize)
window.addEventListener('load', () => {
  handleAssetResize()
  setYear()
  fadeOut()
})
