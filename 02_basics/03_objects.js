//singleton from constructor

//objects literals


const mysymbol= Symbol("key1")





const jsUsers ={
    name :"manvika",
    "full name":"manvika agarwal",
    mysymbol:"key1",//wrong way , type of = string
    [mysymbol]:"key1",//correct wayuse in square brackets
    age:18,
    loacation:"gwalior",
    email: "manvikagarwal.com",
    isloggedin: false,
    lastlogindays : [ "MONDAY","SATURDAY"]

}
console.log(jsUsers.email)
console.log(jsUsers["email"])
console.log(jsUsers["full name"])
console.log(jsUsers[mysymbol])


jsUsers.email="manvikaga@gmail.com"
//Object.freeze(jsUsers)
jsUsers.email="manvik2005@gmail.com"
console.log(jsUsers)


jsUsers.greeting = function(){
    console.log("helllo");

}
console.log(jsUsers.greeting);

jsUsers.greetingtwo = function(){
    console.log(`hello JSUSER,${this.name}`);
//`` BACKTICKS ""to ``string interpolation
}
console.log(jsUsers.greeting());
console.log(jsUsers.greetingtwo());
