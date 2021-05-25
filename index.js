function writeCards(array, event) {

    const thanksArray = [];

    for (let i=0; i < array.length; i++) {
        thanksArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }

    return thanksArray;
}

function countDown(number) {
    let i = number;

    while(i >= 0) {
        console.log(i);
        i--
    }
}