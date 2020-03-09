const express = require('express');
const server = express();
server.use(express.json());
const PORT = 5432;

let books =[{
    id:1,
    title:"Becoming a Devoloper",
    year:2020
},
{
    id:2,
    title:"A book",
    year:2021
},
{
    id:3,
    title:"Some book",
    year:2019
}]

server.get('/api/books', (req,res)=>{
    res.status(200).json(books)
})

server.listen(PORT, () => console.log(`\n ** API on http://localhost:${PORT} **\n)`));