const _str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

/**
 * 
 * @param {Array} arr 
 * @param {Number} max_val Maximum number that can be stored in the array
 * @returns {Int32Array}
 */
function fix_arr(arr, max_val){
    let ret=[];
    let carry=0;
    for(let i of arr){
        let v=i+carry;
        if(v>=max_val){
            carry=parseInt(v/max_val);
            v=v%max_val;
        }else{
            carry=0;
        }
        ret.push(v);
    }
    if(carry>0){
        ret.push(carry);
        return fix_arr(ret, max_val);
    }
    return ret;
}


function toBase10(arr, base){
    let ret = [];
    let rem = 0;
    for(let i = 0; i< arr.length; i++){
        let n = ((arr[i] + rem) * base)
        
        let m  = 10;
        let o = parseInt(n/m);
        rem = base - o;
        console.log(n, rem) 
        ret.push(o)
    }
    return fix_arr(ret, 10);
}

function t(arr, base){
    let n = [];
    for(let i of arr){
        n.push((i*base)/10)
    }

    return n;
}