const mongoose=require("mongoose");
mongoose.connect(process.env.DB).then(()=>{
    console.log("Connected to database")
}).catch((err)=>{
    console.log(`Failed to connect database: ${err}`);
})