const $faqs = document.querySelectorAll('.faq');

/*
Primero recorro todos los $faqs y a cada uno le agrego un detector de
eventos para escuchar cuando el user haga "click" en algún faq
*/
$faqs.forEach((faq) => {
  // Una vez que ocurre el "click", procedo a recorrer nuevamente los $faqs
  faq.addEventListener('click', () => {
    /*
    Para garantizar que solo exista un faq abierto, con el nuevo recorrido
    voy a ir verificando si el "faq actual (item)" es diferente al "faq" 
    que el user ha habierto con el "click"; entonces, si es que el 
    "faq actual (item)" es diferente al "faq" que abrió el user, lo que hago
    es ir al "faq actual (item)" y removerle el atributo "open"; de esa 
    manera me aseguro de que el atributo "open" solo lo tenga el "faq" que
    abrió el user.
    */
    $faqs.forEach((item) => {
      if (item !== faq) {
        item.removeAttribute('open');
      }
    });
  });
});
