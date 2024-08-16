const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // CORSモジュールを追加


const app = express();
const PORT = 1000;

app.use(cors());  // CORSを有効化
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 仮のデータストアとしての変数
let temperatureData = { temperature: null, humidity: null };

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POSTでデータを受け取る
app.post('/temperature', (req, res) => {
    console.log('Received data:', req.body);
    temperatureData = { 
      temperature: req.body.temperature,
      humidity: req.body.humidity
    };
    res.status(200).send('Data received');
});

// GETでデータを提供する
app.get('/temperature', (req, res) => {
    res.json(temperatureData);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
