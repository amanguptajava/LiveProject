const express = require('express');
const app = express();
const student = require('./routes/student');
const path = require('path');


app.use(student);
app.set('view engine','ejs');
app.set('views',path.resolve('./views'));

app.listen(3000,(err)=>{
  if(err){
    console.log(err);
  }else{
    console.log('server is running on port 3000');
  }
})