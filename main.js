function recrution(x) {
    counter=1
    for(i=x;i>0;i--){
        counter*=i
    }
    return counter
}
console.log(recrution(4))