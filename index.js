const express = require("express");
const serveStatic = require("serve-static");
const app = express();

app.use(logger);

app.get("/books",(req,res) =>{
    return res.send({route: "/books"});
});


app.get("/libraries",(req,res) =>{
    return res.send({route: "/libraries",permission: true});
});

app.get("/authors",(req,res) =>{
    return res.send({route: "/authors",permission: true});
});

function logger(req,res,next){
    console.log("before route handler logger");
    next();
    console.log("after route handler logger");
};

function checkPermission(req,res,next){
    if(req.path==="/libraries"){
        req.role= {permission:true};
    }else if(req.path === "/authors"){
        req.role = {permission:true};
    }else{
        req.role = "not allowed";
    }
};

app.listen(8080, () =>{
    console.log("Litening Port 8080");
})