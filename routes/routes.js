module.exports =  app => {

  app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/earthsFall', (req, res) => {
    res.render('earthsFall');
  });

  // No code below this line!
}