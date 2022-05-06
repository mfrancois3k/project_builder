const express = require("express");

const router = express.Router();

router.get('/getPortfolio/:ownerName');

router.post('/createPortfolio');

router.put('/modifyPortfolio')

router.delete('/deletePortfolio');

module.exports = router;
