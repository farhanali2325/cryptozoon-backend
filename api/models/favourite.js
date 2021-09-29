const mongoose = require('mongoose');
const FavSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    tokenId: {
        type: Number,
        required : true
    },
    contract:{
        type: String,
        required: true
    },
    tokenURI:{
        type: String,
        required: true
    },
    isFavourite: {
        type: Boolean,
        required: true
    }
})


  
module.exports = mongoose.model('Favourite', FavSchema);