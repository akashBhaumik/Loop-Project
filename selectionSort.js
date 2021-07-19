function selection(arr){
    for(let i = 0; i < arr.length ; i++){
        let min = i;
        for( let j = i+1 ; j < arr.length; j++){
      if(arr[min] > arr[j] ){
          min = j;
            }      
    }
//    let temp = arr[i];
//    arr[i] = arr[min];
//    arr[min] = temp ;
[arr[i],arr[min]] = [arr[min],arr[i]]
}
console.log(arr)
}
selection([9,5,8,7,2,4])