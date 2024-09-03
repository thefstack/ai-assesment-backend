const mongoose = require('mongoose');

const ResultSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true },
  score: { type: Number, required: true },
  feedback: { type: String }
});

module.exports = mongoose.model('Result', ResultSchema);