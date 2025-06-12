const promiseOne = new Promise(function(resolve,reject){
    //do an async task
    //DB calls,cryptography,network
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("promise consumed")
})

 new Promise(function(resolve,reject){
    //do an async task
    //DB calls,cryptography,network
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    },1000)
})
  .then(function(){
    console.log("Async 2 resolved");
})
const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "chai",email : "haijbskm@"})
    },1000)
})
promisethree.then(function(user){
    console.log(user);

})
const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username : "chai",email : "haijbskm@"})
        }
      else{
        reject('ERROR : something went wrong')
      }
    },1000)
})
 promisefour
 .then((user)=>{
    console.log(user)
    return user.username
})
.then((username)=>{
console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=> console.log("the promise is either resolved or rejected"))
//chaining

const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : "chai",email : "haijbskm@"})
        }
      else{
        reject('ERROR : something went wrong')
      }
    },1000)
});
//async await
async function consumePromisefive(){
   try {const response = await promisefive
   console.log(response);}
   catch(error){
    console.log(error);
   }
}
consumePromisefive()

async function getAllUsers(){
   try{
     const response  = await fetch ('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
}
catch(error){
    console.log("E:" ,error);
}
   }
getAllUsers()

fetch ('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch(( error)=>console.log(error))