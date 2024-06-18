const express = require('express');
const path = require('path');

const app = express();
const port = 9000;

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'home.html'));
});

app.get('/galery', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'galery.html'));
});

app.get('/pemesanan', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'pemesanan.html'));
});

app.get('/pemesanan2', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'pemesanan2.html'));
});

app.get('/pemesanan2b', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'pemesanan2b.html'));
});

app.get('/pemesanan3', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'pemesanan3.html'));
});

app.get('/pemesanan4', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'pemesanan4.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'about.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
