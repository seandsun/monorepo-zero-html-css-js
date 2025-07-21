const $submitBtn = document.getElementById('submit-btn');
const $ratingStart = document.getElementById('rating-start');
const $ratingThankYou = document.getElementById('rating-thank-you');
const $scoreBtn = document.querySelectorAll('.circle');
const $score = document.getElementById('score');

$scoreBtn.forEach((button) => {
  button.addEventListener('click', (e) => {
    // Resetear estilos
    $scoreBtn.forEach((button) => {
      button.classList.remove('bg-White');
      button.classList.remove('text-Grey-950');
    });
    // Cambiar estilos y valor del score
    button.classList.add('bg-White');
    button.classList.add('text-Grey-950');
    $score.innerHTML = e.target.innerText;

    // Permitir hacer submit
    $submitBtn.addEventListener('click', () => {
      $ratingStart.classList.add('hidden');
      $ratingThankYou.classList.remove('hidden');
    });
  });
});
