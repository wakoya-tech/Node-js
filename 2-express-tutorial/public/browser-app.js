const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')
const icon = navToggle.querySelector('i')

navToggle.addEventListener('click', () => {
  links.classList.toggle('show-links')

  if (links.classList.contains('show-links')) {
    icon.classList.remove('fa-bars')
    icon.classList.add('fa-times')
  } else {
    icon.classList.remove('fa-times')
    icon.classList.add('fa-bars')
  }
})
