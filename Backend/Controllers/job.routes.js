const express = require("express");
const JOB = require("../Models/job.schema");
const jobController = express.Router();

jobController.get("/", async (req, res) => {
    let {filterbyRole,sortbyDate,limit,page} = req.query;
    let data
    let count;
    if(filterbyRole=="" && sortbyDate==""){
      data=await JOB.find().skip((page*limit)-limit).limit(limit)
      count=await JOB.find().count().skip((page*limit)-limit)
    }else if(filterbyRole!="" && sortbyDate=="asc"){
      data=await JOB.find({role:filterbyRole}).sort({postedAt:1}).skip((page*limit)-limit).limit(limit)
      count=await JOB.find({role:filterbyRole}).sort({postedAt:1}).count().skip((page*limit)-limit)
    }else if(filterbyRole!=""&& sortbyDate=="desc"){
      data=await JOB.find({role:filterbyRole}).sort({postedAt:-1}).skip((page*limit)-limit).limit(limit)
      count=await JOB.find({role:filterbyRole}).sort({postedAt:-1}).count().skip((page*limit)-limit)
    }else if(filterbyRole=="" && sortbyDate=="asc"){
      data=await JOB.find().sort({postedAt:1}).skip((page*limit)-limit).limit(limit)
      count=await JOB.find().sort({postedAt:1}).count().skip((page*limit)-limit)
    }else if(filterbyRole=="" && sortbyDate=="desc"){
      data=await JOB.find().sort({postedAt:-1}).skip((page*limit)-limit).limit(limit)
      count=await JOB.find().sort({postedAt:-1}).count().skip((page*limit)-limit)
    }else if(filterbyRole!="" && sortbyDate==""){
      data=await JOB.find({role: filterbyRole}).skip((page*limit)-limit).limit(limit)
      count=await JOB.find({role: filterbyRole}).count().skip((page*limit)-limit)
    }
    let pages=Math.ceil(count/limit)
    const totalJobs = {Job: data,totalPages:pages};
    res.status(200).send(totalJobs);
  });
jobController.post("/create", async (req, res) => {
    let{company,postedAt,city,location,role,level,contract,position,language}=req.body
    JOB.create({
      company,
      postedAt, 
      city,
      location,
      role,
      level,
      contract,
      position,
      language
    })
    res.send("Job Listed Successfully");
  })
module.exports = jobController;