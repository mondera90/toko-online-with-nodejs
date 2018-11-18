var express = require('express');
var router = express.Router();


//setup halaman index
router.get('/', function(req, res){
	res.render("index", {
		title: "Happy Shopee"
	});
});






//exports
module.exports = router;