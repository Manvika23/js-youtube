const coding= ["JavaScript", "Python", "Java", "C++", "Ruby"];

coding.forEach(function (item){

    console.log(item);
})

/*coding.forEach(()=>{
    console.log(item);
})
function printme(item){
    console.log(item);
}
coding.forEach(printme);

coding.forEach((item, index,coding) => {
    console.log(item,index,coding);
})*/
const mycoding =[{
    languagename1 : "JavaScript",
    languagename2 : "Python",
    languagename3 : "Java"
}
]
mycoding.forEach((item)=>{
    console.log(item.languagename1);
})