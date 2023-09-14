//     *
//    ***
//   *****


function pyramid(n) {
    for (let row = 1 ; row <= n ; row++) {
        let str = '';
        let num = 2*row - 1;
        for (let i = 1 ; i <= (2*n-1-num)/2 ; i++) {
            str += ' ';
        }
        for (let i = 1; i <= num ; i++) {
            str += '*';
        }
        for (let i = 1 ; i <= (2*n-1-num)/2 ; i++) {
            str += ' ';
        }
        console.log(str);
    }
}

pyramid(6);