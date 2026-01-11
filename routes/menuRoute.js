let express = require('express');
let router = express.Router();
let Menu = require('../models/menuItem');

router.post('/',async(req,res)=>{
   try {
      let body = req.body;
    
      const menu = new Menu(body);

      let response = await menu.save();
      console.log("sucess");
      res.status(200).json(response);
   } catch (error) {

      console.log("fail");
      res.status(200).json(error);
   }
    
})


router.get('/',async (req,res)=>{
    try {
        let response = await Menu.find();
        console.log("sucess");
        res.status(200).json(response);
    } catch (error) {
        console.log("failed");
        res.status(500).json({error});
    }
});

router.get('/:taste',async(req,res)=>{
    try {
        let para = req.params.taste;
        let response = await Menu.find({taste:para});
        res.status(200).json(response)
    } catch (error) {
        console.log("failed");
        res.status(500).json({error});
    }
});

router.put('/:id', async (req,res)=>{
    try {
        let id = req.params.id;
        let newBody = req.body;

        let response = await Menu.findByIdAndUpdate(id,newBody,{
            new:true,
            runValidators:true
        })
        if(!response){
            res.status(404).json({message:"no dish available"})
        }
        console.log("Secussfully updated");
        res.status(200).json(response);
    } catch (error) {
        console.log("failed");
        res.status(500).json({error});
    }
} )

router.delete('/:id',async (req,res)=>{
    try {
        let id = req.params.id;
        let response = await Menu.findOneAndDelete(id);

        console.log("sucessfully deleted");
        res.status(200).json(response);
    } catch (error) {
        console.log("failed");
        res.status(500).json({error});
    }
})



//for testing purpose
module.exports = router;