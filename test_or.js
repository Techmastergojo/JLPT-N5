const OPENROUTER_API_KEY = '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';
const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';

const payload = {
    model: 'google/gemini-2.5-flash:free',
    messages: [{ role: 'user', content: 'Say hello in Japanese' }],
    temperature: 0.7,
    max_tokens: 2048
};

fetch(OPENROUTER_URL, {
    method: 'POST',
    headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + OPENROUTER_API_KEY
    },
    body: JSON.stringify(payload)
})
.then(r => {
    console.log('Status:', r.status);
    return r.json();
})
.then(data => console.log('Response:', JSON.stringify(data, null, 2)))
.catch(err => console.error('Error:', err));
