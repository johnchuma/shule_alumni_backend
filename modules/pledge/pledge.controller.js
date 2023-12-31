const { errorResponse, successResponse } = require("../../utils/responses")
const {Pledge,Project,User} = require("../../models");


const createPledge = async(req,res)=>{
try {
    const {
        amount,user_uuid

    } = req.body;
    const uuid = req.params.uuid
    const project = await Project.findOne({
        where:{
            uuid
        }
    });
    const user = await User.findOne({
        where:{
            uuid:user_uuid
        }
    });
    const response = await Pledge.create({
        amount,projectId:project.id,userId:user.id
    })
    successResponse(res,response)
} catch (error) {
    errorResponse(res,error)
}
}
const updatePledge = async(req,res)=>{
    try {
        const uuid = req.params.uuid;
        const {amount} = req.body
        const pledge = await Pledge.findOne({
            where:{
                uuid
            }
        })
        const response = pledge.update({
           amount
        })
        successResponse(res,response)
    } catch (error) {
        errorResponse(res,error)
    }
}
const getPledges = async(req,res)=>{
    try {
        const uuid = req.params.uuid
        const project = await Project.findOne({
            where:{
                uuid
            }
        });
        const response = await Pledge.findAll({
            where:{
                projectId:project.id,
                paid:false
            },
            include:[User]
        })
        successResponse(res,response)
    } catch (error) {
        errorResponse(res,error)
    }
}
const updatePledgeStatus = async(req,res)=>{
    try {
        const uuid = req.params.uuid
        const pledge = await Pledge.findOne({
            where:{
                uuid
            }
        });
        const response = await pledge.update({
            paid:true
        })
        successResponse(res,response)
    } catch (error) {
        errorResponse(res,error)
    }
}

const deletePledge = async(req,res)=>{
    try {
        const uuid = req.params.uuid
        const pledge = await Pledge.findOne({
            where:{
                uuid
            }
        });
        const response = await pledge.destroy()
        successResponse(res,response)
    } catch (error) {
        errorResponse(res,error)
    }
}
module.exports = {
    createPledge,getPledges,deletePledge,updatePledgeStatus,updatePledge
}