



const express = require('express')
const https = require('node:https');

const app = express()
const port = 3000



app.get('/', (req, res) => {
  const url = "https://api.openweathermap.org/data/2.5/weather?q=manila&units=metric&appid=73b7101d082c794872869168129c1a41";
  https.get(url, function(response){
    console.log(response.statusCode);
  });
  res.send('Server is running') 
})

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})