# LABWRK — construction and 3D printing portfolio draft

The homepage introduces LABWRK generally through construction, prototypes and FDM printing. The two chosen project families are the E36 airbox (development project) and cupholders (E36, E46, Z3). The about copy uses first person without a name introduction.

Run npm install, then npm run dev -- --host 0.0.0.0 --port 4173 --strictPort. Public output remains ordinary static HTML/CSS/JS and needs no framework runtime on GitHub Pages.

## Images and interaction

- Hero: revised generated workbench photograph with the small LAB/WRK cube physically integrated in the scene; no separate animated overlay.
- Airbox: studio rendering of the actual supplied V2 STL components, shown separately and explicitly labelled as a development/CAD state. It does not assert approved fit or a finished product.
- Cupholders: existing repository installation images; E36/E46/Z3 buttons change image, alt text and caption.
- Both projects have native expandable details. No shop or purchase flow is linked from this homepage.
- Display font Anton is self-hosted with its license.

## Export

python3 scripts/export-preview.py /absolute/output/LABWRK_Vorschau.html creates a self-contained offline preview.

## Verification

JavaScript syntax, asset/link paths, headline font measurements at widths 320–1920 and diff checks pass. Managed Cloud Browser preview still returns an upstream connection error, so browser and interaction verification remain blocked. See design-qa.md. Main has not been updated.
