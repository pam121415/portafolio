document.addEventListener('DOMContentLoaded', function() {
  // Lógica para la galería y el modal
  const images = document.querySelectorAll('#trabajos-gallery img');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const closeBtn = document.getElementById('close-btn');

  images.forEach(function(image) {
    image.addEventListener('click', function() {
      modal.style.display = 'flex';
      modalImg.src = image.src;
    });
  });

  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });


});


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registrado con éxito:', registration);
      })
      .catch((error) => {
        console.log('Error al registrar el Service Worker:', error);
      });
  });
}

  


  




  