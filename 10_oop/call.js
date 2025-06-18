function SetUsername(username){
    this.username=username
}
function createUser(username,email,password){
    SetUsername.call(this,username)

    this.email=email
    this.password = password
}

const manvi =new createUser("manvika","chai@namee",12)
console.log(manvika);


