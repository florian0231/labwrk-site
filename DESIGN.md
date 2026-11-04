# LABWRK. – abgestimmter Entwurf

Stand: 4. November 2026. Entwurf auf `design/competence-preview`; keine Veröffentlichung auf main.

## Verbindliche Entscheidungen

- Portfolio eigener Produkte und Kompetenzen, kein Shop und kein BMW-exklusiver Hauptauftritt.
- Graphit #26282A und Kreide #EFEAE1 als neutrale Farben; Himbeerrot #E83266 als einzige Akzentfarbe der Oberfläche. Produktbilder behalten natürliche Farben.
- Bildaufbau des zweiten gezeigten Entwurfs (Leinen/Aubergine): Werkbank und Würfel, schräge helle Fläche links. Blaue statt grüner Schneidematte; Würfel mit drei beschrifteten Flächen. Keine Kopfzeilentexte links/rechts.
- Überwiegend dunkle Inhalte; genau ein schräger Übergang nach der Landingpage. Keine Projektnummern, Zierlinien, Badges, Tags oder zusätzlichen Schmuckelemente.
- Barlow Condensed SemiBold 600 für Überschriften, Inter 400/500 für Fließtext und Bedienelemente. Normale Groß-/Kleinschreibung.
- Haupttitel: „Eigene Produkte. Selbst entwickelt.“
- Untertitel: „Eigene Konstruktionen – vom ersten Entwurf bis zum fertigen Teil.“
- Hauptaktion als gefüllter Button „Projekte ansehen“, weitere Links unterstrichen.
- Große Produktbilder und zwei kurze Sätze pro Projekt. Zuerst Gesamtansicht, weitere Bilder als Details. Z3-Einbaufoto ist Standardfoto der Getränkehalter.
- Airbox: „Dreiteilige Airbox mit bauchigem Gehäuse und abnehmbaren Haltern. Das Projekt ist noch in der Entwicklung.“
- Getränkehalter: „Getränkehalter für die Mittelkonsole. Entwickelt für Z3, E36 und E46.“
- Persönlicher Abschnitt „Über LABWRK.“ entfällt vollständig.
- Dezente Mausbewegung des Hintergrundfotos; auf Touchgeräten und bei reduzierter Bewegung deaktiviert. Keine separate Würfel-Overlay-Animation.
- Kompakter Abschluss mit E-Mail und Instagram als Textlinks; rechtliche Links bleiben erreichbar.

## Airbox-Quelle und Korrektur

Eigene Muschel-V02-Montage plus V04-Einlass, direkt aus CAD/STL gerendert. Keine durch Bildgenerierung erfundene Produktgeometrie.

- LABWRK_E36_Muschel_V02_Montage.3mf: libfile_e0800eb20a908191ad5b92d32a1b3486
- 03_Einlass_Bauch_Trichter_V04.stl: libfile_7659fae794948191939f16d1eae35658
- Teil 3 lag zuvor in Druckorientierung. Korrekte Montage in mm: `(x-82.087097, -y+83.773003, -z-115.0)`.
- Das entspricht einer Drehung um 180° um X mit anschließender Translation. Alle 320 ursprünglichen Anschlussrandpunkte stimmen innerhalb von 0,000051 mm überein. Der Einlass zeigt nach unten; Geometrie bleibt unverformt.

## Prüfung

Sichtprüfung im Cloud-Browser blockiert, siehe design-qa.md. Vor Veröffentlichung visuell auf Desktop und Handy prüfen. Die Selbstenthaltene HTML-Vorschau wird aus den Quelldateien erzeugt; Schriften und Galerieansichten sind eingebettet.
