let express = require('express');
let router = express.Router();
let Person = require('../models/person');
let app = express();
app.use(express.json())



router.get('/:workType' ,async (req,res)=>{
   try {
    let workType = req.params.workType;
    if(workType =="Chef"|| workType=="owner"){
        const response = await Person.find({work:workType});
        console.log("response fetched");
        res.status(200).json(response);
    }
   } catch (error) {
      console.log("fail");
      res.status(200).json(error);
   }
})


router.post('/',async (req,res)=>{
    try {

        let newPerson = req.body;

        let person = new Person(newPerson);

        let response = await person.save();

        console.log("sucess");
        res.status(200).json(response);
        
    } catch (error) {
        console.log("error");
        res.status(500).json({error:"internal Server Error"})
    }
    
});


router.get('/',async (req,res)=>{
    try {
        let response = await Person.find();
        console.log("sucess");
        res.status(200).json(response);
    } catch (error) {
        console.log("error");
        res.status(500).json({error:"internal Server Error"})
    }
})

router.put('/:id' ,async (req,res)=>{
    try {
        let id = req.params.id;
        let body = req.body;

        let response = await Person.findByIdAndUpdate(id,body,{
        new:true,
        runValidators :true
     });

     if(!response){
        console.log("response fetched")
        res.status(404).json({msg:"person not found"})
     }
     res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error)
    } 
})



router.delete('/:id', async(req,res)=>{
    try{
       let id = req.params.id;
       const deleted = await Person.findByIdAndDelete(id);
       console.log("deleted")
       res.send(200).json(deleted);
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;