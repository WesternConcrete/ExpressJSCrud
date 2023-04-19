function sum(a, b) {
    return a + b;
}

function div (a, b){
    return a / b;
  }

function containsNumbers(text){
    for (let i = 0; i < text.length; i++) {
        if (!isNaN(parseInt(text.charAt(i))))
        return true;
    }
    return false;
}

exports.sum = sum;
exports.div = div;
exports.containsNumbers = containsNumbers;