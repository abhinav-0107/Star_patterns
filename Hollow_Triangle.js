// *
// **
// * *
// *  *
// *   *
// ******

function printFullLine(n) {
    let str = '';
    for (let i = 1; i <= n ; i++) {
        str += '*';
    }
    console.log(str);
}

function partialLine(n) {
    let str = '*';
    for (let i = 0; i < n ; i++) {
        str += ' ';
    }
    str += '*';
    console.log(str);
}

function hollow_triangle(n) {
    console.log('*');
    for (let i = 0; i < n-2; i++) {
        partialLine(i);
    }
    printFullLine(n);
}

hollow_triangle(6);