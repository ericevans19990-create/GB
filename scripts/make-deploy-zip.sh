#!/usr/bin/env bash
set -euo pipefail

echo "Building project..."
npm run build

if [ ! -d dist ]; then
  echo "Error: dist/ not found" >&2
  exit 1
fi

echo "Ensuring .htaccess is present in dist/..."
if [ ! -f dist/.htaccess ]; then
  echo "Warning: dist/.htaccess not found — ensure public/.htaccess exists."
fi

echo "Creating dist.zip..."
zip -r dist.zip dist
echo "Created dist.zip (ready to upload to Hostinger)"

exit 0
