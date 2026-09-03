/**
 * Compress brand images and convert Collection vial PNGs → WebP.
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = path.join(__dirname, "..", "public");

async function compressRaster(file, width, quality) {
  if (!fs.existsSync(file)) return;
  const before = fs.statSync(file).size;
  const ext = path.extname(file).toLowerCase();
  const tmp = `${file}.tmp`;
  let pipeline = sharp(file)
    .rotate()
    .resize({
      width,
      height: width,
      fit: "inside",
      withoutEnlargement: true,
    });
  if (ext === ".png") {
    pipeline = pipeline.png({ quality, compressionLevel: 9 });
  } else {
    pipeline = pipeline.jpeg({ quality, mozjpeg: true });
  }
  await pipeline.toFile(tmp);
  const after = fs.statSync(tmp).size;
  if (after < before) {
    fs.renameSync(tmp, file);
    console.log(
      "ok",
      path.relative(root, file),
      `${Math.round(before / 1024)}KB → ${Math.round(after / 1024)}KB`
    );
  } else {
    fs.unlinkSync(tmp);
    console.log("keep", path.relative(root, file));
  }
}

async function pngToWebp(pngPath) {
  if (!fs.existsSync(pngPath)) return;
  const webpPath = pngPath.replace(/\.png$/i, ".webp");
  await sharp(pngPath)
    .rotate()
    .resize({ width: 900, height: 900, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(webpPath);
  fs.unlinkSync(pngPath);
  console.log(
    "webp",
    path.relative(root, webpPath),
    `${Math.round(fs.statSync(webpPath).size / 1024)}KB`
  );
}

async function run() {
  const productsDir = path.join(root, "products-ts");
  if (fs.existsSync(productsDir)) {
    for (const f of fs.readdirSync(productsDir)) {
      if (f.toLowerCase().endsWith(".png")) {
        await pngToWebp(path.join(productsDir, f));
      }
    }
  }

  await compressRaster(path.join(root, "brand", "kit-open.jpg"), 1400, 78);
  await compressRaster(path.join(root, "brand", "hero.jpg"), 1920, 78);
  await compressRaster(path.join(root, "brand", "hero-editorial.jpg"), 1920, 76);
  await compressRaster(path.join(root, "brand", "og.jpg"), 1200, 80);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
