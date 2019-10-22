var express = require('express');
var router = express.Router();
const axios = require("axios");


router.get('/:name', async function(req, res) {
    const resObj = await axios.get('https://api.github.com/repos/rmaughan93/' + req.params.name);
    res.render('repos', {repo: resObj.data });
  })
  
module.exports = router;