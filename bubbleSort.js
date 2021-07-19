function bubble(arr){
    for(let i = 0 ; i<arr.length ; i++){
        //console.log(`step 1 ${arr} `)
        for(let j =0 ; j < arr.length -1 ; j++){
            if(arr [j] > arr[j+1]){
                // let tempArr = arr[j]
                // arr[j] = arr[j+1];
                // arr[j+1] = tempArr;
                //console.log(`step 2 ${arr[j]}`)
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    console.log(` final ${arr} `)
}
bubble([5,9,7,3,1,6])
//bubble([987,234,589,615,924,124])