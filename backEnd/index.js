import express from "express";
import cors from "cors";
import nodemon from "nodemon";
import mongoose from "mongoose";
// import { route } from "./routes"; // Com "export" ;
import routes from "./routes.js"; // Com "export default";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
mongoose
  .connect(process.env.MONGO_STRING_URL)
  .then(() => {
    console.log("DataBase Connected");

    const PORT = 3001;
    app.listen(PORT, () => {
        console.log(`Server is Run in PORT: ${PORT}`);
    })
    
  })
  .catch((error) => {
    console.log(error.message);
  });

app.get("/", (req, res) => {
    console.log("testando o get")
    return res.status(200).send('Rota get "/" ');
});


app.use('/users', routes);


// const PORT = 3001;
// app.listen(PORT, () => {
//     console.log(`Server is Run in PORT: ${PORT}`);
// })

