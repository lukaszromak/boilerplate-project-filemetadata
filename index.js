const express = require('express');
const cors = require('cors');
const multer = require('multer');
const upload = multer({storage: multer.memoryStorage()})
require('dotenv').config()

const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// example response {"name":"z1i2.txt","type":"text/plain","size":9516}
app.post('/api/fileanalyse', upload.single('upfile'), function(req, res){
  res.json({name: req.file.originalname, type: req.file.mimetype, size: req.file.size})
});


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
