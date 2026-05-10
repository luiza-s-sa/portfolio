export default function animaScroll() {  
  const sections = document.querySelectorAll('.js-content')

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show-section');
      };
    });
  }, {
    threshold: 0.5
  });

  sections.forEach(section => {
    observer.observe(section);
  });
}