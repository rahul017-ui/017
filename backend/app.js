const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const cors = require("cors");
const route = require('./routes/user')
const bodyParser = require('body-parser');
const devConfig = require('./config/development');


var app = express();
const PORT = process.env.PORT || 3000;
dotenv.config({ path: './config/config.env' })

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Passport config
require('./config/passport')(passport)
// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use(express.urlencoded({extended:true}));
app.use('/download', express.static('./uploadxlsxandcsv'))
app.use(express.static('public'))
app.use(bodyParser.json());


//app.set('view engine','ejs');
app.set('view engine', 'ejs');

app.use(
  session({
    secret: devConfig.secret,
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
)
var db = mongoose.connection;

db.on('connected', function () {
  console.log('Mongoose connection done');
});


db.on('error', function (err) {
  console.log('Mongoose default connection error: ' + err);
});

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())


//app.use(require("./routes/index"))
app.use('/auth', require('./routes/auth/auth'));
app.use("/", route);






app.listen(PORT, console.log(`listening at ${PORT}`))
