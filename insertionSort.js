function insertion(arr){
    for(let i =1 ; i < arr.length ;i++){
        for(let j = i ; j > 0 ; j--){
            if(arr[j] < arr[j-1] ){
                // let temp = arr[j];
                // arr[j] = arr[j-1]
                // arr[j-1] = temp
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
            }
        }
    }
    console.log(arr);
}
insertion([875,254,984,126,546])
insertion([2154,58,987,2165,24,3468,214])


