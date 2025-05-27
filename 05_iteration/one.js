//for
for (let index = 0; index < 10; index++) {
    const element = index;
    if (element ==5){
        console.log("5 is best number");
    }
    console.log(element);
}
for (let i = 0; i < 10; i++) {
    console.log(`outer loop value : ${i}`)
    for (let i = 0; i < 5; i++) {
         console.log(`inner loop value : ${j}
             and outer loop value:${i}`);
       
        
    }
    
}


var array = [1, 2, 3, 4, 5];
console.log(array);
for (let index = 0; index < array.length; index++) {
    const element = array[index];
console.log(element)   ; 
}


//break and continue

for (let index = 0; index < 10; index++) {
    if(index == 5){
        console.log("5 is best number");
        break; // skips the rest of the loop when index is 5
    }
console.log(`value of i is ${index}`);}





