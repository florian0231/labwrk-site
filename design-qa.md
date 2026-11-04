# Design QA – LABWRK.

final result: blocked

## Source visual truth

Selected image: exec-dc707640-8c2d-4bab-96ed-307aa438287d.png (displayed option 2, Leinen/Aubergine layout). Approved changes are fully retained in DESIGN.md: blue mat; graphite/chalk/raspberry; Barlow Condensed + Inter; dark content; single slope; approved copy; Z3 first; corrected Airbox part 3; no personal section or decorative elements.

## Browser evidence and blocker

- Requested implementation: http://terminal.local:4173/
- Cloud Browser: Chrome cdp, tab 1.
- Navigation timed out, then the actual tab accessibility observation showed: `upstream connect error or disconnect/reset before headers. reset reason: connection termination`.
- Preview service reports running. That is not browser verification.
- Implementation screenshot: unavailable because the route displays the upstream error rather than the website.
- Viewport/source-normalized screenshots, full-view comparison, focused-region comparisons, and browser console/primary interaction checks: blocked. No side-by-side visual comparison or passing QA claimed.

## Checks completed, independently of blocked browser QA

- JavaScript syntax check passed.
- HTML IDs and anchors checked; all local images, gallery alternatives, fonts and legal routes resolve to existing files.
- User-approved headings and project copy matched exactly; personal section, project numbers and decorative tags removed.
- Gallery and motion logic exercised in a Node DOM simulation: all six cupholder model/view combinations; model switch resets to overall view; Z3 default; both Airbox views; pointer translation; reduced-motion reset and suppression. This is not a browser test.
- Real Barlow font widths checked at responsive breakpoints; tablet font/layout adjusted after an initial width issue.
- Fonts self-hosted, including Inter 400 and 500; original OFL license files included.
- CAD orientation corrected using original rim geometry: 320 points match within 0.000051 mm.
- Offline export includes all initial and dynamically selected images and fonts; no runtime CDN requirement.
- Vite parse/build command completed but warned that the classic script is not bundled. The generated dist is not a release artifact and is not deployed. The source remains a buildless GitHub Pages site.

## Required fidelity surfaces

- Fonts/typography: source fonts and casing implemented; browser wrapping and rendering remain unverified.
- Spacing/layout rhythm: responsive source layout implemented; visual comparison blocked.
- Colors/tokens: exact approved neutrals and accent implemented; visual comparison blocked.
- Image quality/fidelity: photographic hero edited with imagegen; both native CAD renders inspected; original cupholder images retained, Z3 first; actual responsive crop remains unverified.
- Copy/content: all approved hero/project strings checked; no personal section.

## Next checks before publication

1. Restore supported cloud-preview route and capture desktop/mobile implementation.
2. Compare selected composition plus approved changes at matched viewports.
3. Test gallery controls, anchors, keyboard focus, pointer motion and reduced-motion preference in the browser; inspect console.
4. Correct any observed P0/P1/P2 issues and capture again.

Live main branch is unchanged. This is an unverified draft, not a passed design handoff.
