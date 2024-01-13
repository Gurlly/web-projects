let display = document.getElementById('input');
let buttons = document.querySelectorAll('button');

// An indication of whether the equal button is pressed to remove the contents automatically
let equalPress = false; 

// One to Zero
buttons[0].addEventListener('click', () => {
    if(display.textContent == '0' || equalPress === true){
        display.textContent = "";
        equalPress = false;
    }
    display.append('1');
});
buttons[1].addEventListener('click', () => {
    if(display.textContent == '0' || equalPress === true){
        display.textContent = "";
        equalPress = false;
    }
    display.append('2');
});
buttons[2].addEventListener('click', () => {
    if(display.textContent == '0' || equalPress === true){
        display.textContent = "";
        equalPress = false;
    }
    display.append('3');
});
buttons[3].addEventListener('click', () => {
    if(display.textContent == '0' || equalPress === true){
        display.textContent = "";
        equalPress = false;
    }
    display.append('4');
});
buttons[4].addEventListener('click', () => {
    if(display.textContent == '0' || equalPress === true){
        display.textContent = "";
        equalPress = false;
    }
    display.append('5');
});
buttons[5].addEventListener('click', () => {
    if(display.textContent == '0' || equalPress === true){
        display.textContent = "";
        equalPress = false;
    }
    display.append('6');
});
buttons[6].addEventListener('click', () => {
    if(display.textContent == '0' || equalPress === true){
        display.textContent = "";
        equalPress = false;
    }
    display.append('7');
});
buttons[7].addEventListener('click', () => {
    if(display.textContent == '0' || equalPress === true){
        display.textContent = "";
        equalPress = false;
    }
    display.append('8');
});
buttons[8].addEventListener('click', () => {
    if(display.textContent == '0' || equalPress === true){
        display.textContent = "";
        equalPress = false;
    }
    display.append('9');
});
buttons[9].addEventListener('click', () => {
    if(display.textContent == '0' || equalPress === true){
        display.textContent = "";
        equalPress = false;
    }
    display.append('0');
});

// Reset Button (C)
buttons[10].addEventListener('click', () => {
    display.textContent = 0;
});

// Operations
buttons[11].addEventListener('click', () => {
    display.append('+');
});
buttons[12].addEventListener('click', () => {
    display.append('-');
});
buttons[13].addEventListener('click', () => {
    display.append('÷');
});
buttons[14].addEventListener('click', () => {
    display.append('x');
});
buttons[15].addEventListener('click', () => {
    // Replace the multiplication and division symbols to mathematical operations
    let equation = display.value
    .replace('x','*')
    .replace('÷','/');
    
    // Tells that the equal button is pressed
    equalPress = true;

    // To evaluate the mathematical equation automatically
    try {
        display.textContent = eval(equation);
    } catch (e) {
        display.textContent = 'Error';
    }
});

