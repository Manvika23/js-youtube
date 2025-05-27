const username = ""
if (username){
    console.log("got your mail");

}
else{
    console.log("don't have user email");
}


//falsy value
//false,0,-0,BigInt 0n,"",null,NaN
//and rest are truthy value

//truthy value
//"0",'false'," ",[],{},function(){}

//if (userEmail.lenght ===0){
//console.log(" array is empty");}


const emptyobj = {}
if(Object.keys(emptyobj).length === 0){
    console.log("object is empty");
}

//Nullish coalescing operator (??): null undefined

let val1;
//val1 = 5??10
//val1 = null??10
//val1 = undefined ?? 15
val1 = null ?? 10??20
console.log(val1);


//terniary operator


//condtion?true:false

const price = 100
price<100 ? console.log("less than 80"):console.log("more than 80")