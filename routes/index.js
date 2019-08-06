const express = require('express');
const db = require('../db/db');
const todoController = require('../controllers/todo');

const router = express.Router();

router.get('/api/v1/todos/', todoController.getAlltodos);
router.get('/api/v1/todos/:id', todoController.getSingletodo);
router.post('/api/v1/todos/', todoController.createtodo);
router.put('/api/v1/todos/:id', todoController.updatetodo);
router.delete('/api/v1/todos/:id', todoController.deletetodo);

module.exports = router; 
