const arr1 = [1, 2, 3];
const arr2 = [9, 1, 4];

function sameNaive(arr1, arr2) {
    if (arr1.length != arr1.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIdx = arr2.indexOf(arr1[i] ** 2)
        if (correctIdx === -1)
            return false;
        console.log(arr2);
        arr2.splice(correctIdx, 1)
        
    }
    return true;
}

function sameFCounter(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){ // arr에 들어가있는 char 하나씩 뽑아서
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1 // 새로운 배열의 key가 char인 값에 존재하지 않으면 0으로 초기화 하고 존재하면 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){ // 제곱이 없다면 false
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

console.log(sameFCounter(arr1, arr2));