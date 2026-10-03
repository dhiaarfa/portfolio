#!/bin/sh
# Renders page 1 of every PDF in public/freebies/ to a small JPEG preview
# shown on the /freebies cards. Rerun after editing or adding a PDF.
# Needs pdftoppm (poppler-utils).
set -e
cd "$(dirname "$0")/.."
mkdir -p public/images/freebies/previews
for pdf in public/freebies/*.pdf; do
  name=$(basename "$pdf" .pdf)
  pdftoppm -f 1 -l 1 -singlefile -jpeg -jpegopt quality=82 -scale-to-x 360 -scale-to-y -1 "$pdf" "public/images/freebies/previews/$name"
done
