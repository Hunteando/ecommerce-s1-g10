require('dotenv').config();
const server = require('./src/models/server');
const port = process.env.PORT;

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
})