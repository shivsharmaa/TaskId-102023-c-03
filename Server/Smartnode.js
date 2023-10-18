
server.listen(9898);
const express = require('express');
const axios = require('axios');

const app = express();
const port = 5000; 
app.get('/api/getData', async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=1');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data' });
    }
});

app.listen(port, () => {
    console.log('Server  ${port}');
});


        

