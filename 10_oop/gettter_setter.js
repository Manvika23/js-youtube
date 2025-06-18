class User{
    constructor(email,password){
        this.email = email ;
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(){
        return this._email
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password= value
    }
}
const manvi= new User("manshu@","abc")
console.log(manvi.password);
