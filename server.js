var argv = require('minimist')(process.argv.slice(2));
var zetta = require('zetta');

var PORT = argv['p'] || 1337;

zetta()
  .name('hello')
  .expose('*')
  .listen(PORT, function(err) {
    if(err) {
      console.error(err);
      process.exit(1);
    }
    console.log('running on http://localhost:', PORT)
  });
