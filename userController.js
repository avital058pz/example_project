const data = require("./UserModol")
 


const Controler={

    getAllUser:async (req,res)=>{
      await res.status(200).json(data.getallusers());
    },


    createUser:(req,res)=>{
      const {name,email,poneNumber}=req.body;
      try {
        res.status(200).json(data.createUser(name,email,poneNumber));
      } catch (error) {
        if (error.message == "All fields are mandatory!") {
            res.status(400).json({ error: "All fields are mandatory!" });
          } else if(error.message=="Invalid email!")
               res.status(400).json({error:"Invalid email!"});
               else if(error.message=="Invalid phone!")
               res.status(400).json({error:"Invalid phone!"});
               else{
                res.status(500).json({error:"server error"})
               }
      }
     
    },
    
 
    updateUser:(req,res)=>{
     const id=req.params.userId;
      const {name,email,poneNumber}=req.body;
        try {
           const user= data.updateUser(id,name,email,poneNumber);
           if(!user){
            res.status(404).json({error:"user not found"})
           }
           res.status(200).json(data.updateUser(id,name,email,poneNumber));
        
        } catch (error) {
            res.status(500).json({error:"server error"})
        }
     
    },


    deleteUser:(req,res)=>{
         const  id =req.params.userId;
         try {
            const indexDelete=data.deleteUser(id)
            if(!indexDelete){
                res.status(404).json({error:"user not found"})
            }
            res.status(200).json({ message: 'deleted' });

         } catch (error) {
            res.status(500).json({error:"server error"})
         }
        
     },
    getUserbyId:(req,res)=>{
      debugger
           const   {userId} =req.params;
           try {
            const user=data.getUserbyId(userId);
            if(!user){
                res.status(404).json({error:"user not found"})
               }
               res.status(200).json(user);
           } catch (error) {
            res.status(500).json({error:"server error"})
           }
          


    },
};

module.exports=Controler;