// the initial approach
function bubbleSort1(arr){
    for(let i=0; i<arr.length; i++){
        for(let j = 0; j<arr.length-1; j++){
            if(arr[j]>arr[j+1]){
                // swap them
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            // this shows each element bubbling it's way to the top
            console.log(arr);
        } 
    }
    return arr;
}

// Reduced the iteration count using:
// 1. For each iteration one element gets sorted, so no need to compare it again - modified inner loop
// 2. Adding a flag to indicate if there was no swapping done which indicates that sort is complete
function bubbleSort2(arr){
    var noSwaps = true;
    for(let i = arr.length; i>0; i--){
        for(let j = 0; j<i-1; j++){
            if(arr[j]>arr[j+1]){
                // swap them
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
            // this shows each element bubbling it's way to the top
            console.log(arr);
        }
        if(noSwaps){
            return arr;
        }
    }
    return arr;
}
 
bubbleSort2([12,41,22,9,1]);

// to check the difference with noSwaps
bubbleSort2([1,2,3,4,5,6]);
