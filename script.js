const imageForm = document.getElementById('imageForm');
const promptInput = document.getElementById('promptInput');
const generatedImage = document.getElementById('design-preview');

var urls = ["https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg","https://1000logos.net/facebook-logo/"]

imageForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    // const prompt = promptInput.value;
    // const generatedImageUrl = await generateImage(prompt);
    // generatedImage.src = generatedImageUrl;

    var randomIndex = Math.floor(Math.random() * urls.length);
    var randomURL = urls[randomIndex];
    generatedImage.src = randomURL;

});

async function generateImage(prompt) {
    // Make an API call to the backend to generate the image using the AI model
    // You'll need to implement the backend logic separately and provide the appropriate endpoint URL here
    const response = await fetch('/generate-image', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt })
    });
    const data = await response.json();
    return data.imageUrl;
}

const uploadInput = document.getElementById("upload-input");

uploadInput.addEventListener("change", (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();

    reader.onload = (e) => {
        generatedImage.src = e.target.result;
    };

    reader.readAsDataURL(file);
});