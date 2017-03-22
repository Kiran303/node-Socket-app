const express = require('express');
const path = require('path');
var app = express();

var port = process.env.PORT || 3000;

var publicPath = path.join(__dirname,'../public');
console.log(publicPath);

app.use(express.static(publicPath));

// app.get('/',(req,res)=>{
//     res.sendFile(publicPath + '/index.html');
// })

app.listen(port,()=>{
    console.log('Listening port 3000', port);
});