function User(email,password){
    this._email = email;
    this._password=password


    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase()
        },
        set:function(){
            this.email=value
        }
    })
}

const chai = new User("chahudb@","manvi")
console.log(manvi.email);
