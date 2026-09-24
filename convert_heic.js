const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const heicConvert = require('heic-convert');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const unlink = promisify(fs.unlink);

async function convertHeicToJpg() {
  const directory = path.join(__dirname, 'public', 'images');
  const files = await readdir(directory);
  const heicFiles = files.filter(f => f.toLowerCase().endsWith('.heic'));
  
  console.log(`Found ${heicFiles.length} HEIC files.`);
  
  for (const file of heicFiles) {
    const filePath = path.join(directory, file);
    const jpgPath = path.join(directory, file.replace(/\.heic$/i, '.jpg'));
    
    try {
      console.log(`Converting ${file}...`);
      const inputBuffer = await readFile(filePath);
      
      const outputBuffer = await heicConvert({
        buffer: inputBuffer, // the HEIC file buffer
        format: 'JPEG',      // output format
        quality: 0.8         // the jpeg compression quality
      });
      
      await writeFile(jpgPath, outputBuffer);
      console.log(`Saved ${jpgPath}`);
      
      // Delete original HEIC file
      await unlink(filePath);
      console.log(`Deleted ${file}`);
    } catch (e) {
      console.error(`Failed to convert ${file}:`, e);
    }
  }
}

convertHeicToJpg().then(() => console.log('Done!'));
