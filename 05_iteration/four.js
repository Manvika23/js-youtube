const myobject = {
    js :'javascrpt',
    cp:'c++',
    ruby:'ruby'
}
for (const key in myobject) {
    console.log(myobject[key]);
    console.log(`${key} shortcut is for ${myobject[key]}`);


}
const programming =["js","c++","ruby"];
for (const key in programming) {
    console.log(programming[key]);
    console.log(`${key} shortcut is for ${programming[key]}`);
}