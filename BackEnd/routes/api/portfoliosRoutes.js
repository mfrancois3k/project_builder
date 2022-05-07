const { Router } = require('express');
const controllers = require('../../controllers')
const router = Router();


router.get('/', (req, res) => res.send('This is the root!'))
router.post('/createPortfolio', controllers.createPortfolio)
router.get('/getPortfolio/', controllers.getAllPortfolio)
router.get('/getPortfolio/:ownerName', controllers.getPorfolioById);
router.put('/modifyPortfolio/:ownerName', controllers.updatePortfolio);
router.delete('/deletePortfolio/:ownerName', controllers.deletePortfolio);


module.exports = router; 



