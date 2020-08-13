const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))

app.get('/api/users/generate', (req, res) => {
  res.send('Hello World!');
  fileHandler();
})

function fileHandler(){
  fs.readFile('../src/app/core/users/models/customer.model.ts', 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
  });
}

app.listen(3000, () => console.log('stubs server running on port 3000!'))
