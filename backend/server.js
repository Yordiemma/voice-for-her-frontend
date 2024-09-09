const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path'); // Add path module to work with absolute paths
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Define the path to the SQLite database file (absolute path)
const dbPath = path.resolve(__dirname, './abuse_reports.db');

// Connect to SQLite database
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database.');

    // Create the reports table if it doesn't exist, including the ethnic_group column
    db.run(`
      CREATE TABLE IF NOT EXISTS reports (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        age INTEGER,
        location TEXT,
        ethnic_group TEXT,
        type_of_abuse TEXT,
        description TEXT
      )
    `, (err) => {
      if (err) {
        console.error('Error creating table:', err.message);
      } else {
        console.log('Table created or verified.');
      }
    });
  }
});

// Route to submit a new report
app.post('/reports', (req, res) => {
  const { age, location, ethnic_group, type_of_abuse, description } = req.body;

  // Basic validation to ensure all required fields are provided
  if (!age || !location || !ethnic_group || !type_of_abuse || !description) {
    return res.status(400).send('All fields (age, location, ethnic_group, type_of_abuse, description) are required.');
  }

  // SQL query to insert the data into the database
  const query = `
    INSERT INTO reports (age, location, ethnic_group, type_of_abuse, description)
    VALUES (?, ?, ?, ?, ?)
  `;

  // Run the query
  db.run(query, [age, location, ethnic_group, type_of_abuse, description], function (err) {
    if (err) {
      console.error('Error inserting report:', err.message);  // Log the exact error
      res.status(500).send('Error submitting the report');
    } else {
      res.status(201).send({ id: this.lastID });  // Send back the ID of the new report
    }
  });
});

app.get('/reports', (req, res) => {
  const query = `SELECT * FROM reports`;

  db.all(query, [], (err, rows) => {
    if (err) {
      console.error('Error fetching reports:', err.message);
      res.status(500).send('Error retrieving reports');
    } else {
      res.status(200).json(rows);  // Send back all the reports as JSON
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
