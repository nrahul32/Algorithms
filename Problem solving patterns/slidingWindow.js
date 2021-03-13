// Max sum of consequitive n numbers of array

let array = [10,2,4,5,2,41,21,23,65,13,0,2,-10,34,14];
let n = 4;

// looping for every index
function computeMax1(array, n){
    if(n>array.length){
        console.log("invalid");
    }
    let max = -Infinity;
    let temp;
    for(let i = 0; i<(array.length + 1 -n); i++){
        temp = 0;
        for(let j=i; j<i+n; j++){
            temp += array[j];
        }
        if(max<temp){
            max=temp;
        }
    }
    console.log(max);
}

// using sliding window
function computeMax2(array, n){
    if(n>array.length){
        console.log("invalid");
    }
    let temp = 0;
    for(let i = 0; i<n; i++){
        temp += array[i];
    }
    let max = temp;
    for(let i=n; i<array.length; i++){
        temp = temp - array[i-n] + array[i];
        if(max<temp){
            max=temp;
        }
    }
    console.log(max);
}

computeMax1(array, n);
computeMax2(array, n);
