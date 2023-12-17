//This file contains the server side code for the PhoneBreak app.
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

// Create an express application on port 3001
const app = express();
const port = 3001;

//use cors to allow cross origin resource sharing
app.use(cors());

//use express.json parse the body of the request from the client
app.use(express.json());

// Create a connection to mysql database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'phonebreak_app',
  password: 'password',
  database: 'phonebreak_db_schema',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

app.post('/updateData', (req, res) => {
  // Log the request body to the console for debugging
  console.log('Received data:', req.body);

  // Extract the data from the request body
  const user_id = req.body.userId;
  const play_time = req.body.playTime;
  const play_date = new Date().toISOString().slice(0, 19).replace('T', ' ');

  //for debugging what values are being sent to the sql server
  console.log('play_date:', play_date);
  console.log('play_time:', play_time);
  console.log('user_id:', user_id);

  // Insert a new record
  const insertQuery = 'INSERT INTO game_data (user_id, play_date, play_time) VALUES (?, ?, ?)';
  connection.query(insertQuery, [user_id, play_date, play_time], (insertErr, insertResults) => {
    if (insertErr) {
      console.error('Error executing MySQL query:', insertErr);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json({ message: 'Data inserted successfully' });
  });
});

// Get the most recent entry for the user
app.get('/getRecentData', (req, res) => {
  const { userId } = req.query;
  const query = 'SELECT play_date, play_time FROM game_data WHERE user_id = ? ORDER BY play_date DESC LIMIT 1';
  connection.query(query, [userId], (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results[0]); // Send the most recent entry as JSON response
  });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
