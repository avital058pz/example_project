const data=require("./UserModol")

const Controler={
    getAllUser:(req,res)=>{
        res.status(200).json(data.getallusers());
    },
    createUser:(req,res)=>{
      const {userID,name,email,poneNumber}=req.body;
      res.status(200).json(data.createUser(userID,name,email,poneNumber));
    },
    
 
    updateUser:(req,res)=>{
      const {userID,name,email,poneNumber}=req.body
      res.status(200).json(data.updateUser(userID,name,email,poneNumber));
    },
    deleteUser:(req,res)=>{
         const  id =req.params.userId;
         data.deleteUser(id); 
         res.status(200).json({ message: 'deleted' });
    },
    getUserbyId:(req,res)=>{
           const  id =req.params.userId;
           res.status(200).json(data.getUserbyId(id));


    },
};

module.exports=Controler;

