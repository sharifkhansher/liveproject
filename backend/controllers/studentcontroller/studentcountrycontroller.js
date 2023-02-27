const { json } = require("express")
const country = require("../../Model/studentmodel/studentcountrymodel")


const getcountry = async (req,res)=>{
    const data = await country.find()
    res.send(data)
}

const addcountry = async(req,res)=>{
    const {countryname,countrycode,countryschool}= req.body
    const data = await country.create({
     countryname,
     countrycode,
     countryschool
    })
    if(!data){
        res.status(404).send("not data found")
    }
    // json.toString(data)

    res.status(201).json({data})
}


const countrypost  = async (req,res)=>{
    const {countrycode,countryname} = req.body
       
    const data = await country.findOne({countryname})
    JSON.stringify(data)
    if(!data){
                res.status(404).json({error:"please valid data "})
            }
    console.log(data)
    
    if (data.countrycode ||  data.countryname){
        res.status(201).json({
            countryschool: data.countryschool
      
          })
    

        }    
} 




module.exports = {
    getcountry,
    addcountry,
    countrypost
}