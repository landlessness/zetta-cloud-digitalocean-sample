var zetta = require('zetta');

var PORT = 1337;

zetta()
  .name('demo')
  .properties({style: {colors: {primary: {decimal: {red: 255, green: 0, blue: 0}, hex: '#F00'}}}})
  .expose('*')
  .listen(PORT, function(err) {
    if(err) {
      console.error(err);
      process.exit(1);
    }
    console.log('running on http://localhost:', PORT)
  });
