function sortNum(arr){
    if(!arr.length){
     throw Error('array should not be empty');
    } else if(arr.length === 1) {
        return arr[0]
    } else{
        let currentMin = arr[0]
        for( let i = 1 ; i<arr.length ; i++){
            if(arr[i] < currentMin){
                currentMin = arr[i]
            }
        }
        return currentMin;
    }
         
}
let result = sortNum([5,6,9,8,1,2,6]);
console.log(result)