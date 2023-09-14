// *****
// *   *
// *   *
// *   *
// *****

function hollow_square_pattern(totalRows) {
    //First Row
    let str = '';
    for(let col = 1 ; col <= totalRows ; col++){
        str += '*';
    }
    console.log(str);

    str = '*';
    for(let i = 2 ; i < totalRows ; i++){
        str += ' ';
    }
    str += '*';

    for(let row = 2 ; row < totalRows ; row++){
        console.log(str);
    }

    // Last Row
    for(let i = 1 ; i <= totalRows ; i++){
        str += '*';
    }
    console.log(str);
}

hollow_square_pattern(5);