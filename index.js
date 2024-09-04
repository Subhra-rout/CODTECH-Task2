import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import fileUpload from "express-fileupload";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(fileUpload());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/home.html");
})
app.get("/editor", (req, res) => {
    res.sendFile(__dirname + "/public/editor.html");
});
app.get("/about",(req,res)=>{
    res.sendFile(__dirname + "/public/about.html");
})
app.post("/upload",(req,res)=>{
    let file =req.files.image;
    let date = new Date();
    // image name
    let imageName =date.getDate() + date.getTime() + file.name;
    // image upload path
    let path = "public/uploads/" + imageName ;

    // create upload
    file.mv(path,(err,result)=>{
        if(err){
            throw err;
        }
        else{
            // our image upload path
            res.json(`uploads/${imageName}`)
        }
    })
})
app.get("/:blog",(req,res)=>{
    res.sendFile(__dirname + "/public/blog.html");
})

app.use((req, res)=>{
    res.json("404");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});