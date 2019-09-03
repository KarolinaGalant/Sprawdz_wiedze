const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express ();

const cors = require('cors');
app.use(cors());
app.options('*',cors());

const pagesRouter = require('./routes/PagesRouter');
const userRouter = require('./routes/UserRouter');
const applicationsRouter = require('./routes/ApplicationsRouter');

var logger = require('morgan');
var constants =require('./db');
const GlobalPath = "/api";


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));
app.use(cookieParser());

app.use(`${GlobalPath}/pages`, pagesRouter);
app.use(`${GlobalPath}/user`, userRouter);
app.use(`${GlobalPath}/applications`, applicationsRouter);



console.log(constants.ConnectToDB);
const db=constants.ConnectToDB;

   //Connect
   db.connect((err)=>{
    if(err){
        throw err;
    }
    else{
        console.log('MySql connected...');
    };
    console.log('Connection established');
    });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

module.exports = app;