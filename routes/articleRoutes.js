const router = require("express").Router();
const articleController = require("../../controllers/articleController.js");
const db = require("../models/article.js");


// Matches with "/api/savedArticle"
// router.route("/")
//   .post(articleController.create);



// module.exports = router;


module.exports = function (router) {

  router.route('/')
    .post(articleController.create)
    .then(function (req, res) {

      db.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    })

}


