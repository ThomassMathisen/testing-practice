export default function analyzeArray(array) {
    const length = array.length;
    let sum = 0;
    let average = 0;
    let min = array[0];
    let max = array[0];

    for (let i = 0; i < length; i+= 1) {
        sum += array[i];
        console.log(sum);
        if (array[i] > max) {
            max = array[i];
        } if (array[i] < min) {
            min = array[i]
        }
    }

    average = sum / length;

    return {
        average,
        min,
        max,
        length
    };
}