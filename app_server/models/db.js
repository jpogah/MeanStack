var mongoose =  require('mongoose');
var dbURI = 'mongodb://localhost/churcharoundme';
if (process.env.NODE_ENV === 'production') {
  dbURI = 'mongodb://admin:password@ds139072.mlab.com:39072/churcharoundme';
}
mongoose.connect(dbURI);

 //check for successful connection
mongoose.connection.on('connected', function(){
  console.log('Mongoose connected to: ' + dbURI);
});

// check for connection error
mongoose.connection.on('err', function(err){
  console.log('Mongoose connection error: ' + err);
});

// check for disconnection event
mongoose.connection.on('disconnected', function(){
  console.log('Mongoose disconnected');
});

var gracefulShutdown = function(msg, callback){
  mongoose.connection.close(function(){
    console.log('Mongoose disconnected through ' + msg);
    callback();
  });
};

process.once('SIGUSR2', function(){
  gracefulShutdown('nodemon restart', function(){
    process.kill(process.pid,'SIGUSR2');
  });
});

process.on('SIGINT', function(){
  gracefulShutdown('App termination', function(){
    process.exit(0);
  });
});

process.on('SIGTERM', function(){
  gracefulShutdown('Heroku app shutdown', function(){
    process.exit(0);
  });
});
require('./churches');
