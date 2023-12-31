const { errorResponse, successResponse } = require("../../utils/responses")
const {SchoolNews,School} = require("../../models");

const getUrl = require("../../utils/cloudinary_upload");

const createSchoolNews = async(req,res)=>{
try {
    const {
        title,description
    } = req.body;
    const image = await getUrl(req);
    const uuid = req.params.uuid
    const school = await School.findOne({
        where:{
            uuid
        }
    });
   
    const response = await SchoolNews.create({
        title,description,image,schoolId:school.id
    })
    successResponse(res,response)
} catch (error) {
    errorResponse(res,error)
}
}
const updateSchoolNews = async(req,res)=>{
    try {
        let {
            title,description,image
        } = req.body;
        const uuid = req.params.uuid
        const schoolNews = await SchoolNews.findOne({
            where:{
                uuid
            }
        })
        if(req.file){
           image = await getUrl(req);        
        }
        const response = await schoolNews.update({
            title,description,image
        })
        successResponse(res,response)
    } catch (error) {
        errorResponse(res,error)
    }
}

const getSchoolNews = async(req,res)=>{
    try {
        const uuid = req.params.uuid
        const school = await School.findOne({
            where:{
                uuid
            }
        });
        const response = await SchoolNews.findAll({
            where:{
                schoolId:school.id
            }
        })
        successResponse(res,response)
    } catch (error) {
        errorResponse(res,error)
    }
}
const getSingleSchoolNews = async(req,res)=>{
    try {
        const uuid = req.params.uuid
        const news = await SchoolNews.findOne({
            where:{
                uuid
            }
        });
        successResponse(res,news)
    } catch (error) {
        errorResponse(res,error)
    }
}
const deleteSchoolNews = async(req,res)=>{
    try {
        const uuid = req.params.uuid
        const news = await SchoolNews.findOne({
            where:{
                uuid
            }
        });
        const response = news.destroy()
        successResponse(res,response)
    } catch (error) {
        errorResponse(res,error)
    }
}
module.exports = {
    createSchoolNews,getSchoolNews,deleteSchoolNews,getSingleSchoolNews,updateSchoolNews
}