const myArr =[0,1,2,3,4,5]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[0]); 


//array methods

myArr.push(4)
myArr.pop()
myArr.unshift(9)



console.log(myArr.includes(9));
console.log(myArr.indexof(3));

const newArr = myArr.join()
console.log(myArr);
console.log(newArr)

//slice,splice
console.log("A",myArr);

 const myn1 =myArr.slice(1,3)


 console.log(myn1);
 console.log("B",myArr);

 const myn2 =myArr.splice(1,3)
 console.log(myn2);






