 const express=require('express');

 const app=express();
     
 const userRoutes = require('./userRouter');
   
app.use(userRoutes);

 const port = process.env.PORT || 3002;

 app.listen(3002, () => console.log('app is listening at port 3002'));
 

 