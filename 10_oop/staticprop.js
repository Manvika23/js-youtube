class User{
    constructor(username){
        this.username= username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
   static createId(){
        return `123`

    }
}
const manvi = new User("manvika")
console.log(manvi.createId())
class Teacher extends User{
    constructor(username,email,password){
        super(username)
this.email = email
    }
}
const iphone=new Teacher("iphone","ipjone@")
iphone.logMe();
console.log(iphone.createId());
