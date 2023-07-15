// const fs=require("fs")
const yargs=require("yargs")
const data=require("./data.js")

yargs.command({
    command:"add",
    describe:"you are adding an item",
    builder:{
        fname:{
            demandOption:true,
            type:"string",
            describe:"this is the first name"
        },
        lname:{
            demandOption:true,
            type:"string",
            describe:"this is the last name"
        }
    },
    handler:(x)=>{
        data.addPerson(x.id,x.fname, x.lname,x.age, x.city)
    }
})
yargs.command({
    command:"delete",
    describe:"to delete an item",
    handler:(x)=>{
        data.deleteItem(x.id)
    }
})

yargs.command({
    command:"read",
    describe:"to read an item",
    handler:(x)=>{
        data.readPerson(x.id)
    }
})
yargs.command({
    command:"list",
    describe:"to list certain data",
    handler:(x)=>{
        data.listData(x.fname, x.lname, x.city)
    }
})

yargs.parse()