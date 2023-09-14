// *****
// *   *
// *   *
// *   *
// *****

function printFullRow(n) {
    let str = '';
    for(let i = 1 ; i <= n ; i++){
        str += '*';
    }
    console.log(str);
}

function printPartialRow(n) {
    str = '*';
    for(let i = 2 ; i < n ; i++){
        str += ' ';
    }
    str += '*';
    console.log(str);
}

function hollow_square_pattern(n) {
    printFullRow(n);
    for (let i = 2; i < n ; i++) {
        printPartialRow(n);
    }
    printFullRow(n);
}

hollow_square_pattern(6);