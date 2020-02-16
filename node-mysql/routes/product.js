let express = require('express')
let product = require('../controller/product')
let router = express.Router()
router.get('/queryProduct', function (req,res){
	product.queryAllProduct(req,res);
});

router.get('/queryProductById', function (req,res){
	product.queryProductById(req,res);
});

router.post('/addProduct', function (req,res){
	product.addProduct(req,res);
});
router.post('/deleteProduct', function (req,res){
	product.deleteProductById(req,res);
});
router.post('/updateProduct',function (req,res){
	product.updateProductById(req,res);
});

module.exports = router 

