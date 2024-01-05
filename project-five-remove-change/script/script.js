let removeParagraph = document.getElementById('paragraph-to-remove');
let backgroundChange = document.getElementById('change-to-blue');

let removeButton = document.getElementById('remove');
let backgroundButton = document.getElementById('add-background');

let hidden = false;

// Removing and Adding the Paragraph
removeButton.addEventListener('click', () => {
    if (hidden == false) {
        removeParagraph.style.display = 'none';
        hidden = true;
        removeButton.textContent = "Add Paragraph";
    } 
    else {
        removeParagraph.style.display = 'block';
        hidden = false;
        removeButton.textContent = "Remove Paragraph";
    }
});

let colorAdd = false;

// Removing and Adding blue background-color 
backgroundButton.addEventListener('click', () => {
    backgroundChange.classList.toggle('blue-bg');
    if (colorAdd == false) {
        backgroundButton.textContent = "Remove Blue Background Color";
        colorAdd = true;
    }
    else {
        backgroundButton.textContent = "Add Blue Background Color";
        colorAdd = false;
    }
});