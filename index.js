const express = require('express')
const liquid = require('express-liquid');

const app = express()

app.set('view engine', 'liquid');

app.engine('liquid', liquid({
  includeFile: function (filename, callback) {
    fs.readFile(filename, 'utf8', callback);
  },
  context: liquid.newContext(),
  customTags: {},
  traceError: false
}));
app.use(liquid.middleware);


app.listen(1337, function() {
  console.log('test')
})
