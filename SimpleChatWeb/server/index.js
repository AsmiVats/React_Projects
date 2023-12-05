const http= require("http");
const express= require("express");
const cors = require("cors");
const socketIO = require("socket.io");


const app = express();

const users=[{}];

app.use(cors());
app.get("/",(req,res)=>{
    res.send("");
})

const server = http.createServer(app);

const io = socketIO(server);

io.on("connection",(socket)=>{
    console.log("New Connection");

    socket.on('joined',({user})=>{

        users[socket.id]=user;

        console.log(`${user} has joined`);

        socket.broadcast.emit('userJoined',{user:"Admin",message:`${users[socket.id]} has joined`});
        socket.emit('Welcome',{user:"Admin",message:`Welcome to the Chat,${users[socket.id]}`})

    })

    socket.on('message',({message, id})=>{
        io.emit('sendMessage', {user:users[id],message,id});
    })

    socket.on('disconnect', () => {
    if (users[socket.id]) {
        socket.broadcast.emit('leave', { user: "Admin", message: `${users[socket.id]} has left` });
        console.log(`${users[socket.id]} has left`);
        delete users[socket.id]; 
    }
});


})

server.listen(4500,()=>{
    console.log(`listening on port 4500`);
})