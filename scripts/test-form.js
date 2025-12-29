// Simple test script to POST a sample payload to /api/form
// Usage: node scripts/test-form.js [baseUrl]
// Defaults to http://localhost:3001

const base = process.argv[2] || 'http://localhost:3001';
const url = new URL('/api/form', base).toString();

const payload = {
  formId: 'test-form',
  data: {
    name: 'Test User',
    email: 'test@example.com',
    message: 'Ceci est un test de soumission de formulaire.'
  }
};

async function run() {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const json = await res.json();
    console.log('Response:', json);
  } catch (err) {
    console.error('Error sending test form:', err);
    process.exit(1);
  }
}

run();
