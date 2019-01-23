const express = require('express');
const exphbs = require('express-handlebars');
const lessMiddleware = require('less-middleware');
const minify = require('express-minify');
const reload = require('reload');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(lessMiddleware('public'));
app.use(minify());
app.use(express.static('public'));

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

require('./routes/routes.js')(app);

app.listen(PORT, () => {
  console.log('Server listening on ', PORT);
});
reload(app);
