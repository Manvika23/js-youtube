const descripter= Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter);

//value = 3.14
//writable = false
//enumurable = false,
//configurable = false

const chai = {
    name :'ginger chai',
    price:250,
    isAvailable :true,
    orderchai:function(){
        console.log("nahi bani");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));
Object.defineProperty(chai,'name',{
    writable : false,
    enumerable : false
})

for (let[key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key}:${value}`)
    }
    
}

