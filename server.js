const express = require('express'),
    authRoutes = require('./routes/auth-routes'),
    passportSetup = require('./config/passport-setup'),
    port = 3000;
    app = express();

app.set('view engine', 'pug');

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});