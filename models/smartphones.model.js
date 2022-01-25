const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SmartphonesSchema = new Schema({
    nome: { 
        type: String, 
        required: true, 
        max: 100, 
    },
    marca: { 
        type: String, 
        required: true, 
    },
    price: { 
        type: Number, 
        required: true, 
    },
});


// Export the model
module.exports = mongoose.model('Smartphones', SmartphonesSchema);exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};