const express = require('express');
const app = express();


// app.get('/',(req, res) => {
//     res.send({hi : 'there'})
// });

if (process.env.NODE_ENV === 'production'){
    // Express will server up production assets
    // like our main.js file, or main.css file
    app.use(express.static('client/build'));


    // Express will serve up the index.html file
    // if it doesn't recognize the route.
    const path = require('path');
    app.get('*',(req,res) =>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 8080;

app.listen(PORT);