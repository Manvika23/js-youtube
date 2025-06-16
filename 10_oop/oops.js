const user = {
    username : "manvika",
    logincount: 8,
    signedIn :true,


    getUserdetails : function(){
        //console.log("get user database")
        console.log(`username : ${this.username}`);
        console.log(this);
    }
}
console.log(user.getUserdetails());
console.log(this)
//new keywords helps to construct i.e, called constructor


function user(username,logincount,signedIn){
    this.username = username;
    this.logincount = logincount ;
    this.signedIn = signedIn ;

    this.greeting = function (){
        console.log(`welcom3 ${this.username}`);
    }
    return this
}
const userOne = new user("manvika",12,true)
const userTwo = new user("manvi",11,false)
console.log(userOne);
console.log(userOne.constructor);
//instanceof

 
