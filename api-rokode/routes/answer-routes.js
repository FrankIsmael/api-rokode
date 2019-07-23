const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();

const Question = require('../models/question-model')
const Answer = require('../models/answer-model')


// GET route => to get all answers
router.get('/answers', (req, res, next) => {
  Answer.find()
  .then(answers =>{
      res.json(answers);
  })
  .catch( err =>{
      res.json(err);
  })
});

router.get('/answers/cry', (req, res, next) => {
  Answer.find( { value: { $eq: "😭" } } )
  .then(answers =>{
      res.json(answers);
  })
  .catch( err =>{
      res.json(err);
  })
});

router.get('/answers/happy', (req, res, next) => {
  Answer.find( { value: { $eq: "😀" } } )
  .then(answers =>{
      res.json(answers);
  })
  .catch( err =>{
      res.json(err);
  })
});

router.get('/answers/love', (req, res, next) => {
  Answer.find( { value: { $eq: "😍" } } )
  .then(answers =>{
      res.json(answers);
  })
  .catch( err =>{
      res.json(err);
  })
});

router.get('/answers/nothing', (req, res, next) => {
  Answer.find( { value: { $eq: "😐" } } )
  .then(answers =>{
      res.json(answers);
  })
  .catch( err =>{
      res.json(err);
  })
});


// POST route => to create a new Question
router.post('/answers', (req, res, next)=>{
 
  Answer.create({
    value: req.body.value,
    question: req.body.questionID, 
  })
    .then(response => {
      Question.findByIdAndUpdate(req.body.questionID, {$push:{ answers: response._id }})
      .then(theResponse => {
        res.json(theResponse)
      })
      .catch(err => {
        res.json(err)
      })
    })
    .catch(err => {
      res.json(err);
    })
});

module.exports = router