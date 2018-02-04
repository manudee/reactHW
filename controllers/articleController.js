const db = require("../models/article.js");
//this saves the incoming data to DB or retrieves data from db



module.exports = {
    create: function (req, res) {
        db.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}


