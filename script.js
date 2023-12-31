// Adding an event listener to the convert button
document.getElementById('convert-btn').addEventListener('click', function() {
    // Retrieving the value entered in the input field
    var number = document.getElementById('number').value;
    // Selecting the output div where the result will be displayed
    var output = document.getElementById('output');

    // Checking if the input field is empty
    if (number === '') {
        output.textContent = 'Please enter a valid number';
    }
    // Checking if the entered number is less than 1
    else if (number < 1) {
        output.textContent = 'Please enter a number greater than or equal to 1';
    }
    // Checking if the entered number is 4000 or more
    else if (number >= 4000) {
        output.textContent = 'Please enter a number less than or equal to 3999';
    }
    // If the input is valid, converting the number to a Roman numeral
    else {
        output.textContent = convertToRoman(number);
    }
});

// Function to convert a number to a Roman numeral
function convertToRoman(num) {
    // An object mapping Roman numerals to their corresponding integer values
    var roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    // A string to store the resultant Roman numeral
    var str = '';

    // Iterating over the keys (Roman numerals) in the roman object
    for (var i of Object.keys(roman)) {
        // Calculating the quotient for the current Roman numeral
        var q = Math.floor(num / roman[i]);
        // Reducing the number by the value represented by the Roman numerals added so far
        num -= q * roman[i];
        // Adding the Roman numeral to the string q times
        str += i.repeat(q);
    }

    // Returning the resultant Roman numeral
    return str;
}
