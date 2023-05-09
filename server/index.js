const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://blog:xXDjVcg0nukaSGif@cluster0.smfjp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// datas

async function run() {
  try {
    await client.connect();
    const bolgCollection = client.db("blog").collection("blogs");
   app.post('/blogs', async(req, res) =>{
const blog = req.body;
console.log(blog);
const result = await bolgCollection.insertOne(blog);

   })
  } finally {
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello...");
});

app.listen(port, () => {
  console.log(`Listening ${port}`);
});
