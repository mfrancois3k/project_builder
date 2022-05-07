
const  PortfolioModel  = require("../models/Portfolio");



const createPortfolio = async (req, res) => {
    try {
        const portfolio = await new PortfolioModel(req.body)    
        await portfolio.save()
        return res.status(201).json({
            portfolio,
        });
    } catch (err) {
        res.status(500).send(err)
    }
}

const getAllPortfolio = async (req, res) => {
    try {
        const porfolio = await PortfolioModel.find();
        return res.status(200).json({porfolio})
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getPorfolioById = async (req, res) => {
    try {
        const {id} = req.params;
        const porfolio = await PortfolioModel.findById(id)
        if (porfolio) {
            return res.status(200).json({ porfolio })
        }
        return res.status(400).send('Porfolio with the specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
// const { 
//     ownerName: req.OwnerName,
//     ownerEmail: req.OwnerEmail,
//     config: req.config,
//     urlIdentifier: req.urlIdentifier,
// } = req.body;



const updatePortfolio = (req, res) => {
    try {
        const { id } = req.params;
        const porfolio =  PortfolioModel.findByIdAndUpdate(id, req.body, { new: true}, (err, porfolio) => {
                if (err) {
                   return res.status(500).send(err)
                }
                if (!porfolio) {
                   return res.status(500).send('porfolio not found');
                }
                return res.status(200).json(porfolio);
            }
        )
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deletePortfolio = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await PortfolioModel.findByIdAndDelete(id);
        if (deleted) {
            return res.status(200).send('Portfolio deleted');
        }
        throw new Error('Portfolio not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


//  //make a post  with /createportfolo having try catch and new PortfolioModel(req.body)
// router.post('/createPortfolio', async (req, res) => {
//     const newPortfolio = new PortfolioModel(req.body);
//     try {
//         await newPortfolio.save();
//         res.send(newPortfolio);
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });

 


// //make a put  with /createportfolo

// router.put('/modifyPortfolio', async (req, res) => {
//     try {
//         const modifiedPortfolio = await PortfolioModel.findOneAndUpdate({ ownerName: req.params.ownerName }, req.body, { new: true });
//         res.send(modifiedPortfolio)
//     } catch (err) {
//         res.status(500).send(err)
//     }
// })


// router.get('/getPortfolioById/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const Portfolio = await PortfolioModel.findById(id);
        
//         if(Portfolio)  return res.status(200).json({Portfolio})
        
//     } catch (err) {
//         return res.status(500).send('portfolio with given id does not exist')
//     }
// })
// //using put /getPortfolioById/:id get id by findbyidAndUpdaterequest.params.id
//  router.put("/getPortfolioById/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const Portfolio = await PortfolioModel.findByIdAndUpdate(id, req.body, { new: true });
//         await PortfolioModel.save
//      } catch(err) {
//          return res.status(500).send(err.message)
//         } 
//  })

//   router.delete('/deletePortfolio', async (req, res) => {
//         try {
//             const deletedPortfolio = await PortfolioModel.findOneAndDelete( req.params.id );
          
//             if (Portfolio)  return  res.status(404).send("No item found");
      
//              return res.status(200).send();
//         } catch (err) {
//             return res.status(500).send(err.message)
//         }
//     }
//     );
    
    module.exports = {
        createPortfolio,
        getAllPortfolio,
        getPorfolioById,
        updatePortfolio,
        deletePortfolio,
    }
