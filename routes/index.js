var express = require('express');
var router = express.Router();
const axios = require("axios");


/* GET home page. */
router.get('/', async function(req, res) {
  const resObj = await axios.get('https://api.github.com/users/rmaughan93/repos');
  res.render('index', { collection: resObj.data });
});

module.exports = router;
