// Problem to compare if 2nd array has all elements from 1st array squared

const a1 = [1,2,3,4,2];
const a2 = [4,16,1,9,4];

// regular looping through each array - O(n^2)
function check1(array1, array2){
    if(array1.length !== array2.length){
        return false;
    }
    for(let i=0; i<array1.length; i++){
        let squaredValue = array1[i] ** 2;
        let indexFound = array2.indexOf(squaredValue);
        if( indexFound === -1){
            return false;
        } else {
            array2.splice( indexFound, 1);
        }
    }
    return true;
}

// by converting the array to objects - O(n)
function check2(array1, array2){
    if(array1.length !== array2.length){
        return false;
    }
    // create objects for each with key as number and value as it's count
    let obj1 = {}, obj2 = {};
    for(let val of array1){
        obj1[val] = (obj1[val] || 0) + 1;
    }
    for(let val of array2){
        obj2[val] = (obj2[val] || 0) + 1;
    }
    for(let key in obj1){
        if(!(key**2 in obj2)){
            return false;
        }
        if(obj1[key] !== obj2[key**2]){
            return false;
        }
    }
    return true;
}

if(check2(a1, a2)){
    console.log("pass")
}else{
    console.log("fail");
}

// Checking for anagrams

const string1 = "anagram";
const string2 = "nagaram";

function check3(string1, string2){
    if(string1.length !== string2.length){
        return false;
    }
    let obj = {};
    for(let i = 0; i<string1.length; i++){
        let letter = string1[i];
        obj[letter] = (obj[letter] || 0) + 1;
    }
    for(let i = 0; i<string2.length; i++){
        let letter = string2[i];
        if(!obj[letter]){
            return false;
        }
        obj[letter] -= 1;
    }
    return true;
}

if(check3(string1, string2)){
    console.log("pass")
}else{
    console.log("fail");
}
