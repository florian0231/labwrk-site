const projects = {
  cupholder: {
    category: 'FUNKTION & INTEGRATION', title: 'GETRÄNKEHALTER.', model: 'BMW E46',
    images: [['EINGEBAUT', '/products/assets/e46-getraenkehalter-eingebaut.webp', 'Getränkehalter in der BMW E46 Mittelkonsole'], ['BAUTEILE', '/products/assets/e46-getraenkehalter.jpg', 'Grundkörper und zwei herausnehmbare Reduziereinsätze auf der Schneidematte']],
    story: [['DIE AUFGABE', 'Zwei Getränkeplätze in die vorhandene Mittelkonsole integrieren – mit einer Gestaltung, die zum Interieur passt.'], ['DIE KONSTRUKTION', 'Ein gemeinsamer Grundkörper kombiniert zwei Getränkeplätze mit einem Ablagefach. Herausnehmbare Reduziereinsätze ermöglichen unterschiedliche nutzbare Durchmesser.'], ['DAS BAUTEIL', 'Das fertige Set zeigt das Zusammenspiel aus CAD-Geometrie, additiver Fertigung und Einbau im Fahrzeug. Die Einsätze bleiben separat entnehmbar.']]
  },
  covers: {
    category: 'FORM & OBERFLÄCHE', title: 'DOMLAGERABDECKUNG.', model: 'BMW E60 · E61 · E63 · E64',
    images: [['BAUTEILE', '/products/assets/embedded-04db9b3f18a4af37.png', 'LABWRK. Domlagerabdeckungen mit strukturierter Oberfläche'], ['EINGEBAUT', '/products/assets/embedded-4db0bce3bc9649ae.jpg', 'Domlagerabdeckung im Motorraum']],
    story: [['DIE AUFGABE', 'Eine Abdeckung für den Domlagerbereich entwickeln, die sich optisch in den Motorraum einfügt.'], ['DIE GESTALTUNG', 'Eine reduzierte runde Form, eine strukturierte Sichtfläche und der integrierte LABWRK.-Schriftzug prägen das Bauteil.'], ['DAS DETAIL', 'An diesem Projekt werden die Gestaltung von Oberflächen und die Umsetzung einer eigenen Form im 3D-Druck sichtbar.']]
  },
  shifter: {
    category: 'ANPASSUNG & KONSTRUKTION', title: 'SHIFTER-BLENDE.', model: 'BMW E46 · SHORT SHIFTER',
    images: [['EINGEBAUT', '/products/assets/e46-shifter-blende-eingebaut.webp', 'Shifter-Blende um den Short Shifter in der E46 Mittelkonsole'], ['VORDERSEITE', '/products/assets/e46-shifter-blende-vorderseite.webp', 'Vorderseite der strukturierten Blende'], ['RÜCKSEITE', '/products/assets/e46-shifter-blende-rueckseite.webp', 'Rückseite der Blende mit konstruierten Halteclips']],
    story: [['DIE AUFGABE', 'Den Bereich rund um einen nachgerüsteten Short Shifter in der BMW E46 Mittelkonsole gestalten.'], ['DIE KONSTRUKTION', 'Kontur, Ausschnitt und Befestigung müssen zusammenspielen. Der Schalthebel und Teile der Mechanik bleiben sichtbar; der umgebende Bereich wird abgedeckt.'], ['DIE INTEGRATION', 'Die strukturierte Oberfläche nimmt die Optik des Interieurs auf. Die Einbausituation zeigt, wie ein eigenes Bauteil einen vorhandenen Umbau ergänzt.']]
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
    tab.setAttribute('aria-label', `${label}: Projektbild anzeigen`);
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
