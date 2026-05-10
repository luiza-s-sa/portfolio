export default function hideScrollIndicator() {
  const indicator = document.querySelector('.scroll-indicator');

  function handleScroll() {
    if (window.scrollY > 50) {
      indicator.classList.add('hidden')
    } else {
      indicator.classList.remove('hidden')
    }
  }

  window.addEventListener('scroll', handleScroll)
}