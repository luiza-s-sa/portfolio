export default function scrollSuave() {
  const linksInternos = document.querySelectorAll('.js-header a[href^="#"]')

  function scrollToSection(e) {
    e.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const targetSection = document.querySelector(href);
    targetSection.scrollIntoView({behavior: 'smooth', block: 'start'})
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection)
  });
};