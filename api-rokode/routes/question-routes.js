const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();

const Question = require('../models/question-model')
//const Answer = require('../models/answer-model')

// POST route => to create a new Question
router.post('/questions', (req, res, next)=>{
 
  Question.create({
    number: req.body.number,
    question: req.body.question,
    answers: []
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    })
});

// GET route => to get a Question
router.get('/questions/:number', (req, res, next) => {
  Question.findOne( { number: { $eq: req.params.number } } ).populate('answers')
    .then(allTheQuestions => {
      res.json(allTheQuestions);
    })
    .catch(err => {
      res.json(err);
    })
});

module.exports = router;