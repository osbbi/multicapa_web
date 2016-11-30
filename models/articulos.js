var mongoose = require("mongoose");
mongoose.connect("mongodb://osmar:martin2892@ds111788.mlab.com:11788/articulos");

var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;


var articulosSchema ={
    _id:ObjectId,
    nombre:String,
    precio:Number,
    descri:String,
    img:String
};



module.exports ={
    Articulos: mongoose.model('Articulos',articulosSchema),
   
};
