const db = require('../db')
const ProfolioModel = require('../models/Portfolio')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))




const main = async () => {
  const portfolios = [
        {
            ownerName: 'John',
            ownerEmail: 'john@gmail.com',
            config: {
                title: 'Johns Portfolio',
                description: 'This is Johns portfolio',
                urlIdentifier: 'johns-portfolio'
            },
            items: [
                {
                    title: 'Johns item 1',
                    link: 'www.google.com'
                },
                {
                    title: 'Johns item 2',
                    link: 'www.google.com'
                }
            ]
        },

  await PortfolioModel.insertMany( portfolios)
  console.log("Created portfolio!")
    ]
}

const run = async () => {
  await main()
  db.close()

}

run()