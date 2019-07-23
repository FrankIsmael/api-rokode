const mongoose = require('mongoose')

const Schema = mongoose.Schema

const questionSchema = new Schema({
  number: {type: Number, required: true},
  question: { type: String, required: true },
  options:  {type:Array,default: ["😭", "😐", "😀", "😍"]},
  answers: [{ type: Schema.Types.ObjectId, ref: 'Answer' }]
},
  {
    timestamps: true
  })

module.exports = mongoose.model('Question', questionSchema)

