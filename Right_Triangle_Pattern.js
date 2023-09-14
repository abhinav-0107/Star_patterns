//     *
//    **
//   ***
//  ****
// *****

function right_triangle(n) {
    for (let row = 1 ; row <= n ; row++) {
        let str = '';
        for (let j = 1 ; j <= n-row ; j++) {
            str += ' ';
        }
        for (let j = 1 ; j <= row ; j++) {
            str += '*';
        }
        console.log(str);
    }
}

right_triangle(6);