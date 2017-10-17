const express = require('express'),
    authRoutes = require('./routes/auth-routes'),
    passportSetup = require('./config/passport-setup'),
    app = express();

//set up view engine
app.set('view engine', 'pug');

//set up routes
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(8000, () => {
    console.log('listening on port 8000');
});