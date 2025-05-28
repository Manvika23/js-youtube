//const coding= ["JavaScript", "Python", "Java", "C++", "Ruby"];

/*const values = coding.forEach((item)=>{
    console.log(item);
    return item;
})
console.log(values); */
// undefined, because forEach does not return a value

const mynums =[1,2,3,4,5,6,7,8,9,10]

//const newnums = mynums.filter((num) => num >4 )
//console.log(newnums); // [5, 6, 7, 8, 9, 10]



//if {} applied then return is required
const newnums = mynums.filter((num) => {
     return num >4 })
console.log(newnums); // [5, 6, 7, 8, 9, 10]

// notes fromn chai and javascript

