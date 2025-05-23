document.querySelectorAll('#portfolio img').forEach(img => {
    img.addEventListener('contextmenu', e => e.preventDefault());
  });
  
  // Seleciona o botão do toggle, o elemento <html> e o ícone dentro do botão
  const toggleBtn = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;
  const icon = toggleBtn.querySelector('i');
  
  // Função para alternar o tema e trocar o ícone
  function toggleTheme() {
    if (htmlElement.classList.contains('dark')) {
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    } else {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    }
  }
  
  // Aplica o tema salvo e ajusta o ícone ao carregar a página
  function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      htmlElement.classList.add('dark');
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      htmlElement.classList.remove('dark');
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  }
  
  // Event listener no botão
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleTheme);
  }
  
  // Aplica o tema ao carregar o DOM
  window.addEventListener('DOMContentLoaded', applySavedTheme);
  