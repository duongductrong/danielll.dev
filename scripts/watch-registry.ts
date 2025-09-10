#!/usr/bin/env tsx

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const BLOCKS_DIR = path.join(process.cwd(), 'src/features/craft/blocks');

console.log('👀 Watching for changes in craft blocks...');
console.log('📁 Watching directory:', BLOCKS_DIR);

let isGenerating = false;

const generateRegistry = () => {
  if (isGenerating) return;
  
  isGenerating = true;
  console.log('\n🔄 Changes detected, regenerating registry...');
  
  try {
    execSync('npm run generate:registry', { stdio: 'inherit' });
    console.log('✅ Registry updated successfully\n');
  } catch (error) {
    console.error('❌ Failed to generate registry:', error);
  } finally {
    isGenerating = false;
  }
};

// Initial generation
generateRegistry();

// Watch for changes
if (fs.existsSync(BLOCKS_DIR)) {
  fs.watch(BLOCKS_DIR, { recursive: true }, (eventType, filename) => {
    if (filename && filename.endsWith('.tsx')) {
      console.log(`📝 File ${eventType}: ${filename}`);
      setTimeout(generateRegistry, 100); // Debounce
    }
  });
  
  console.log('✅ Watching started. Press Ctrl+C to stop.\n');
} else {
  console.error('❌ Blocks directory not found:', BLOCKS_DIR);
  process.exit(1);
}
