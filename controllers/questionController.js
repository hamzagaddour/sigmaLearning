const Question = require("../models/question.model");
const mongoose = require("mongoose");
// const formidable = require("formidable");
// const _ = require("lodash");
// const fs = require("fs");

exports.getQuestion =(req, res)=>{
    //res.status(200).json({message: "hello world question"})
    console.log(req.params.qcmID)
    let qcmId = req.params.qcmID

    Question.find({ qcmId }, (error, data) => {
        if (error || !Question) {
          return res.status(400).json({
            error: "Question Does Not Exists",
          });
        }
        console.log(data)
        return res.status(200).json(data);
      });
}
