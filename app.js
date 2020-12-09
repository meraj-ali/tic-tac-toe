const express = require("express");
const app = express();
app.set('view engine', 'ejs');

const server = require("http").Server(app);
const io = require("socket.io")(server);

// circle and x class name assingment
const x_class = "x",circle_class="circle";
// giving chance one by one
var turn = true;

app.use(express.static("public"));

app.get("/",function(req,res){
  res.render("index",{useUrlencoded:true});
});

app.post("/",function(req,res){
  res.render("start",{useUrlencoded:true});
});




io.on("connection",function(socket){
  socket.on("add-class",function(data){
    if(turn){
      io.sockets.emit("broadcast",{id:data.id,className:x_class});

    }else{
      io.sockets.emit("broadcast",{id:data.id,className:circle_class});

    }
    turn = !turn;
  });


  socket.on("disconnect",socket =>{
    console.log('USER disconnect');
  });
});




server.listen(3000,function(){
  console.log("server is running on port 3000");
});
