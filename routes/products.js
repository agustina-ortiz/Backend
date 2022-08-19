const express = require('express');
const router = express.Router();
const contenedorMemoria = require('../contenedor/contenedorMemoria')
const data = new contenedorMemoria();

router.get('/', function(req, res, next) {
  res.send({data:data.getAll()});
});

router.get('/:id', (req, res) => {
  let obj = data.getById(req.params.id)
  if (obj.length == 0){
    res.send('No se ha encontrado el producto')
  } else {
    res.send({data: obj})
  }
});

router.post('/', ({body},res) => {
  data.addOne(body)
  res.send({datos:body})
});

router.put('/:id', (req, res) => {
  let id = req.params.id;
  res.send({datos:req.body})
});

router.delete('/:id', (req, res) => {
  let newData = data.deleteById(req.params.id)
  res.send({datos: newData})
});

module.exports = router;
