# LABWRK. portfolio draft

The agreed design is retained in DESIGN.md. This branch implements the selected diagonal composition with a blue workbench, graphite/chalk/raspberry palette, Barlow Condensed/Inter, approved copy, no personal section, and Z3 as the first cupholder image.

The Airbox is rendered from the original Muschel/V04 meshes. Part 3 is corrected from print orientation to assembly orientation; see DESIGN.md.

Gallery model/view controls and subtle mouse-based photo movement are implemented. Touch and reduced-motion preferences disable photo motion. Fonts and source assets are self-hosted.

Browser QA remains **blocked** by the cloud preview upstream connection error. Source/asset checks and DOM-simulated gallery/motion checks passed. Do not merge or publish until visual QA passes. The Vite-generated dist from validation is not a release artifact.

For the self-contained review file:

```sh
python3 scripts/export-preview.py /absolute/path/LABWRK_Vorschau.html
```

Download the HTML and open it in a browser to review. It embeds fonts and all gallery images; legal links lead to existing live pages.
