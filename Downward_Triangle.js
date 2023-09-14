// *****
// ****
// ***
// **
// *


function downward_triangle(n) {
    for (let row = 0; row <= n; row++) {
        let str = '';
        for (let col = 1 ; col <= n-row ; col++) {
            str += '*';
        }
        for (let col = 0 ; col < row ; col++) {
            str += ' ';
        }
        console.log(str);
    }
}

downward_triangle(6);