let myName ="manvika"
console.log(myName.truelength);

let myHeros= ["thor","spidermen"]
let heroPower = {
    thor:"hammer",
    spiderman :"sling",

    getSpiderPower : function(){
        console.log(`spider power is${this.spiderman}`);

        
    }

}

Object.prototype.manvi= function (){
    console.log(`manvika ispresent inall object`);
    
}
Array.prototype.heymanvi= function(){
    console.log(`manvika says hello`)
    
}
heroPower.manvi()
myHeros.manvi()
myHeros.heymanvi()


//inheritance
const User= {
    name :"user",
    email :"manvika@"
}

const Teacher = {
    makeVideo :true
}
const Teachingsupport ={
  isAvailable: false
}
const TAsupport ={
    makeAssignment:'JS assignement',
    fullTime:true,
    __porto__:TeachingSupport
}
Teacher.__porto__= User
//modern syntax
Object.setPrototypeOf(Teachingsupport,Teacher)