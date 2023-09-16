let counter = 0;

function printSec() {
    console.clear();
    console.log(counter);
    counter ++;
}

setInterval(printSec, 1000);