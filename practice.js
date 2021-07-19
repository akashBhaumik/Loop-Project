function binary(arr , elem){
    let firstIndex = 0 ;
    let secondIndex = arr.length - 1 ;
    let middleIndex = Math.floor((firstIndex + secondIndex)/2);
    while(arr[middleIndex] != elem && arr[firstIndex] <= arr[secondIndex]){
        if(arr[middleIndex] > elem){
            middleIndex = secondIndex - 1 ;
        }else{
            middleIndex = firstIndex +1 ;
        }
        middleIndex = Math.floor((firstIndex + secondIndex)/2);
    }
console.log(arr[middleIndex] === elem ? middleIndex : -1)
}
binary([5,8,9,12,17],9)