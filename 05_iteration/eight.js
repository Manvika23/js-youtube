//reduce
const mynum= [1,2,3]
 const mytotal = mynum.reduce((acc,currval)=>{
    console.log(`acc: ${acc}, currval: ${currval}`);
    return acc + currval;
 },0)
 console.log(mytotal); // 6


//effective

 const mytota2=mynum.reduce((acc,currval)=>acc+currval,0)
 console.log(mytota2); // 6
 