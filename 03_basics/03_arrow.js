const user={
    username:"manvika",
    price:999,


    welcomemessage : function(){
        console.log(`${this. username},welcome to website`)
        console.log(this) //this talks about current context
    }

    }


  //  user.welcomemessage()


    //user.username ="manvi" //context changed
    //user.welcomemessage()


//    console.log(this);

//function manvi(){
  //  let username = "manvika"
    //console.log(this);
//}
//manvi()

const chai = ()=> {
     let username = "manvika"
    console.log(this.username);
    console.log(this);


}
chai()

//arrow functions

/*const addtwo=(num1,num2)=>{
    return num1+num2
}*/
//implict return
//const addtwo=(num1,num2)=> (num1+num2)
//const addtwo=(num1,num2)=> num1+num2

const addtwo=(num1,num2)=> ({username:"manvika"}) //object

console.log(addtwo(3,4))

//const myarray = [2,4,5,6,7]

//myarray.forEach()