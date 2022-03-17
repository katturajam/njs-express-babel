import express from "express";
const PORT = 4000;
const app = express();
app.listen(PORT, ()=> 
    console.log(`Nodejs Application is running on Port ${PORT}`)
);

app.get('/', (req, res) => 
    res.send(`Nodejs Application and Express is running on Port ${PORT}`)
);
