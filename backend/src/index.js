import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
const PORT = 5000;
const app = express();
app.use(bodyParser.json());
app.use(cors());



let todos = [];

app.get('/api/todos',(req,res)=>{
    res.json(todos);
});

app.post('/api/todos',(req,res)=>{
    const newTodo = req.body;
    todos.push(newTodo);
    res.status(201).json(newTodo);
})

app.listen(PORT,()=>{
    console.log(`your serve is running on http://localhost:${PORT}`);
})