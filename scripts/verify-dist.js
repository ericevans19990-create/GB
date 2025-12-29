const fs = require('fs');
const path = require('path');

const root = process.cwd();
const dist = path.join(root, 'dist');

if (!fs.existsSync(dist)) {
  console.error('Error: dist/ not found. Run `npm run build` first.');
  process.exit(1);
}

const index = path.join(dist, 'index.html');
if (!fs.existsSync(index)) {
  console.error('Error: dist/index.html missing.');
  process.exit(1);
}

const ht = path.join(dist, '.htaccess');
if (!fs.existsSync(ht)) {
  console.warn('Warning: dist/.htaccess missing — SPA fallback may not work on Hostinger.');
} else {
  console.log('OK: dist/.htaccess present');
}

console.log('dist looks good. You can now zip and upload dist to Hostinger.');
process.exit(0);
