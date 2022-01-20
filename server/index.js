const app = require('./app.js');
const startConnection = require('./database.js');

startConnection()
app.listen(app.get('port'), () => {
  console.log('serve on port', app.get('port'))
})