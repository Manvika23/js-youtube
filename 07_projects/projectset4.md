```javascript
 //genrate random color
const randomcolor=function ( ){
  const  hex = "0123456789ABCDEF"
  let color ='#'
  for(let i =0;i<6;i++)
  {
    color += hex[Math.floor(Math.random()*16)];

  }
  return color;
};
let intervalId;
const startChangingColor= function(){
if(!intervalId){
  intervalId = setInterval(changeBGcolor,1000);
}

 function changeBGcolor (){
  document.body.style.backgroundColor = randomcolor();
 }
};

const stopChangingColor = function(){
  clearInterval(intervalId);
  //intervalId = null ;

};


document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)
```javascript

//keyboard check
console.log('Project 5');
const insert = document.getElementById('insert')

window.addEventListener('keydown',(e)=>{
  insert.innerHTML =`
  <div class= 'color'>
  <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key==="  "? 'space': e.key}</td>
    <td>${e.keycode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>
  
  </div>`
})