var express = require('express');
var router = express.Router();


//setup halaman admin index
router.get('/', function(req, res){
	res.send('admin area')
});



//exports
module.exports = router;