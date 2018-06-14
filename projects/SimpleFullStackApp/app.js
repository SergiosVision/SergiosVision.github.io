const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const postRouter = require('./routes/post');
const port  = process.env.PORT || 4000;
const clientPath = path.join(__dirname, 'client');
const keys = require('./keys');

mongoose.connect(keys.mongoKey)
    .then(() => console.log(`DB Has Been Connected!!!`))
    .catch((error) => console.error(`Something went wrong :(. Error message: ${error}`));

const app = express();
app.use(bodyParser.json());
app.use(`/api/post`, postRouter);
app.use(express.static(clientPath)); // Static Path. Return index.html file.


app.listen(port, () => {
    console.log(`Server has been started on port ${port}`);
});