//for of

["","",""]
[{},{},{}]

const arr = ["a", "b", "c"];
for (const item of arr) {
  console.log(item);
}
const greeting = ["hello world"];
for (const greet of greeting) {
  console.log(`each char is: ${greet}`);
}

//maps
const map = new Map(
map.set("name", "John"),
map.set("age", 30),

console.log(map);
for (const [key, value] of map) {
    console.log(`${key}: ${value}`)
}
const myobject={
  gam1:'nfs',
  gam2:'fifa',
}

for(const[key,value] of Object){
  console.log(key,'-',value);
}