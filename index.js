import express from 'express';
// const express = require('express');
import bodyParser from 'body-parser';
// const bodyParser = require('body-parser');
import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes)

// const path = require("path");
// app.set("routes", path.join(__dirname, "routes"));

app.get('/', (req,res) => res.send("hello from index.js"));
app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));