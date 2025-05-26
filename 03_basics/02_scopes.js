//var c=300   avoided
let  a = 300
if (true){
    let a = 10
    const b =20
    //var c =30
    //console.log("INNER:",a);
}

console.log(a);
//console.log(b);
//console.log(c);

//nested scope

function one(){
    const username =  "manvika"

    function two(){
        const website= "youtube"
        console.log(username);
    }
   // console.log(website); (will not execute as outside the scope)
    two()
}
//one()
if(true){
    const username="manvika"
    if(username==="manvika"){
        const website ="youtube"
        //console.log(username + website);
    }
   // console.log(website);
}
//console.log(username);

//if written here addone (5) it will work
function addone(num){
    return num+1
}
console.log (addone(6));

// we have declare with new variable
// if addtwo(5) is written initialization error occurs

const addtwo =function(num){
    return num + 2
}
console.log(addtwo(5));