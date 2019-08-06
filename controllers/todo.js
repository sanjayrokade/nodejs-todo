const db = require('../db/db');

class todosControllers {
    getAlltodos(req, res) {
        return res.status(200).send({
            success: 'true',
            message: 'todos retieved successfully.',
            todos: db
        }); 
    }

    getSingletodo(req, res) {
        const id = parseInt(req.params.id, 10);
        db.map((todos) => {
            if(todos.id === id) {
                return res.status(200).send({
                    success: 'true',
                    message: 'todo retrieved successfully.',
                    todos
                });
            }
        });
        return res.status(404).send({
            success: 'false',
            message: 'todo does not exist'
        });
    }

    createtodo(req, res) {
        if(!req.body.title) {
            return res.status(400).send({
                success: 'false',
                message: 'Title required.'
            });
        } else if (!req.body.description) {
            return res.status(400).send({
                success: 'false',
                message: 'description required.'
            });
        }
        const todo = {
            id: db.length + 1,
            title: req.body.title,
            description: req.body.description
        }
        db.push(todo);
        return res.status(200).send({
            success: 'true',
            message: 'todo added successfully.',
            todo
        });
    }

    updatetodo(req, res) {
        const id = parseInt(req.params.id, 10);
        let todoFound;
        let itemIndex;
        db.map((todo, index) => {
            if(todo.id === id) {
                todoFound = todo;
                itemIndex = index;
            }
        });
        if(!todoFound) {
            return res.status(404).send({
                success: 'false',
                message: 'todo not found.'
            });
        }
        if(!req.body.title) {
            return res.status(400).send({
                success: 'false',
                message: 'Title is required.'            
            });
        } else if (!req.body.description) {
            return res.status(400).send({
                success: 'false',
                message: 'Description is required.'            
            });
        }
        const updatedTodo = {
            id: todoFound.id,
            title: req.body.title || todoFound.title,
            description: req.body.description || todoFound.description
        };
        db.splice(itemIndex, 1, updatedTodo);
        return res.status(201).send ({
            success: 'true',
            message: 'todo updated successfully.',
            updatedTodo
        });
    }

    deletetodo(req, res) {
        const id = parseInt(req.params.id, 10);
        db.map((todo, index) => {
            if(todo.id === id) {
                db.splice(index, 1);
                return res.status(200).send ({
                    success: 'true',
                    message: 'Todo deleted successfully.'
                });
            }
        });
        return res.status(404).send({
            success: 'false',
            message: 'todo does not exist'        
        });
    }
}

const todoController = new todosControllers();
module.exports = todoController;