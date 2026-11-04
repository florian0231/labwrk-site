# LABWRK competence preview — verification status

final result: blocked

## Scope and visual target

Selected visual: Werkbank × Material, approved in the conversation.
Source visual truth path: /workspace/scratch/b6e0aa1e5820/generated_images/exec-b0fb17b3-0bd3-44c6-a57c-2f8b2d727536.png (1024 × 1536 px).
Original repository: florian0231/labwrk-site; isolated branch design/competence-preview.

## Browser evidence and blocker

Cloud Browser attempted http://terminal.local:4173/ after the supported sites-preview service reported running. The browser rendered only:
“upstream connect error or disconnect/reset before headers. reset reason: connection termination”.
The supported service was stopped, valid static preview output and configuration were prepared, then it was restarted once. The same browser error persisted.

Implementation screenshot: unavailable; the application was not rendered.
Viewport: browser default; no valid CSS viewport or image-density measurement for the implementation.
State: initial navigation blocked by preview infrastructure.
Full-view and focused visual comparison: blocked; no implementation capture exists.
Primary interactions: project dialogs, image switching, Escape/focus restoration, anchor navigation, legal/contact links are implemented but unverified in browser.
Console errors: not checked on a rendered application.

## Fidelity surfaces

- Typography: self-hosted Anton for display, existing Inter Tight for navigation, Arial for body; visual wrapping and font loading not browser-verified.
- Spacing/layout: selected hero + competence section retained; project narratives and brand section extend the selected mock. Responsive rules authored, including stacked competence rows below 430 px; not browser-verified.
- Colors: petrol #122321, graphite #202322, chalk #f1ebe1, amber #dca866; contrast and photographic text legibility still need visual verification.
- Images: separate Imagegen photographic hero asset, authentic repository product photographs, unchanged existing cube face textures and CSS rotation. Background is conceptual artwork, not documentary evidence. Image crops and mobile focal position need browser review.
- Copy: describes competence through own products; no commissioned-service offer, prices or marketplace links on the new homepage. Text remains a first editorial draft.

## Completed checks

- node --check labwrk.js: passed.
- git diff --check: passed.
- All homepage local asset/link paths and all project gallery images resolve to existing repository files.
- New homepage contains no eBay/Etsy purchase links.
- Existing product detail/legal pages are retained; no main-branch or live-site update performed.

## Remaining gate

Restore supported preview connectivity, capture desktop and mobile renders, compare hero/competence section to the selected mock, test every project dialog/gallery plus keyboard and contact/legal links, inspect console, fix findings, then mark final result passed.
