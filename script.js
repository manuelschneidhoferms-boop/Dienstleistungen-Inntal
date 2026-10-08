const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.textContent = open ? 'Schließen ✕' : 'Menü ☰';
  });
  mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = 'Menü ☰';
  }));
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent('Anfrage über die Webseite – ' + data.get('service'));
    const body = encodeURIComponent(
      'Hallo Dienstleistungen Inntal,\n\n' +
      'ich möchte folgende Leistung anfragen:\n' + data.get('service') + '\n\n' +
      'Name: ' + data.get('name') + '\n' +
      'E-Mail: ' + data.get('email') + '\n' +
      'Telefon: ' + (data.get('phone') || 'Nicht angegeben') + '\n\n' +
      'Nachricht:\n' + data.get('message') + '\n\n' +
      'Viele Grüße'
    );
    const status = document.getElementById('form-status');
    status.textContent = 'Ihr E-Mail-Programm wird geöffnet. Bitte ergänzen Sie die Empfängeradresse, sobald sie feststeht.';
    window.location.href = 'mailto:?subject=' + subject + '&body=' + body;
  });
}
