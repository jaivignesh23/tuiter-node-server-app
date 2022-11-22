import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime()+'';
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.topic = "SpaceX"
    newTuit.userName= "SpaceX",
    newTuit.time= "2h",
    newTuit.title= "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
    newTuit.image= "teslaBigLogo.jpg",
    newTuit.iconImg= "teslaBigLogo.jpg",
    newTuit.replies= 0,
    newTuit.retuits= 0,
    newTuit.handle= "@spacex",
    newTuit.dislikes = 0
    tuits.push(newTuit);
    res.json(newTuit);
  }
  
  
const findTuits  = (req, res) => {
    res.json(tuits);
}


const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const tuitIndex = tuits.findIndex(
      (t) => t._id === tuitdIdToUpdate)
    tuits[tuitIndex] = 
      {...tuits[tuitIndex], ...updates};
    res.sendStatus(200);
  }
  
const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter((t) =>
      t._id !== tuitdIdToDelete);
    res.sendStatus(200);
  }
  
  
export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}

