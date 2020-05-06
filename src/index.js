import { createHomePage } from './homePage'
import { createMenuPage } from './menuPage'
import { createContactPage } from './contactPage'
import { resetPage } from './elementActions'

// Call home page first
createHomePage()

const home = document.getElementById("home")
const menu = document.getElementById("menu")
const contact = document.getElementById("contact")

// Auto-select the home tab first
let lastSelected = home
toggleTab(lastSelected, home)


// Logic for home page
home.addEventListener("click", function() {
  lastSelected = setCurrentSelected(lastSelected, home)
  resetPage()
  createHomePage()
})


// Logic for menu page
menu.addEventListener("click", () => {
  lastSelected = setCurrentSelected(lastSelected, menu)
  resetPage()
  createMenuPage()
})


// Logic for contact page
contact.addEventListener("click", () => {
  lastSelected = setCurrentSelected(lastSelected, contact)
  resetPage()
  createContactPage()
})


// Toggle the underline effect
function toggleTab(tab) {
  tab.classList.toggle("tab-select")
}


// Logic to manage tabs
function setCurrentSelected(lastSelected, currSelected) {
  if (!lastSelected | lastSelected != currSelected) {
    if (lastSelected) { toggleTab(lastSelected) }
    toggleTab(currSelected)
    lastSelected = currSelected
  }
  return lastSelected
}