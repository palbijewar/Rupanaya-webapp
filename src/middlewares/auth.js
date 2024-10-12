import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import db from "../models";

export const auth = async (req,res,next)=>{
 try {
    const token = req.headers['x-api-key']
    if(!token) return res.status(404).json({status: false, message : "Token Not Found."})
    const docoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await db.Users.findById(docoded.userId)
    if(!user) return res.status(401).json({status : false, message : "User Not Authenticated to access this route"})
    req.user_id = user.userId
    next()
 } catch (error) {
    res.status(500).json({status : false, message : error.message})
 } 
};