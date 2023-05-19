const express = require('express')
const path=require('path')
const handlebars=require('express-handlebars');
var methodOverride = require('method-override')
const app = express()
const route=require('./routes')
const port = process.env.PORT || 5000;
const passports = require("passport");
const session =require("express-session");

const db=require('./config/db');
const initPassportLocal = require('./app/auth/passportLocal');

db.connect();

app.use(passports.initialize());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}));
app.use(passports.session());

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ 
    extended:true
}));
app.use(express.json());

app.use(methodOverride('_method'));

app.engine('hbs',handlebars.engine({
      extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
initPassportLocal();
route(app);
let cors = require("cors");
app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})