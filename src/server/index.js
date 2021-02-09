const express = require('express');
const axios = require('axios');

const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.static('dist'));

app.get('/api/getOffersData', (req, res) => {
  const request = {
    method: 'get',
    url: 'http://www.plugco.in/public/take_home_sample_feed',
    json: true,
    gzip: true,
  };

  axios(request)
    .then(response => {
      const { data } = response;
      res.status(200).json(data);
    })
    .catch(error => {
      console.error(error);
      res.status(400).json({ error });
    });
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
