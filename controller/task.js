const Product = require('../models/products')


exports.getProducts = async (req,res,next) => {
    try{
        const data = await Product.findAll()

        res.json({productData: data})
    }catch(err){
        res.json({Err: err})
    }
}

exports.postAddProduct = async(req,res,next) => {
    try{ 
        const product = req.body.product;
        const price = req.body.price;
        const category = req.body.category;
        const data = await Product.create({
            product : product,
            price: price,
            category: category
        })
        res.json({productData: data});

        
    }catch(err){
        res.json({addProductErr: err})

    }
}




exports.postDeleteProduct = async (req,res,next) => { 
    try{
        
        const prodId=req.params.prodId
        const resp= await Product.destroy({where: {id : prodId}})
        res.status(204).json({resp});
        
        console.log("product deleted");


    }catch(err){
        console.log("ERR: BE_controller_admin.js postDeleteProduct")
        res.json({Err: err})
    }

};