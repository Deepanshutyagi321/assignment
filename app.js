import  express  from "express";
import mongoose from "mongoose";



//import routes
import priceAndvolumeRoute from "./Route/priceAndvolume.js";
// import showRoute from "./Route/priceAndvolume.js"


let app = express();
let port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

main().then(() => {
    console.log("connect to DB")
}).catch((err) => {
    console.log(err);
}) 

async function main() {
  await  mongoose.connect("mongodb://127.0.0.1:27017/assignment")
}


app.use("/api",priceAndvolumeRoute);

app.listen(port,()=>{
    console.log(`server listen to ${port}`)
})