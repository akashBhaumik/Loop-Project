function fibo(num){
    if(num === 1){
        return 0;
    }else if(num === 2){
        return 1 ;
    }else{
        return fibo(num -1 ) + fibo(num - 2)
     }

    
}
console.log(fibo(7))