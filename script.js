const inputField = document.getElementById('username');
const saveButton = document.querySelector('.save-btn'); 
const clearButton = document.querySelector('.clear-btn'); 
const displayName = document.getElementById('display-name'); 


function displaySavedName() {
    const savedName = localStorage.getItem('name');
    if (savedName) {
        displayName.textContent = `Hello, ${savedName}!`;
    } else {
        displayName.textContent = ''; 
    }
}

saveButton.addEventListener('click', function() {
    const userName = inputField.value.trim();
    if (userName) {
        localStorage.setItem('name', userName); 
        displaySavedName(); 
        inputField.value = '';
    }
});


clearButton.addEventListener('click', function() {
    localStorage.removeItem('name'); 
    displaySavedName(); 
});


window.addEventListener('load', displaySavedName);
