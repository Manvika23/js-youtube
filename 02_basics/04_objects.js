const tinderUser= {}

tinderUser.id="12345"
tinderUser.name="samay"
tinderUser.isLoggedIn=false
console.log(tinderUser);

//const regularUser={
  //  fullname:{
    //    userfullname:{
      //      firstname:"manvika",
     //       lastname:"agarwal"
       // }
//}
//}
//console.log(regularUser.fullname);



//const obj1={1:"a",2:"b"}
//const obj2={3:"a",4:"b"}


//const obj3={obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)
//console.log(obj3);
//const obj3 ={...obj1,...obj2}
//console.log(obj3);

//array of objects
const users =[
   { id:1,
    email:"manvika@"

}
]
//console.log(users[1].email)

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course={
    coursename:"manvika",
    price:"1000",
    teachr:"manvi"
}
//course.teachr
const{teachr}= course
console.log(teachr);

//const navbar({company})
//destructuring
//{
   " coursename" : "manvika",
    "price":"1000",
    "teachr":"manvi"
//}
