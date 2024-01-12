const apiKey = 'YOUR_API_KEY';
const generateButton = document.getElementById('generateButton');
const textInput = document.getElementById('textInput');
const loadingMessage = document.getElementById('loadingMessage');
const outputImage = document.getElementById('outputImage');

generateButton.addEventListener('click', generateImage);

async function generateImage() {
  const prompt = textInput.value;
  
  // Display loading message
  loadingMessage.style.display = 'block';
  outputImage.style.display = 'none';
  
  // Make API call to generate the image
  const response = await fetch('https://api.openai.com/v1/images', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      prompt: prompt,
      // Add any additional parameters or settings required by the API
    })
  });
  
  const result = await response.json();
  
  // Hide loading message and display the generated image
  loadingMessage.style.display = 'none';
  outputImage.style.display = 'block';
  outputImage.src = result.url;
}
