var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var TerrainSchema = new Schema({
  nom: String,
  nombre_place: Number,
  situation:{type: Map, index: true, unique: true, sparse: true}
});

mongoose.model('Terrain', TerrainSchema);