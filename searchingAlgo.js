function searching(arr,num){
    for (let i = 0 ; i < arr.length ; i++){
        if(arr[i] == num){
            console.log(i)
            //break;
        }else{
        console.log(-1)
        break;
    }
    
}
}
searching([2,3,7,1,6],7)