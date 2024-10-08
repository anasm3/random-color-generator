const colorContainer = document.querySelector('.color-container');
const generateButton = document.querySelector('#generate-button');
const loader = document.querySelector('.loader');

function generateRandomColors() {
    colorContainer.innerHTML = ''; 
    loader.style.display = 'block';
    
    fetch('https://random-flat-colors.vercel.app/api/random?count=20')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            data.colors.forEach(color => {
                const colorBox = document.createElement('div');
                colorBox.classList.add('color-box');
                colorBox.style.background = color;
                colorBox.textContent = color;
                colorContainer.appendChild(colorBox);
            });
            loader.style.display = 'none'; 
        })
        .catch(error => {
            console.error('Error:', error);
            loader.style.display = 'none';
        });
}

generateRandomColors();
generateButton.addEventListener('click', generateRandomColors);
