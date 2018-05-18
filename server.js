const express = require ('express');
const app = express();
const multer = require("multer");
const uploads = multer({
    dest:'uploads/'

});
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/html/index.html');
});
app.post('/', uploads.single('file-to-upload'), (req, res) => {
    res.redirect('/');
  });
  
  app.listen(3000);