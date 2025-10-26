const express = require('express');
const cors = require('cors');
const pool = require('./db');
const app = express();

const PORT = process.env.PORT || 2500;

app.use(cors());

app.get('/', (req, res) => {
    res.send("Issue Tracker")
});

app.get('/issues', async (req, res) => {
    const result = await pool.query('SELECT * FROM issues')
    res.json(result.rows);
})

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));