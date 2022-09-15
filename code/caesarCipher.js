function isLetter(char) {
    return (/[a-zA-Z]/).test(char);
  }

export default function caesarCipher(string, n) {
    let array = string.split('');
    let result = [];

    for (let i = 0; i < array.length; i+= 1) {
        if (isLetter(array[i])) {
            let charCode = array[i].charCodeAt(0);
            let shiftedCode = (((charCode - 97 + n) % 26) + 97);
            result.push(String.fromCharCode(shiftedCode))
        } else {
            result.push(array[i]);
        }
    }
    return result.join('');
}