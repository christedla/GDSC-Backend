const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  const err =  new Error('oops');
  console.error(err);
  next(err);
});
app.use(errorHandler);
function errorHandler(err, req, res, next) {    
    console.error('Error occurred:', err.message);
    console.log('Stack trace:', err.stack);
    res.status(500).send('something whent wrong !');
}


app.listen(5000, () => {
  console.log('Server is running');
});