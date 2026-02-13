import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public');
const imgDir = path.join(publicDir, 'img');

// Helper to convert file
async function convertToWebp(filePath) {
    const ext = path.extname(filePath);
    if (!['.jpg', '.jpeg', '.png'].includes(ext.toLowerCase())) return;

    const newFilePath = filePath.replace(ext, '.webp');

    // Skip if webp already exists (optional, but good for re-runs)
    // if (fs.existsSync(newFilePath)) return;

    try {
        console.log(`Converting: ${path.basename(filePath)}...`);
        await sharp(filePath)
            .webp({ quality: 80 }) // 80% quality is usually a good balance
            .toFile(newFilePath);

        // Calculate savings
        const originalSize = fs.statSync(filePath).size;
        const newSize = fs.statSync(newFilePath).size;
        const savings = ((originalSize - newSize) / originalSize * 100).toFixed(2);

        console.log(`✅ Saved ${savings}%: ${path.basename(newFilePath)} (${(newSize / 1024 / 1024).toFixed(2)} MB)`);

        // Setup for deletion (commented out for safety initially, can be enabled)
        // fs.unlinkSync(filePath); 
    } catch (err) {
        console.error(`❌ Error converting ${path.basename(filePath)}:`, err);
    }
}

// Walk through directory
async function processDirectory(directory) {
    const files = fs.readdirSync(directory);
    for (const file of files) {
        const fullPath = path.join(directory, file);
        if (fs.statSync(fullPath).isDirectory()) {
            await processDirectory(fullPath);
        } else {
            await convertToWebp(fullPath);
        }
    }
}

console.log('Starting Image Optimization...');
await processDirectory(publicDir);
console.log('Optimization Complete! 🚀');
