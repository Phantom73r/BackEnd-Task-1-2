const fs=require("fs")
var objPerson={
    fname:"Ahmed",
    lname:"hossam",             // adding data to an object
    age:"20",
    city:"Alex"
}

const JsonPerson=JSON.stringify(objPerson) // to change the object to Json
fs.writeFileSync("data.json", JsonPerson) // to store the json data

console.log(JsonPerson) // read the json file

const obj1=JSON.parse(JsonPerson) // to convert the json to object

console.log(obj1)

objPerson.fname="adel"
objPerson.lname="ahmed"   // update the data
objPerson.age="40"
objPerson.city="cairo"
console.log(objPerson)

const JsonData=JSON.stringify(objPerson) // convert the object to JSON

fs.writeFileSync("data.json",JsonData) // store the data in the JSON file


