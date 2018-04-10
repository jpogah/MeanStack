var mongoose = require('mongoose');



var reviewSchema = new mongoose.Schema({
  author: String,
  rating: {type: Number , required:true , min:0 , max:0},
  reviewText: String,
  createdOn: {type:Date , "default": Date.now}
});

var churchSchema = new mongoose.Schema({
  name: {type: String, required : true},
  denomination: String,
  serviceTime: String,
  address: String,
  rating: {type:Number, "default": 0, min: 0, max: 5},
  ministries: [String],
  coords : {type :[Number] , index : '2dsphere'},
  reviews: [reviewSchema]

});

mongoose.model('Church',churchSchema);
