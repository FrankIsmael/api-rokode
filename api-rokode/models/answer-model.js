const mongoose = require('mongoose')
const Schema = mongoose.Schema

const answerSchema = new Schema({
  value: String, 
  question: {type: Schema.Types.ObjectId, ref: 'Question'}
},
{
  timestamps: true
})

module.exports = mongoose.model('Answer', answerSchema)
