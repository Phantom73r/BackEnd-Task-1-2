const fs=require("fs")

const addPerson=(id, fname, lname, age,city)=>{
    const Alldata=loadata()
    const duplicatedData=(Alldata.filter((x)=>{
        return x.id===id
    }))
    if(duplicatedData.length==0){
        Alldata.push({
            id:id,
            fname:fname,
            lname:lname,
            age:age,
            city:city

        })
       saveAlldata(Alldata)
    }else{
        console.log("Error, can't add this id because it already exists")
    }
}
/////////////////////////////////////////////////////////////////////////////////////////
const loadata=()=>{
try{
    const dataJson=fs.readFileSync("data.json").toString()
    return JSON.parse(dataJson)
}catch{
    return []
}
}

//////////////////////////////////////////////////////////////////////////////////
const saveAlldata=(Alldata)=>{
    const savealldataJson=JSON.stringify(Alldata)
    fs.writeFileSync("data.json", savealldataJson)
}
//////////////////////////////////////////////////////////////////////////////////

const deleteItem=(id)=>{
    const Alldata=loadata()
    const dataToKeep=Alldata.filter((x)=>{
        return x.id!==id
    })
    console.log(dataToKeep)
    saveAlldata(dataToKeep)
}
///////////////////////////////////////////////////////////////////////////////////

const listData=()=>{
    const allData=loadata()
    allData.forEach((obj)=>{
        console.log(obj.fname, obj.lname, obj.city)
    })
}
//////////////////////////////////////////////////////////////////////////////

const readPerson=(id)=>{
    const allData=loadata()
    const itemNeeded=allData.find((x)=>{
        return x.id==id
    })
    console.log(itemNeeded)
}
module.exports={
    addPerson,
    deleteItem, listData, readPerson
}