 const express=require('express');

 const app=express();
 
 const userRoutes = require('./userRouter');
 
   
app.use('/users',userRoutes);

 const port = process.env.PORT || 3000;
 
 app.listen(3000, () => console.log('app is listening at port 3000'));
 

 