function showOncePage(idToShow) {
    const sections = document.querySelectorAll('.main-content');
  
    sections.forEach(section => {
      section.style.display = (section.id === idToShow) ? 'block' : 'none';
    });
  }

window.addEventListener('DOMContentLoaded', () => {
    if (!location.pathname.includes('project')) {
        console.log('load home page');
        showOncePage('home');
    }
});
