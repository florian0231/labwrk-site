"""Export the static homepage as one self-contained, offline HTML preview."""
import argparse
import base64
import mimetypes
import re
from pathlib import Path

parser = argparse.ArgumentParser()
parser.add_argument('output', type=Path)
args = parser.parse_args()
root = Path(__file__).resolve().parents[1]

def data_url(path):
    file = root / path.lstrip('/')
    mime = mimetypes.guess_type(str(file))[0] or 'application/octet-stream'
    return 'data:' + mime + ';base64,' + base64.b64encode(file.read_bytes()).decode()

html = (root / 'index.html').read_text()
css = (root / 'labwrk.css').read_text()
script = (root / 'labwrk.js').read_text()
css = re.sub(r"url\('(/[^']+)'\)", lambda m: 'url(' + data_url(m[1]) + ')', css)
script = re.sub(r"(['\"])(/products/assets/[^'\"]+)\1", lambda m: repr(data_url(m[2])), script)
html = html.replace('<link rel="stylesheet" href="/labwrk.css">', '<style>' + css + '</style>')
html = html.replace('<script src="/labwrk.js" defer></script>', '')
html = html.replace('</body>', '<script>' + script + '</script></body>')
html = re.sub(r'<link rel="preload"[^>]+>', '', html)
legal = {'/impressum/', '/datenschutz/', '/agb/'}
html = re.sub(r'(src|href)="(/[^\"]+)"', lambda m: m[1] + '="' + ('https://labwrk.de' + m[2] if m[2] in legal else data_url(m[2])) + '"', html)
assert not re.search(r'(?:src|href)="/(?!/)', html), 'An offline resource was not embedded'
args.output.write_text(html)
print(f'{args.output.resolve()} ({args.output.stat().st_size} bytes)')
