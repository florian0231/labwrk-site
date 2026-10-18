(() => {
 document.querySelectorAll('.lw-product-gallery').forEach(gallery => {
  const image = gallery.querySelector('.lw-gallery-main img');
  const buttons = [...gallery.querySelectorAll('.lw-gallery-thumb')];
  buttons.forEach(button => button.addEventListener('click', () => {
   image.src = button.dataset.image;
   image.alt = button.dataset.alt;
   buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  }));
 });
})();
