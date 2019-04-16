const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan('dev'));
app.use(express.static('dist'));

app.listen(PORT, () => console.log(`Running on port: ${PORT}`));
