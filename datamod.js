var mongoose= require('mongoose');
 
var dataschema = new  mongoose.Schema({
busid: String;
updated_at:{type:Date, default:Date.now},
buslocation:{lat:Number,lon:Number,time:Number}
});


module.export = mongoose.model('data',dataschema);
