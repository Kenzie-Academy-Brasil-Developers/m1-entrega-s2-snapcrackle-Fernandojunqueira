 function snapCrackle (maxValue){
    let newString = ""

    for(i=1;i<=maxValue;i++){
        if(i%2!=0 && i%5==0){
            newString = newString + "SnapCrackle, "
        }else if(i%5==0){
            newString = newString + "Crackle, "
        }
        else if (i%2 != 0){
            newString = newString + "Snap, "
        }
        else {
            newString = newString + i + ", "
            }
    }
    return newString
}
console.log(snapCrackle())
 //definindo se o numero n é primo
 function primos (n){
    let cont = 0
        for(j=1;j<=n;j++){
            if(n%j == 0 ){
                cont ++
                
                if(j>Math.floor(n/j)){
                  break
                }
            }
        }
    if(cont==2){
    return "primo"
    }else{
    return "nprimo"
    }
}

function snapCracklePrime (maxValeu){
    let newString = ""

    for(i=1;i<=maxValeu;i++){
        if(primos(i)=="primo" && i%2!=0 && i%5==0 ){
            newString = newString + "SnapCracklePrime, "
        }
        else if(primos(i)=="primo" && i%2!=0  ){
            newString = newString + "SnapPrime, "
        }
        else if(primos(i)=="primo"){
            newString = newString + "Prime, "
        }
        else if(i%2!=0 && i%5==0){
            newString = newString + "SnapCrackle, "
        }else if(i%5==0){
            newString = newString + "Crackle, "
        }
        else if (i%2 != 0){
            newString = newString + "Snap, "
        }
        else {
            newString = newString + i + ", "
            }
    }
    return newString
}
console.log(snapCracklePrime())