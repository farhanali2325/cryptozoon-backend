const Fav = require('../models/favourite');
const mongoose = require('mongoose');

module.exports.insert = (req, res, next) => {
    console.log(`req.body == ${req.body}`)
    const {userId, tokenId, contract, tokenURI, isFavourite } = req.body;

   
                const fav = new Fav({
                    userId: userId,
                    tokenId: tokenId,
                    contract: contract,
                    tokenURI: tokenURI,
                    isFavourite: isFavourite

                })
                fav.save()
                    .then(async favObj => {
                        let fav = await Fav.find({userId:userId, isFavourite: true}).sort({ _id: -1 })
                        
                        res.status(201).json({
                            message: "Fav saved successfully",
                            fav: fav
                        })
                    })
                    .catch(err => {
                        res.status(500).json({
                            error: err
                        })
                    })

}



module.exports.get = (req, res, next) => {
    let userId = req.query.userId
    Fav.find({userId:userId, isFavourite: true})
        .sort({ _id: -1 })
        .exec()
        .then(fav => {
            res.status(200).json({
                fav: fav
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}




module.exports.update = async (req, res, next) => {


    let {userId, tokenId, contract} = req.body;

    await Fav.updateOne({userId: userId, tokenId: tokenId, isFavourite: true, contract: contract}, {$set:{isFavourite:false}}, {new: true})
    let fav = await Fav.find({userId:userId, isFavourite: true}).sort({ _id: -1 })
    res.status(201).json({
        message: "success",
        fav: fav
    })


}
