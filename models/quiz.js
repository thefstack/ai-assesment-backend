const mongoose=require("mongoose");

const QuizSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    questions:[
        {
            question:{type:String,required:true,},
            options:[String],
            answer:{type:Number,required:true}
        }
    ]
})

module.exports=mongoose.model('Quiz',QuizSchema);