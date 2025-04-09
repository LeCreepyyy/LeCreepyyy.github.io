function loadPartial(html_url) {
    fetch(html_url)
        .then(response => response.text())
        .then(html => {
            const elementHtml = document.getElementById('main-content');
            if (elementHtml) {
                elementHtml.innerHTML = html;
            } else {
                console.error(`Element can't be loaded. (Url: ${html_url})`);
            }
        })
        .catch(error => {
            console.error(`Html can't be fetch. (Url: ${html_url})`);
        });
}

window.addEventListener('DOMContentLoaded', () => {
    if (!location.pathname.includes('project')) {
      loadPartial('partials/home.html');
    }
  });
