function selectionSort1(arr){
    let lowestIndex;
    for(let i=0; i<arr.length; i++){
        lowestIndex = i;
        // search for the lowest item from i till the end
        for(let j=i+1; j<arr.length; j++){
            if(arr[lowestIndex]>arr[j]){
                lowestIndex=j;
            }
        }
        // place the lowest item at position i
        if(i !== lowestIndex){
            let temp = arr[i];
            arr[i] = arr[lowestIndex];
            arr[lowestIndex] = temp;
        }
        // this shows the array getting sorted after each iteration
        console.log(arr);
    }
    return arr;
}

selectionSort1([12,41,22,9,1]);
