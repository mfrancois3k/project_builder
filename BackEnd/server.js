const app = require('./app');
const db = require('./db');

 const PORT = process.env.PORT || 3000;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));



// mongoose
//   .connect(db)
//   .then(() => console.log("💻 Mondodb Connected"))
//   .catch(err => console.error(err));

// app.get("/", (req, res) => {
//   res.send("Server working 🔥");
// });
app.get("/test",(req, res) => {
  const { MongoClient, ServerApiVersion } = require('mongodb');
  const uri = "mongodb+srv://admin:admin@cluster0.bhkvg.mongodb.net/portfolio_builder?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  client.connect(err => {
      const collection = client.db("test").collection("devices");
      console.log("connection success");
      // perform actions on the collection object
      client.close();
  });
  return res.json("SUU")
})


const portfolioRoutes = require("./routes/api/portfoliosRoutes");



db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// app.listen(PORT, () => {
  //   console.log(`Listening on port: ${PORT}`)
  // })
  
  
  const port = process.env.PORT || 3000;
  
  app.listen(port, () => `Server running on port port 🔥  ${port}` )  
  
   app.use(portfolioRoutes);
  
 
app.use( "Portfolios", portfolioRoutes);