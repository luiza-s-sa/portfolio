export default function copyEmail() {
  const copyButton = document.querySelector('.copy-email')
  const tooltip = document.querySelector('.tooltip')

  function handleCopyEmail() {
    navigator.clipboard.writeText('luizasa.dev@gmail.com');
    tooltip.classList.add('show');
    setTimeout(() => {
      tooltip.classList.remove('show');
    }, 1500);
  }
 
  copyButton.addEventListener('click', handleCopyEmail)
}

