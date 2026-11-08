document.addEventListener('DOMContentLoaded', () => {
    const btnTheme = document.getElementById('btn-theme');
    const htmlRoot = document.getElementById('html-root');
    
    if (btnTheme && htmlRoot) {
        btnTheme.addEventListener('click', () => {
            const currentTheme = htmlRoot.getAttribute('data-bs-theme');
            
            if (currentTheme === 'light') {
                htmlRoot.setAttribute('data-bs-theme', 'dark');
                btnTheme.textContent = 'Modo Claro';
            } else {
                htmlRoot.setAttribute('data-bs-theme', 'light');
                btnTheme.textContent = 'Modo Oscuro';
            }
        });
    }
});