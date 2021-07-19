function sortNum(arr){
    if(!arr.length){
        throw Error('arr should not be empty')
    } else if(arr.length === 1){
        return arr[0];
    }else{
        for(let i = 0 ; i<= arr.length ; i++){
            let outerElem = arr[i];
            for(let j = i+1 ;j<= arr.length ; j++){
                let innerElem = arr[j]
                if(innerElem < outerElem){
                    arr[i] = innerElem;
                    arr[j] = outerElem ;
                    outerElem = arr[i] ;
                    innerElem = arr[j] ;

                }
            }
        }
        return arr[0]
    }
    
}
console.log(sortNum([2,5,8,1,6,9,0,15]))