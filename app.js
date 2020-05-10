// Setup Express and dependencies
const express =  require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const PORT = 5000;

// Get routes
const reportsRoute = require('./routes/reports');

// Use routes
app.use('/api/reports', reportsRoute);

// Set view engine
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    
    res.render('pages/index.ejs');
});

// Start server
app.listen(PORT, () => {
    console.log('Server started on PORT ' + PORT);
})