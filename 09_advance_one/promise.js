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


