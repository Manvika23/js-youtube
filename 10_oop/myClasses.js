//ES6

class User{
    constructor(username,email,password){
        this.username=username;
        this.email= email;
        this.password = password;
    }
    encryptPassword()
{
return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}


const manvi = new User ("manvika","mancikv@","1233")
console.log(manvi.encryptPassword());
console.log(manvi.toUpperCase());

User.prototype.encryptPassword = function(){
    return`${this.password}abc`
}
