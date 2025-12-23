/**
 * Script to configure CORS origins for Sanity project
 * This allows your Next.js app and Studio to access the Sanity API
 */

import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

dotenv.config();

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || '0euo9kc6',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_DEVELOPER_TOKEN,
});

async function configureCORS() {
  console.log('Configuring CORS origins...\n');

  const origins = [
    'http://localhost:3000',  // Next.js app
    'http://localhost:3333',  // Sanity Studio default port
    'https://localhost:3000',
    'https://localhost:3333',
  ];

  try {
    // Note: CORS configuration is typically done through Sanity's web interface
    // or API. For now, we'll provide instructions to the user.

    console.log('To configure CORS origins for your Sanity project:');
    console.log('\n1. Go to: https://www.sanity.io/manage/personal/project/0euo9kc6/api');
    console.log('\n2. Under "CORS Origins", click "Add CORS origin"');
    console.log('\n3. Add these origins:');
    origins.forEach(origin => console.log(`   - ${origin}`));
    console.log('\n4. Make sure "Allow credentials" is checked');
    console.log('\nAlternatively, I can help you add them programmatically if you have the right permissions.');

  } catch (error) {
    console.error('Error:', error.message);
  }
}

configureCORS();
