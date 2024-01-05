const input = document.getElementById('bio-input'); // Input field
const counter = document.getElementById('counter'); // Length counter

input.addEventListener('input', (event) => {

    // Updates the counter text content automatically
    counter.textContent = event.target.value.length; 

    // Tells when the maximum length is being reached.
    if (event.target.value.length >= 50) { 
        counter.style.color = '#eebb8a';
        input.style.backgroundColor = '#eebb8a';
    }

    // Tells when the user hasn't reached the maximum length yet.
    else {
        counter.style.color = '#201f1c';
        input.style.backgroundColor = '#fcf4c0';
    }
    
});

