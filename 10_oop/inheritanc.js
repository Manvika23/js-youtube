class User{
    constructor(username){
        this.username= username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
this.email = email
this.username= username
    }
    addCourse(){
        console.log(`A new cousre was added by${this.username}`);
        
    }
}
const chai = new Teacher("chai","chasuj@","123")

chai.addCourse()

chai.logMe()
const masalachai= new User("masalachai")
masalachai.logMe()
console.log(chai instanceof User);