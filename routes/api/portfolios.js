const express = require("express");
const { PortfolioModel } = require("../../models/Portfolio");

const router = express.Router();

router.get('/getPortfolio/:ownerName');

router.post('/createPortfolio', (req, res) => {
    const newPortfolio = new PortfolioModel({
        ownerName: req.OwnerName,
        ownerEmail: req.OwnerEmail,
        config: req.config,
        urlIdentifier: req.urlIdentifier,
    });
    newPortfolio.save();
}).then((payload) => console.log(payload, "successfuly portfolio entry"));

router.put('/modifyPortfolio')

router.delete('/deletePortfolio');

module.exports = router;
