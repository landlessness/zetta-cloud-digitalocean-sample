var zetta = require('zetta');

var PORT = 1337;

zetta()
  .name('demo')
  .properties({style: {backgroundColor: '#E84625'}})
  .expose('*')
  .listen(PORT, function(err) {
    if(err) {
      console.error(err);
      process.exit(1);
    }
    console.log('running on http://localhost:', PORT)
  });
