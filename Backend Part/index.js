
const express = require("express");
const app = express();

const mongoose = require("mongoose");

const port=process.env.PORT;

const cors = require('cors');
const bodyParser = require('body-parser');


mongoose.connect('mongodb+srv://rishabhagarwal8444:Rish%401234@cluster0.gemuai4.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true,serverSelectionTimeoutMS: 30000}).then(function(){
    console.log('Connected to MongoDB');
}).catch(function(err){
    console.log(err);
});

app.use(cors());
app.use(express.static('static'))

app.use(bodyParser.json());


const userSchema = mongoose.Schema({
             username:String,
             password:String,
             confirmpassword:String
})

const userModel = mongoose.model("UserData",userSchema);

app.post('/signup',async (req,res)=>{
    let user = new userModel();
    user.username = req.body.username;
    user.password = req.body.password;
    user.confirmpassword = req.body.c_password
    const resulted_doc = await user.save();



    //res.send("Hello");
    res.json(req.body);
    //console.log(resulted_doc);
    //res.send(resulted_doc);
})


app.post('/login',async (req,res)=>{

try{
    let user = req.body.username;
    let pass = req.body.password;

    //console.log(`${user} and password is ${pass}`);

    //dhund rahe he data
    const user_cred = await userModel.findOne({username:user,password:pass});

    //console.log(user_cred);
    // res.send(user_cred);
    if(user_cred==null){
        res.send(null);
    }else{
        res.send(user_cred);
    }


}catch{
    console.log("err")
}

   
})


//for databases of content



//sql
const Sql_Schema  = mongoose.Schema({
    qno:String,
    question:String,
    answer:String,
})

const SqlModel = mongoose.model("Sql",Sql_Schema);

app.get('/sql-questions',async (req,res)=>{
const data = await SqlModel.find({});
res.send(data); 

})





//aptitute
const Aptitute_Schema  = mongoose.Schema({
    qno:String,
    question:String,
    answer:String,
})

const AptituteModel = mongoose.model("Aptitute",Aptitute_Schema);

app.get('/Aptitute-questions',async (req,res)=>{
const data = await AptituteModel.find({});
res.send(data); 

})


//Reasoning
const Reasoning_Schema  = mongoose.Schema({
    qno:String,
    question:String,
    answer:String,
})

const ReasoningModel = mongoose.model("Reasoning",Reasoning_Schema);

app.get('/Reasoning-questions',async (req,res)=>{
const data = await ReasoningModel.find({});
res.send(data); 

})


//VerbalAbility
const VerbalAbility_Schema  = mongoose.Schema({
    qno:String,
    question:String,
    answer:String,
})

const VerbalAbilityModel = mongoose.model("VerbalAbility",VerbalAbility_Schema);

app.get('/VerbalAbility-questions',async (req,res)=>{
const data = await VerbalAbilityModel.find({});
res.send(data); 

})




//HRQuestions
const HRQuestions_Schema  = mongoose.Schema({
    qno:String,
    question:String,
    answer:String,
})

const HRQuestionsModel = mongoose.model("HRQuestions",HRQuestions_Schema);

app.get('/HRQuestions-questions',async (req,res)=>{
const data = await HRQuestionsModel.find({});
res.send(data); 

})

//TechnicalQuestions
const TechnicalQuestions_Schema  = mongoose.Schema({
    qno:String,
    question:String,
    answer:String,
})

const TechnicalQuestionsModel = mongoose.model("TechnicalQuestions",TechnicalQuestions_Schema);

app.get('/TechnicalQuestions-questions',async (req,res)=>{
const data = await TechnicalQuestionsModel.find({});
res.send(data); 

})


//Programming
const Programming_Schema  = mongoose.Schema({
    qno:String,
    question:String,
    answer:String,
})

const ProgrammingModel = mongoose.model("Programming",Programming_Schema);

app.get('/Programming-questions',async (req,res)=>{
const data = await ProgrammingModel.find({});
res.send(data); 

})



//ReactJS
const ReactJS_Schema  = mongoose.Schema({
    qno:String,
    question:String,
    answer:String,
})

const ReactJSModel = mongoose.model("ReactJS",ReactJS_Schema);

app.get('/ReactJS-questions',async (req,res)=>{
const data = await ReactJSModel.find({});
res.send(data); 

})


//MachineLearning
const MachineLearning_Schema  = mongoose.Schema({
    qno:String,
    question:String,
    answer:String,
})

const MachineLearningModel = mongoose.model("MachineLearning",MachineLearning_Schema);

app.get('/MachineLearning-questions',async (req,res)=>{
const data = await MachineLearningModel.find({});
res.send(data); 

})


//DataStructures
const DataStructures_Schema  = mongoose.Schema({
    qno:String,
    question:String,
    answer:String,
})

const DataStructuresModel = mongoose.model("DataStructures",DataStructures_Schema);

app.get('/DataStructures-questions',async (req,res)=>{
const data = await DataStructuresModel.find({});
res.send(data); 

})



//ComputerNetworks
const ComputerNetworks_Schema  = mongoose.Schema({
    qno:String,
    question:String,
    answer:String,
})

const ComputerNetworksModel = mongoose.model("ComputerNetworks",ComputerNetworks_Schema);

app.get('/ComputerNetworks-questions',async (req,res)=>{
const data = await ComputerNetworksModel.find({});
res.send(data); 

})



//Cpp
const Cpp_Schema  = mongoose.Schema({
    qno:String,
    question:String,
    answer:String,
})

const CppModel = mongoose.model("Cpp",Cpp_Schema);

app.get('/Cpp-questions',async (req,res)=>{
const data = await CppModel.find({});
res.send(data); 

})


//Cprogramming
const Cprogramming_Schema  = mongoose.Schema({
    qno:String,
    question:String,
    answer:String,
})

const CprogrammingModel = mongoose.model("Cprogramming",Cprogramming_Schema);

app.get('/Cprogramming-questions',async (req,res)=>{
const data = await CprogrammingModel.find({});
res.send(data); 

})



//AWS
const AWS_Schema  = mongoose.Schema({
    qno:String,
    question:String,
    answer:String,
})

const AWSModel = mongoose.model("AWS",AWS_Schema);

app.get('/AWS-questions',async (req,res)=>{
const data = await AWSModel.find({});
res.send(data); 

})

//SoftwareDevelopment
const SoftwareDevelopment_Schema  = mongoose.Schema({
    qno:String,
    question:String,
    answer:String,
})

const SoftwareDevelopmentModel = mongoose.model("SoftwareDevelopment",SoftwareDevelopment_Schema);

app.get('/SoftwareDevelopment-questions',async (req,res)=>{
const data = await SoftwareDevelopmentModel.find({});
res.send(data); 

})


//Java
const Java_Schema  = mongoose.Schema({
    qno:String,
    question:String,
    answer:String,
})

const JavaModel = mongoose.model("Java",Java_Schema);

app.get('/Java-questions',async (req,res)=>{
const data = await JavaModel.find({});
res.send(data); 

})


//Database
const Database_Schema  = mongoose.Schema({
    qno:String,
    question:String,
    answer:String,
})

const DatabaseModel = mongoose.model("Database",Database_Schema);

app.get('/Database-questions',async (req,res)=>{
const data = await DatabaseModel.find({});
res.send(data); 

})




//Firebase
const Firebase_Schema  = mongoose.Schema({
    qno:String,
    question:String,
    answer:String,
})

const FirebaseModel = mongoose.model("Firebase",Firebase_Schema);

app.get('/Firebase-questions',async (req,res)=>{
const data = await DatabaseModel.find({});
res.send(data); 

})


const MocktestSchema = mongoose.Schema({
    qno:String,
    question:String,
    option1:String,
    option2:String,
    option3:String,
    option4:String,
})

const MockTest = mongoose.model("MockTest",MocktestSchema);

app.get('/mocktest',async (req,res)=>{
const data = await MockTest.find({});
//console.log(data);
res.send(data); 
})







// const subscribers = mongoose.Schema({
//     useremail:String
// })



// const UserEmailModel = mongoose.model('UserEmailmodel',subscribers);

// app.post('/subscribers',(req,res)=>{

//     let email_data = req.body.email;

//     console.log(email_data);

//     // let emaildata = new UserEmailModel();
//     // emaildata.email = email;

//     // emaildata.save();
// })




app.listen(5000,()=>{
    console.log("Server Started");
})