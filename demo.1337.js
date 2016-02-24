var zetta = require('zetta');

var PORT = 1337;

zetta()
  .name('demo')
  .expose('*')
  .listen(PORT, function(err) {
    if(err) {
      console.error(err);
      process.exit(1);
    }
    console.log('running on http://localhost:', PORT)
  });
