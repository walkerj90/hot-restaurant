const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservation = [
  {
    name: 'Ahmed',
    email: 'ahmed@example.com',
    phoneNumber: '000-000-0000',
    uniqueID() {
      var string = this.name.substr(0, 3);
      var start = this.phoneNumber.length - 4;
      string += this.phoneNumber.substr(start, 4);
      return string;
    }
  }
];



// Basic route that sends the user first to the AJAX Page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

app.get('/api/tables', (req, res) => res.json(tables));

// Displays all characters
app.get('/api/reservation', (req, res) => res.json(reservation));

// Create New Reservations - takes in JSON input
app.post('/api/reservation', (req, res) => {

  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware


  reservation.push(req.body);
  res.json(req.body);
});

//const reservation = new Reservation(yoda.name, yoda.phoneNumber, yoda.email)
// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
