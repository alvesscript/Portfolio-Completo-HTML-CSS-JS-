let email = document.getElementById('email');
let form = document.querySelector('form');
let text;

form.addEventListener('submit', (e) => {
  if (email.value == '') {
  }
  console.log(email.value);
  e.proventDefault();
});