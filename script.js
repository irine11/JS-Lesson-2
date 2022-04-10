//  2 exercise
function sum(...args) {
    let numberSum = 0;
    for (let item of args) {
        numberSum = numberSum + item

    }

    console.log(numberSum);
}
sum(10, 50, 6, 7, 8, 11, 6, 3, 9);