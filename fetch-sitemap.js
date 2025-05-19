const axios = require('axios');
const fs = require('fs');
const path = require('path');

const SITEMAP_URL =  'http://127.0.0.1:1338/api/sitemap.xml'; // Your Strapi route
const OUTPUT_PATH = path.join(__dirname, 'static', 'sitemap.xml');

axios.get(SITEMAP_URL)
  .then((response) => {
    
    fs.writeFileSync(OUTPUT_PATH, response.data, 'utf8');
    console.log('✅ Sitemap saved to /static/sitemap.xml');
  })
  .catch((err) => {
    console.error('❌ Error fetching sitemap:', err.message);
  });
