let sinhVien = {
    maSV: 1,
    tenSV: 'Nguyen van a'
}

console.log('svGoc');
console.log(sinhVien);

let svUpdate = {...sinhVien, lopHoc: 'FEXX'};
console.log("svUpdate");
console.log( svUpdate);

let svUpdate2 = {...sinhVien, tenSV: 'Le Thi B'};
console.log("svUpdate2");
console.log( svUpdate2);

let state = {
    values: {
        ma:1,
        ten:'AAA'
    }, 
    error:{
        ma:'loi ma',
        ten:'loi ten'
    }
}

/* Ly thuyet
    // Muon cap nhat values ma error khong thay doi thi giu lai error (giu nguyen error)
    setState({
        values:{
            // giu lai cac thuoc tinh cu cua values
            ...state.values,
            // Cac noi dung muon thay doi cua values
            ['ma']:2
        },
        ...state.error
    })
*/

let stateUpdate = {
    values:{...state.values, ['ma']:'2'},
    error:{...state.error}
    // ...state.error
}

console.log('state');
console.log(state);

console.log('stateUpdate');
console.log(stateUpdate);