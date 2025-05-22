let myDate = new Date()
    console.log(myDate.toString());
     console.log(myDate.toLocaleDateString());
      console.log(myDate.toJSON()); 
      console.log(myDate.toTimeString());
      //Date is an object
       console.log(typeof myDate);

// in javascript months start from 0
//let mycreateddate = new Date(2023,0,23)
//console.log(mycreateddate.toDateString());

let mycreateddate = new Date("01-12-2025")

console.log(mycreateddate.toLocaleString());

let mytimestamp = Date.now()

//console.log(mytimestamp);
//console.log(mycreateddate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth()+1);


//same as localestring

newDate.toLocaleString('default',{
    weekday: "long"
    
})