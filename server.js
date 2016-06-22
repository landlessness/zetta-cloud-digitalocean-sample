var zetta = require('zetta');

var SERVER_NAME = process.argv[2]
var PORT = process.argv[3];

zetta()
  .name(SERVER_NAME)
  .expose('*')
  .listen(PORT, function(err) {
    if(err) {
      console.error(err);
      process.exit(1);
    }
    console.log('running on http://localhost:' + PORT)
  });

// pm2 start server.js --name dev.1360 -- dev 1360