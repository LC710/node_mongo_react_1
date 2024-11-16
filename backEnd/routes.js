import express from "express";
import { UseModel } from "./models/users.js";

const routes = express.Router();


routes.post("/", async (req, res) => {
    try{
        console.log("POST Teste");
        const user = req.body;
        console.log("user: " + user)
        const newUser = UseModel(user)
        console.log("newUser: " + newUser);
        await newUser.save();
        console.log("newUser: " + newUser);
        // const user = await UseModel.create(req.data);
        res.status(200).json(user)
    }catch(error){
        console.log(error)
        console.log(error.message)
    }
})

routes.get("/", async (req, res) => {
    console.log("GET Test");
    const users = await UseModel.find({});
    return res.status(200).json(users);
})

export default routes;