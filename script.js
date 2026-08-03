
const display = document.getElementById('result');

// Step 4 & 6: Handle button clicks & update display in real-time
function appendValue(value) {
    // Basic validation: Prevent multiple consecutive operators
    const lastChar = display.value.slice(-1);
    const operators = ['+', '-', '*', '/'];
    
    if (operators.includes(value) && operators.includes(lastChar)) {
        return; // Do nothing if two operators are pressed back-to-back
    }
    
    display.value += value;
}

// Clear Button Feature
function clearDisplay() {
    display.value = '';
}

// Delete Button Feature
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Step 5 & 7: Perform mathematical calculations & add error handling
function calculate() {
    try {
        // If display is empty, do nothing
        if (display.value === '') return;

        // Evaluate the string expression safely
        // (Function replacement for eval() is used here for standard best-practice)
        const result = Function(`"use strict"; return (${display.value})`)();
        
        // Check for division by zero or invalid calculations
        if (result === Infinity || isNaN(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }
    } catch (error) {
        // Fallback error handling if user types syntax errors
        display.value = "Error";
    }
}