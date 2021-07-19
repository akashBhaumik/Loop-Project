function countingFrequency(arr1,arr2){
    for(let i =0 ;i< arr1.length ;i++){
        let isSquare = false
        for(let j =0; j <arr2.length ;j++){
            if(arr1[i]*arr1[i] === arr2[j]){
                isSquare = true;
            }
            if(j === arr2.length - 1){  //2 ===2
                if(!isSquare){     
                    return false;
                }
            }
        }
        //console.log(isSquare)
    }
    return true;
}
console.log(countingFrequency([2,2,3],[1,4,9]))