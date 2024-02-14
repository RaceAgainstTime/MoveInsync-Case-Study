import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import{appendToJsonArray} from "./functions.js";
import cors from "cors";
// import {jsonData} from "./database.js";

const app = express();
const port = 4000;
app.use(cors('Access-Control-Allow-Origin'));
  
app.use(bodyParser.json());
app.get("/",(req,res)=>{
    res.send("backend running !");
});
app.post("/submit",async (req,res)=>{
    const obj = req.body;
    console.log(obj);
    try{
    
    appendToJsonArray(obj);
    // await jsonData();

    res.status(200).send("saved successful..");
    }catch(error) {
        res.status(400).send("unable to save..");
        console.error("error while inserting object in mongo>> ",error.message);
    }
});

app.listen(port, () => {
    console.log(`server in running on ${port}`);
});