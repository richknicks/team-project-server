const express = require('express');
const server = express();
server.use(express.json());
const PORT = 5432;

server.listen(PORT, () => console.log(`\n ** API on http://localhost:${PORT} **\n)`));