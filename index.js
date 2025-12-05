// Function 1: calculateTax
function calculateTax(amount) {
    return amount * 0.10;
}

// Function 2: convertToUpperCase
function convertToUpperCase(text) {
    return text.toUpperCase();
}

// Function 3: findMaximum
function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

// Function 4: isPalindrome
function isPalindrome(word) {
    // Convert to lowercase to ensure case-insensitivity
    const cleanWord = word.toLowerCase();
    // Split into characters, reverse the array, and join back to a string
    const reversedWord = cleanWord.split('').reverse().join('');
    return cleanWord === reversedWord;
}

// Function 5: calculateDiscountedPrice
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountAmount = originalPrice * (discountPercentage / 100);
    return originalPrice - discountAmount;
}

// Export functions for testing
module.exports = {
    calculateTax,
    convertToUpperCase,
    findMaximum,
    isPalindrome,
    calculateDiscountedPrice
};