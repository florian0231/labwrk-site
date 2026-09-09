from __future__ import annotations

import base64
import hashlib
import re
from pathlib import Path

SOURCE = Path("products/legacy.html")
ASSET_DIR = Path("products/assets")

MIME_EXTENSIONS = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/jpg": "jpg",
    "image/webp": "webp",
    "image/gif": "gif",
    "image/avif": "avif",
    "image/svg+xml": "svg",
    "image/x-icon": "ico",
    "image/vnd.microsoft.icon": "ico",
}

# Matches embedded base64 image data URIs in HTML/CSS without touching
# any other data URI types.
PATTERN = re.compile(
    r"data:(image/[A-Za-z0-9.+-]+)(?:;charset=[^;,]+)?;base64,([A-Za-z0-9+/=\r\n]+)",
    re.IGNORECASE,
)


def extension_for(mime: str) -> str:
    mime = mime.lower()
    if mime in MIME_EXTENSIONS:
        return MIME_EXTENSIONS[mime]
    return mime.split("/", 1)[-1].replace("+xml", "").replace(".", "-")


def main() -> None:
    html = SOURCE.read_text(encoding="utf-8")
    original_size = len(html.encode("utf-8"))
    ASSET_DIR.mkdir(parents=True, exist_ok=True)

    written: dict[str, Path] = {}
    extracted_occurrences = 0

    def replace(match: re.Match[str]) -> str:
        nonlocal extracted_occurrences
        mime = match.group(1).lower()
        encoded = re.sub(r"\s+", "", match.group(2))
        payload = base64.b64decode(encoded, validate=False)
        digest = hashlib.sha256(payload).hexdigest()[:16]
        ext = extension_for(mime)
        filename = f"embedded-{digest}.{ext}"
        output = ASSET_DIR / filename

        if digest not in written:
            if not output.exists() or output.read_bytes() != payload:
                output.write_bytes(payload)
            written[digest] = output

        extracted_occurrences += 1
        # legacy.html is served/fetched from /products/, so this remains a
        # stable relative URL both when opened directly and via the loader.
        return f"assets/{filename}"

    optimized, replacements = PATTERN.subn(replace, html)

    if replacements == 0:
        print("No embedded base64 image data URIs found; nothing to change.")
        return

    remaining = len(PATTERN.findall(optimized))
    if remaining:
        raise RuntimeError(f"Optimization incomplete: {remaining} embedded images remain")

    SOURCE.write_text(optimized, encoding="utf-8")
    new_size = len(optimized.encode("utf-8"))

    print(f"Extracted occurrences: {extracted_occurrences}")
    print(f"Unique image assets: {len(written)}")
    print(f"HTML size before: {original_size:,} bytes")
    print(f"HTML size after:  {new_size:,} bytes")
    print(f"HTML reduction:   {original_size - new_size:,} bytes")
    for path in sorted(written.values()):
        print(f"asset: {path} ({path.stat().st_size:,} bytes)")


if __name__ == "__main__":
    main()
