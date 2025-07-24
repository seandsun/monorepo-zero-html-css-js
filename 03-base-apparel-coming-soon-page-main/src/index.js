const $form = document.getElementById('form');
const $errorIcon = document.getElementById('error-icon');
const $errorMsg = document.getElementById('error-msg');

$form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = e.target[0].value;

  const emailRegex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  const isValid = emailRegex.test(email);

  $errorIcon.classList.toggle('visible', !isValid);
  $errorMsg.classList.toggle('visible', !isValid);

  !isValid
    ? $form.classList.add('border-Red-500', 'border-2')
    : $form.classList.remove('border-Red-500', 'border-2');

  e.target[0].value = '';
});