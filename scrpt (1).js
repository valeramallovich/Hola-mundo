const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('#main-nav ul');


navToggle && navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  mainNav.classList.toggle('show');
});


document.getElementById('year').textContent = new Date().getFullYear();


function handleSubmit(e) {
  e.preventDefault();
  const status = document.getElementById('status');
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();


  if (!nombre || !email || !mensaje) {
    status.textContent = 'Completá todos los campos.';
    return false;
  }


  status.textContent = 'Enviando...';
  setTimeout(() => {
    status.textContent = 'Gracias. Tu mensaje fue enviado (simulado).';
    document.getElementById('contactForm').reset();
  }, 800);


  return false;
}


