function printNum(num:number):void{
    if(num>10){
        console.log(`greater then 10`);       
    }
    else if(num==10){
        console.log(`equal to 10`)
    }
    else{
        console.log(`les then 10`);
        
    }
}
let inp_num=document.getElementById("inp_num")
printNum(parseInt(inp_num.value))
function checkWhatsBigger(first:number,second:number):any{
if(first>second){
    return first;
}
else if(second>first){
    return second;
}
else{
   return `values are equal`;
}
}
console.log(checkWhatsBigger(8,9));
function sumNums(first:number,second:number,third:number,forth:number):Number{
    return first+second+third+forth
}
console.log(sumNums(1,2,3,4))
function smallestNum(numArray:number[]):Number{
    let smallest:number=numArray[0]
    numArray.forEach(item=>{
        
        if(item<smallest){
            smallest=item
        }
        
        })
        
    return smallest
    }

console.log(smallestNum([7,2,3,4]))
function avgArray(forAvgArray:number[]){
    let theAvg=0;
    forAvgArray.forEach(item=>theAvg+=Math.floor(item))
    theAvg=theAvg/(forAvgArray.length)
    return theAvg
}
console.log(avgArray([2.9,4.3,6.5,8]))
function funcStringArray(stringArray:string[]){
    return stringArray[1]
}
console.log(funcStringArray(["david","jonathan","hannah","ruth"]))
function funcStringArray(stringArray:string[]){
    stringArray.forEach(item=>
    {
    let catchString:string=item
   switch(catchString[0]){
       case "A":
       return catchString
       default:
       break
   }
   })}
   console.log(funcStringArray(["david","jonathan","hannah","ruth","Aviel"]))
   function funcArrNums(arrNums: number[]) {
    for (let i: number = 0; i < arrNums.length - 1; i++) {
        if (arrNums[i] % 2 == 0) {
            return arrNums[i]
        }
    }
        return
}
console.log(funcArrNums([5, 4, 0, 2, 3]))
function createDate(mystring:string):Date{
    return new Date(mystring)
}
console.log(createDate("12/12/2012"))
function checkUserAge(name:string,age:number){
    if (age>=18){
        return`welcome ${name}`
    }
    else{
        return `there is no enterence, ${name}`
    }
}
console.log(checkUserAge('chen semu',18))
function checkUserNames(name:string,secondName:string){
    if (name[0]==secondName[0]){
        return`${name[0]}`
    }
    else{
        return `0`
    }
}
console.log(checkUserNames('chen semu','channah'))
function checkArrayLength(someArray:number[]):string{
    switch(someArray.length){
        case 0:
        return 'no data'
        case 1:
        return 'single variable'
        case 2:
        return 'duel variables'
        default:
        return 'there is alot of data'
    }
}
console.log(checkArrayLength([0,1,3]))
function changeArrayOrder(someArray:number[],importentString:string){
    switch(importentString){
        case 'up':
        return someArray.sort((a,b)=>a-b)
        case 'down':
        return someArray.sort((a,b)=>b-a)
        case 'reverse':
        return someArray.reverse()
        case 'text':
        return someArray.toString()
    }
}
console.log(changeArrayOrder([0,1,3,2],'down'))
