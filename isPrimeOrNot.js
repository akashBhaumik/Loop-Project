function primeNotPrime(num){
   if(num === 2){
       return "this  is a prime number"
   }else if(num < 1){
       return "this  is not a prime number"
   }else if(num === 1){
       return "this number is neither prime or a composite"
   }
   else{
       let result = " this is prime"
     for(let i = 2 ; i< num ; i++){
         if( num % i == 0){
             result =  "this  is not a prime number"
             break;
         }
     }
     return result;
   }
}
console.log(primeNotPrime(1))