const projects = {
  cupholder: {
    category: 'Mittelkonsole', title: 'Getränkehalter', model: 'BMW E46',
    images: [['Im Auto', '/products/assets/e46-getraenkehalter-eingebaut.webp', 'Getränkehalter in der BMW E46 Mittelkonsole'], ['Die Einzelteile', '/products/assets/e46-getraenkehalter.jpg', 'Grundkörper und zwei herausnehmbare Einsätze auf der Schneidematte']],
    story: [
      ['Platz für zwei Getränke', 'Der Halter sitzt in der Mittelkonsole des E46. Vorne sind zwei Getränkeplätze, dahinter bleibt ein kleines Ablagefach.'],
      ['Herausnehmbare Einsätze', 'Die beiden Ringe verkleinern die Öffnungen für schmalere Becher. Brauchst du mehr Platz, kannst du sie einfach herausnehmen.'],
      ['An die Konsole angepasst', 'Die Außenkontur und die Aufteilung habe ich für die E46-Mittelkonsole konstruiert. Auf den Fotos siehst du das fertige Set und den Halter im Auto.']
    ]
  },
  covers: {
    category: 'Motorraum', title: 'Domlagerabdeckungen', model: 'BMW E60 · E61 · E63 · E64',
    images: [['Die Abdeckungen', '/products/assets/embedded-04db9b3f18a4af37.png', 'Zwei LABWRK. Domlagerabdeckungen'], ['Im Motorraum', '/products/assets/embedded-4db0bce3bc9649ae.jpg', 'Domlagerabdeckung im Motorraum']],
    story: [
      ['Für den Domlagerbereich', 'Diese Abdeckungen habe ich für den BMW E60, E61, E63 und E64 entwickelt. Sie verdecken den oberen Bereich der Domlager.'],
      ['Die Oberfläche', 'Die Außenseite ist rund und strukturiert. Den LABWRK.-Schriftzug habe ich direkt in das Modell eingearbeitet, sodass er mitgedruckt wird.']
    ]
  },
  shifter: {
    category: 'Umbau', title: 'Shifter-Blende', model: 'BMW E46 · Short Shifter',
    images: [['Im Auto', '/products/assets/e46-shifter-blende-eingebaut.webp', 'Shifter-Blende in der E46 Mittelkonsole'], ['Vorderseite', '/products/assets/e46-shifter-blende-vorderseite.webp', 'Vorderseite der Blende'], ['Rückseite', '/products/assets/e46-shifter-blende-rueckseite.webp', 'Rückseite der Blende mit Halteclips']],
    story: [
      ['Eine Blende für den Umbau', 'Die Blende deckt den Bereich um einen nachgerüsteten Short Shifter im E46 ab. Der Schalthebel und ein Teil der Mechanik bleiben sichtbar.'],
      ['Ausschnitt und Befestigung', 'Bei der Konstruktion geht es vor allem um die Außenkontur, den Ausschnitt und die Halteclips. Der Schalthebel muss sich dabei über den ganzen Schaltweg frei bewegen können.'],
      ['So sitzt sie im Auto', 'Die Bilder zeigen die Blende einzeln und eingebaut. Ob sie zu einem Umbau passt, hängt von der Mittelkonsole und dem verwendeten Shifter ab.']
    ]
  }
};
const dialog = document.getElementById('project-dialog');
const image = document.getElementById('dialog-image');
const tabs = document.getElementById('gallery-tabs');
let opener;
function showImage(project, index) {
  const [, src, alt] = project.images[index];
  image.src = src; image.alt = alt;
  tabs.querySelectorAll('button').forEach((button, i) => button.setAttribute('aria-pressed', String(index === i)));
}
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const project = projects[button.dataset.project]; if (!project) return;
  opener = button;
  document.getElementById('dialog-category').textContent = project.category;
  document.getElementById('dialog-title').textContent = project.title;
  document.getElementById('dialog-model').textContent = project.model;
  tabs.replaceChildren(...project.images.map(([label], index) => {
    const tab = document.createElement('button'); tab.type = 'button'; tab.textContent = label;
    tab.setAttribute('aria-label', `${label}: Bild anzeigen`);
    tab.addEventListener('click', () => showImage(project, index)); return tab;
  }));
  document.getElementById('dialog-story').replaceChildren(...project.story.map(([title, text]) => {
    const block = document.createElement('section'); block.className = 'story-block';
    const heading = document.createElement('h3'); heading.textContent = title;
    const copy = document.createElement('p'); copy.textContent = text; block.append(heading, copy); return block;
  }));
  showImage(project, 0); dialog.showModal(); dialog.scrollTop = 0;
  document.body.classList.add('dialog-open');
}));
document.getElementById('dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
dialog.addEventListener('close', () => { document.body.classList.remove('dialog-open'); opener?.focus({preventScroll:true}); });
