const $ = (el) => document.getElementById(el);
const $$ = (el) => document.querySelector(el);

const $form = $('form');

const $nameMsgError = $('name-msg-error');
const $nameIconError = $('name-icon-error');
const $nameInput = $$('#form #first-name');

const $lastNameMsgError = $('last-name-msg-error');
const $lastNameIconError = $('last-name-icon-error');
const $lastNameInput = $$('#form #last-name');

const $emailMsgError = $('email-msg-error');
const $emailIconError = $('email-icon-error');
const $emailInput = $$('#form #email');

const $passwordMsgError = $('password-msg-error');
const $passwordIconError = $('password-icon-error');
const $passwordInput = $$('#form #password');

document.addEventListener('DOMContentLoaded', () => {
  $nameInput.addEventListener('input', (e) => {
    validateBorderInput($nameInput);
  });
  $lastNameInput.addEventListener('input', (e) => {
    validateBorderInput($lastNameInput);
  });
  $emailInput.addEventListener('input', (e) => {
    validateBorderInput($emailInput);

    if ($emailInput.classList.contains('placeholder-Red-400')) {
      $emailInput.classList.remove('placeholder-Red-400');
      $emailInput.placeholder = 'Email Address';
    }
  });

  $passwordInput.addEventListener('input', (e) => {
    validateBorderInput($passwordInput);
  });
});

$form.addEventListener('submit', (e) => {
  e.preventDefault();
  /*
  Los "inputs" también se pueden obtener directamente del target
  del for; por ej. el "value" del input "name" lo capturo así:

  const nameInput = e.target[0];
  const nameValue = nameInput.value;

  Pero esa captura sucede después de que se ejecute el evento "submit", y yo
  necesito tener tanto los inputs como los values desde antes para agregar 
  otros detectores de eventos y hacer otras validaciones, por lo tanto, 
  obtengo esos inputs fuera de este evento.
  */
  const nameValue = $nameInput.value;
  const lastNameValue = $lastNameInput.value;
  const emailValue = $emailInput.value;
  const passwordValue = $passwordInput.value;

  const emailRegex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

  // name
  validateInput(
    nameValue.trim() === '',
    $nameMsgError,
    $nameIconError,
    $nameInput
  );

  // last name
  validateInput(
    lastNameValue.trim() === '',
    $lastNameMsgError,
    $lastNameIconError,
    $lastNameInput
  );

  // email
  const isValidEmail = emailRegex.test(emailValue);

  if (!isValidEmail) {
    validateInput(!isValidEmail, $emailMsgError, $emailIconError, $emailInput);
    $emailInput.placeholder = 'email@example/com';
    $emailInput.classList.add('placeholder-Red-400');
  } else {
    validateInput(!isValidEmail, $emailMsgError, $emailIconError, $emailInput);
  }

  // password
  const isValidPass = passwordRegex.test(passwordValue);

  validateInput(
    !isValidPass,
    $passwordMsgError,
    $passwordIconError,
    $passwordInput
  );
});

function validateBorderInput(input) {
  if (input.value.length > 0) {
    input.classList.add('border-2', 'border-Gray-900');
  } else {
    input.classList.remove('border-2', 'border-Gray-900');
  }
}

function validateInput(condition, msgError, iconError, input) {
  console.log(condition);
  if (condition) {
    msgError.classList.remove('hidden');
    iconError.classList.remove('hidden');
    input.classList.add('border-2', 'border-Red-400');
  } else {
    msgError.classList.add('hidden');
    iconError.classList.add('hidden');
    input.classList.remove('border-2', 'border-Red-400');
  }
}
