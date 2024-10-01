function sum(a=0, b=0) {
    return a + b;
};

function substract(a=0, b=0) {
    return a - b;
};

function multiply(a=0, b=0) {
    return Number.parseFloat((a * b).toFixed(2));
};

function divide(a=0, b=0) {
    if (b !== 0) {
        return Number.parseFloat((a / b).toFixed(2));
    } else {
        throw new Error('Tu ne peux pas diviser par 0 !')
    }
    
}