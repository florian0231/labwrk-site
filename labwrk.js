const cupholders = {
  e36: { image: '/products/assets/e36-getraenkehalter-eingebaut.webp', alt: 'Getränkehalter in der Mittelkonsole des BMW E36', caption: 'E36 · Eingebaut in der Mittelkonsole' },
  e46: { image: '/products/assets/e46-getraenkehalter-eingebaut.webp', alt: 'Getränkehalter mit zwei Einsätzen in der Mittelkonsole des BMW E46', caption: 'E46 · Zwei Getränkeplätze mit herausnehmbaren Einsätzen' },
  z3: { image: '/products/assets/z3-getraenkehalter-bild-1.webp', alt: 'Getränkehalter in der Mittelkonsole eines BMW Z3 mit braunem Leder', caption: 'Z3 · An die Mittelkonsole angepasste Version' }
};
const image = document.getElementById('cupholder-image');
const caption = document.getElementById('cupholder-caption');
const tabs = [...document.querySelectorAll('[data-cupholder]')];
tabs.forEach(button => button.addEventListener('click', () => {
  const project = cupholders[button.dataset.cupholder];
  if (!project) return;
  image.src = project.image;
  image.alt = project.alt;
  caption.textContent = project.caption;
  tabs.forEach(tab => tab.setAttribute('aria-pressed', String(tab === button)));
}));
