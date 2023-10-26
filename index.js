//! 1.For the given JSON iterate over all for loops(for,for in,for of,forEach)
let data={
    name:"xxx",
    age:21
}
console.log("For-loop");
const keys=Object.keys(data)
for (let i = 0; i < keys.length; i++) {
    console.log(keys[i]+":"+data[keys[i]]);
    
}
console.log(" " );
console.log("For-in");
for (let key in data) {
    console.log(key + ": " + data[key]);
  }
console.log(" ");
const values=Object.entries(data)
console.log("For-of");
for(let [key,val] of values){
    console.log(key+":"+val);
}
console.log("");
console.log("For-each");
Object.entries(data).forEach(([key,val])=>{
    console.log(key +":"+val);
})