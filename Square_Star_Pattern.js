// *****
// *****
// *****
// *****
// *****

function square_star_pattern(totalRow) {
    let str = '';
    for(let i = 1 ; i <= totalRow ; i++){
        str += '*';
    }
    for(let row = 1 ; row <= totalRow ; row++){
        console.log(str);
    }
}

square_star_pattern(6);