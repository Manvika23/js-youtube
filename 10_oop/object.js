function multipleby5(num){
    return num*5
}
multipleby5.power = 2 
console.log(multipleby5(5));
console.log(multipleby5.power);
console.log(multipleby5.prototype);

function  createuser(username,score){
    this.username = username
    this.score = score
}
createuser.prototype.increment = function(){
this.score++
}
createuser.prototype.printMe = function(){
    console.log(`age is${this.score}`);
    
}
const manvi = new createuser("manvi",20)
const tea = createuser("tea",25)

manvi.printMe()