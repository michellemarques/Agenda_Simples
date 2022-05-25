const mongoose = require('mongoose');

//   -->> exemplo
const HomeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: String
});

//   ->> Model
const HomeModel = mongoose.model('Home', HomeSchema);

class Home {

};

module.exports = Home;