const express = require('express');
 const bodyParser = require('body-parser');
 const app = express();
 const port = 3000;

 const data = [
   { id: 1, name: 'Luana', age: 35, company: 'None' },
   { id: 2, name: 'Cristina', age: 25, company: 'None' },
   { id: 3, name: 'C. S L.', age: 51, company: 'None' },
   { id: 4, name: 'Layla', age: 11, company: 'None' },
   { id: 5, name: 'Rayana', age: 31, company: 'None' },
 ];

 const findItem = id => {
   return data.find(item => item.id == id);
 };

 app.use(express.json());
 app.use(bodyParser.urlencoded({ extended: false }));

 app.get('/', (req, res) => {
   const result = { name: 'luana', instagram: 'luanacroft' };
   return res.json(result);
 });

 app.get('/:id', (req, res) => {
   const item = findItem(req.params.id);
   res.status(200).send({
       id: id
   });
   return res.json(item);
 });

 app.post('/', (req, res) => {
   const name = req.body.name;
   const site = req.body.site;
   return res.json([site, name]);
 });

 app.put('/:id', (req, res) => {
   const item = findItem(req.params.id);
   return res.json(item);
 });

 app.put('/:id', (req, res) => {
    const name = req.body.name;
    let item = findItem(req.params.id);
    item = { …item, name: name };
    return res.json(item);
  });

  app.delete('/:id', (req, res) => {
    const item = findItem(req.params.id);
    // deletar o item
    return res.json({});
  });

 app.listen(port, () => console.log('Listening on port ${port}!'));