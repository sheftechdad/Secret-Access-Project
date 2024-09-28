//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app=express();
const port= 3000;
var IsAuthorised=false;

app.use(bodyParser.urlencoded({extended:true}));


function checkpassword( req, res,next){
    const password=req.body["password"];
    if (password=== "ILoveProgramming"){
        IsAuthorised=true;
    }
    next()

}
app.use(checkpassword);





app.get("/",(req, res )=>{
    
    res.sendFile(__dirname + "/public/index.html");

});

app.post("/check", (req, res) => {
    if (IsAuthorised){
        res.sendFile(__dirname + "/public/secret.html");
    }
    else{
        res.sendFile(__dirname + "/public/index.html");

    }
     
  });


app.listen(port, () =>{
    console.log(`listening the port ${port}`);
})