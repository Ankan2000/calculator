function countDigits(number) {
    let numString = number.toString();
    let index = numString.indexOf('.');
    if (index !== -1) {
        return numString.slice(index + 1).length;
    } else {
        return 0;
    }
}

function addFloat(num1, num2) {
    let baseTenMultiplier = Math.pow(10, Math.max(countDigits(num1), countDigits(num2)));
    return (num1 * baseTenMultiplier + num2 * baseTenMultiplier)
        / baseTenMultiplier;
}

function subFloat(num1, num2) {
    let baseTenMultiplier = Math.pow(10, Math.max(countDigits(num1), countDigits(num2)));
    return (num1 * baseTenMultiplier - num2 * baseTenMultiplier)
        / baseTenMultiplier;
}

module.exports = { countDigits, addFloat, subFloat };