function sum(n){
    for(i=0;i<5;i++){
        n+=1;
    }
    console.log(n);
}

function findSumTill100(){
    return sum(100);
}
setTimeout(findSumTill100,10000);