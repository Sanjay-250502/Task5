//! 1.Create your own resume data in JSON format.

const sanResume = {
"personalDetails":[
        {
        "name" :"Sanjay R J",
        "Email" : "sanjayramachandran2002@gmail.com",
        "Phone Number":"+91 0123456789",
        "Address": "56256 street,city,state",
        "state":"Tamilnadu"
} 
],
"education": [
    {
        "Degree": "BE in Computer Science and Engineering",
        "Institution": "CMS College of Engineering and Technology",
        "CGPA":"8.1",
        "Graduated" : "2023"
    }
],
"Skills":[
    {
        "Front-end" : "HTML,CSS,BOOTSTRAP,JAVASCRIPT,REACTJS",
        "Back-End" : "MYSQL,MONGODB,EXPRESSJS,NODEJS"
    }
],
"languagesKnown":[
    {
        "language":"Tamil,English,Malayalam"
    }
],
"certification":[
    {
    "Mern":"Certified MERN Stack Developer",
    "AI" :"AI for India 2.0"
    }
]
}
console.log(sanResume);
console.log(sanResume["personalDetails"])
console.log(sanResume["education"])
console.log(sanResume["skills"])
console.log(sanResume["languagesKnown"])
console.log(sanResume["certification"])


//! 2.For the given JSON iterate over all for loops(for,for in,for of,forEach)
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