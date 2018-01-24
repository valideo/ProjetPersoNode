var express = require('express');
var router = express.Router();

var Products = require('../models/products');
var Orders = require('../models/orders');

router.get('/', function(req, res, next) {
  Products.find(function (err, docs) {
        var productChunks = [];
        var chunkSize = 3;
        for (var i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
  	res.render('shop/index', { title: 'GesCompta', products : docs });
  });
});

router.get('/add-to-cart/:id', function(req, res, next){
	var productId = req.params.id;
});

router.post('/checkout', function(req, res, next) {
		console.log('start save order');
        var order = new Orders({
            user: req.user,
            nameProduct: "ajoute toi ptn",
            qtity: req.body.qtity,
    		price: 1,
        });
        console.log(order);
        order.save(function(err, result) {
            res.redirect('/');
        });
	}); 

module.exports = router;