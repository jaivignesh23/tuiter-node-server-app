import express from 'express';
import HelloController
  from "./controllers/hello-controller.js"
import UserController
  from "./controllers/users/users-controller.js"
import TuitsController
  from "./controllers/tuits/tuits-controller.js";

const app = express()
app.use(express.json());
HelloController(app)
UserController(app)
TuitsController(app)
app.listen(process.env.PORT || 4000)

