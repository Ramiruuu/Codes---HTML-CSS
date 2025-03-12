const apiKey = 'YOUR_API_KEY'; // Replace with your translation API key
const apiUrl = 'https://api.example.com/translate'; // Replace with your translation API URL

document.getElementById('translateButton').addEventListener('click', translateText);

function translateText() {
    const textToTranslate = document.getElementById('textInput').value;
    const targetLanguage = document.getElementById('languageSelect').value;

    if (!textToTranslate || !targetLanguage) {
        alert('Please enter text and select a language to translate.');
        return;
    }

    fetch(`${apiUrl}?text=${encodeURIComponent(textToTranslate)}&target=${targetLanguage}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${apiKey}`
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('translatedText').innerText = data.translatedText;
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while translating the text.');
    });
}