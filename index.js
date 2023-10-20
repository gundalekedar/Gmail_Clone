// npm start command uswed for start the server

import express from 'express';
import Connection from './database/db.js';
import routes from './routes/route.js';
import cors from 'cors';
import path from 'path';

const __dirname = path.resolve();

//initialize express
const app = express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json({extended:true}));
app.use('/', routes);

// backend ko serve karna hai forntend ko

app.use(express.static(path.join(__dirname , "./Client/build")));

app.get('*', function (_, res) {
    res.sendFile(path.join(__dirname, "./Client/build/index.html"), function (err) {
        res.status(500).send(err);
    })
})

// server ko call karna padega to listen function use hota hai 
// waha par two argument hota hai first one is port and second one is call back function
const PORT = process.env.PORT || 8000;

//this is for connection of database 
Connection();

app.listen(PORT, () => {
    console.log(`Server is running on port ${ PORT }`);
})