const marvel_heroes=["thor","ironman","spiderman"]
const dc_heros = ["superman","spiderman","batman"]


marvel_heroes.push(dc_heros);
 console.log(marvel_heroes[3][1]);


 const allheros = marvel_heroes.concat(dc_heros)
 console.log(marvel_heroes);


 const all_new_heros =[...marvel_heroes,...dc_heros]
 console.log(all_new_heros);

 const another_array =[1,2,3,[4,6],8]
 const real_another_array = another_array.flat(Infinity)
 console.log(real_another_array);

 console.log(Array.isArray("MANVIKA"))
 console.log(Array.from("MANVIKA"))
 console.log(Array.from({name:"MANVIKA"}))

//output [] we have to define the key for conversion otherwise it will return blank array
//intersting



let score1 = 100
let score2 = 20
let score3 = 80

console.log(Array.of(score1,score2,score3));

