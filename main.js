require('dotenv').config();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const fetch = require("node-fetch");
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('./public'));

// app.get('/api/rootme', async (req, res) => {
//   const response = await fetch("https://api.www.root-me.org/auteurs/1033656", {
//     headers: { 
//         'Cookie': `api_key=${process.env.ROOTME_API_KEY}`,
//         'User-Agent': 'curl/8.5.0'
//     }
//   });
//   const data = await response.json();
//   res.json(data);
// });

app.listen(3000, () => console.log('Serveur démarré sur http://localhost:3000'));
