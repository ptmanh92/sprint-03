// Setup Express and dependencies
const express =  require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
app.use(bodyParser.json());
const PORT = 5000;

// Get routes
const reportsRoute = require('./routes/reports');

app.use(cors());
// Use routes
app.use('/api/reports', reportsRoute);

// Set view engine
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    

    res.render('pages/index.ejs');
});
app.use(express.static(__dirname + '/public'));

// Start server
app.listen(PORT, () => {
    console.log('Server started on PORT ' + PORT);
})