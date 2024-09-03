const express=require("express");
const router=express.Router();
const Quiz=require("../models/quiz")

router.post('/create',async(req,res)=>{
    try{
        const quiz=new Quiz(req.body);
        await quiz.save();
        res.status(201).json(quiz);
    }catch(err){
        res.status(500).json({message:err.message})
    }
})

router.get('/', async (req, res) => {
    try {
      const quizzes = await Quiz.find();
      res.json(quizzes);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  const { HfInference } = require('@huggingface/inference');
const hf = new HfInference(process.env.HUGGING_FACE_API_KEY);

function generateManualFeedback(quiz, userAnswers) {
    let feedback = `Feedback for the quiz titled "${quiz.title}":\n\n`;
  
    quiz.questions.forEach((question, index) => {
      const selectedAnswer = question.options[userAnswers[index]];
      const correctAnswer = question.options[question.answer];
  
      feedback += `Q${index + 1}: ${question.question}\n`;
      feedback += `Answer: ${selectedAnswer}\n`;
      
      if (selectedAnswer === correctAnswer) {
        feedback += "Correct! Great job.\n\n";
      } else {
        feedback += "Incorrect. Keep trying, and you'll get it next time!\n\n";
        feedback += `Correct Answer: ${correctAnswer}\n\n\n`;
      }
    });

  
    return feedback;
  }

async function generateHybridFeedback(quiz, userAnswers) {
    let feedback = generateManualFeedback(quiz, userAnswers);
  
    // Optionally, pass this feedback through AI to enhance it
    try {
      const response = await hf.textGeneration({
        model: 'gpt2',
        inputs: feedback,
      });
      console.log(response);
  
      return response.generated_text;
    } catch (error) {
      console.error("AI enhancement failed:", error);
      return feedback; // Fallback to the manually generated feedback
    }
  }

  router.post("/generate-feedback",async(req,res)=>{
    const {quiz,userAnswers}=req.body;
    try{
        const feedback=await generateHybridFeedback(quiz,userAnswers);
        res.status(201).json({feedback})
    }catch(err){
        console.log(err)
        res.status(500).json({error:"Failed to generate feedback",err})
    }
})
  
  module.exports = router;