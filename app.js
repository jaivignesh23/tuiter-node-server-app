import express from 'express';
import cors from 'cors'
import HelloController
  from "./controllers/hello-controller.js"
import UserController
  from "./controllers/users/users-controller.js"
import TuitsController
  from "./controllers/tuits/tuits-controller.js";
  
import mongoose from "mongoose";
const CONNECTION_STRING = 'mongodb+srv://jaivm:mongopass@cluster0.fe7z0mf.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(cors())
app.use(express.json());
HelloController(app)
UserController(app)
TuitsController(app)
app.listen(process.env.PORT || 4000)

