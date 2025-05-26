//function addtwonumbers(num1,num2){
  //  console.log(num1+num2);
//}
//addtwonumbers(4,null)
/*function addtwonumbers(num1,num2){
//let reult=num1 +num2
//return result
return num1+num2
}
const result=addtwonumbers(3,5)
console.log("result",result);
*/
function loginuser(username){
    if(!username){
        console.log("plase enter  a username");
        return

    }
    return `${username}just logged in`

}
console.log(loginuser("manvika"))
console.log(loginuser())


function calculatecartprice(val1,val2,...num1){
return num1
}
console.log(calculatecartprice(200,400,500,2000))
//object pass
const user ={
  username:"manvika",
  price:199
}

function handleobject(anyobject){
  console.log(`username is ${anyobject.username}and price is ${anyobject.price}`);

}
//handleobject(user)
handleobject({
username:"manvi",
price:399
})

//array pass
 const mynewArray =[200,300,400]

 function returnsecondvalue(getArray){
  return getArray[1]
 }

 //console.log(returnsecondvalue(mynewArray));
 console.log(returnsecondvalue(mynewArray));