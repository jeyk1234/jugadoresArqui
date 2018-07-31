const express = require('express');
const router = express.Router();
const Task = require('../models/task');


router.get('/', (req, res) => {
  Task.find((err, docs) => {
      if (!err) { res.send(docs); }
      else { console.log('Error :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.get('/:posicion', (req, res) => {
  Task.find({ "posicion": req.params.posicion }, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.put('/', (req, res) => {
  var jug = req.body;
  j=new Task({
      nombre: jug.nombre,
      posicion: jug.posicion,
      numeroCamiseta: jug.numeroCamiseta,
      equipo: jug.equipo,
      fechaNacimiento: jug.fechaNacimiento,
      //detalles: [{
      //  estatura: jug.estatura,
      //  peso: jug.peso
      //   }]
  });
  j.save((err, jug) => {
      if (!err) {         return res.status(200).send(`Jugador Guardado }`);
  }
      else { console.log('Error en Jugador guardado :' + JSON.stringify(err, undefined, 2)); }
  });
});

/*
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.send( {
    tasks
  });
});

router.post('/add', async (req, res, next) => {
  const task = new Task(req.body);
  await task.save();
  res.redirect('/');
});

router.get('/turn/:id', async (req, res, next) => {
  let { id } = req.params;
  const task = await Task.findById(id);
  task.status = !task.status;
  await task.save();
  res.redirect('/');
});

router.get('/edit/:id', async (req, res, next) => {
  const task = await Task.findById(req.params.id);
  console.log(task)
  res.render('edit', { task });
});

router.post('/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  await Task.update({_id: id}, req.body);
  res.redirect('/');
});

router.get('/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await Task.remove({_id: id});
  res.redirect('/');
});
*/
module.exports = router;
