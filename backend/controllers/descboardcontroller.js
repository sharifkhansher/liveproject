 const studentsub = require("../Model/studentmodel/Studentmodel")
const course = require('../Model/studentmodel/coursemodel')
const Employ = require('../Model/employmodel/employmodel')
const product = require('../Model/profilemodel')

const alldata = async (req, res) => {
  let sub = await studentsub.find({})
  let cour =await course.find({})
  let emp = await Employ.find({})
  let prod = await product.find({})

 const arr = [
    sub={
        "imadge":"https://watermark.lovepik.com/photo/20211130/large/lovepik-primary-school-students-study-picture_501212451.jpg",
        "name":"student",
        "data":sub
    },
    emp={
        "image":"https://wallpaperaccess.com/full/4322025.jpg",
        "name":"employ",
        "data":emp
        },
    prod={
        "image":"https://stickybranding.com/wp-content/uploads/2019/11/How-to-name-your-product.jpg",
        "name":"products",
        "data":prod
    },
    cour={
        "image":"https://www.ncertbooks.guru/wp-content/uploads/2022/05/Course-details.png",
        "name":"course",
        "data":cour
    }
  ];

res.status(200).json({arr})
}

module.exports = { alldata }