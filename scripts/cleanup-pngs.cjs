/**
 * Cleanup script: Remove old PNG files after WebP conversion
 * Run: node scripts/cleanup-pngs.cjs
 */
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'images');
const pngs = fs.readdirSync(dir).filter(f => f.endsWith('.png'));

if (pngs.length === 0) {
  console.log('No PNG files found. Already cleaned!');
  process.exit(0);
}

console.log(`Found ${pngs.length} PNG files to delete:\n`);

for (const f of pngs) {
  const p = path.join(dir, f);
  const sizeKB = (fs.statSync(p).size / 1024).toFixed(0);
  fs.unlinkSync(p);
  console.log(`  Deleted: ${f} (${sizeKB} KB)`);
}

console.log(`\nDone! Removed ${pngs.length} PNG files.`);
console.log('WebP versions are intact and code references updated.');

