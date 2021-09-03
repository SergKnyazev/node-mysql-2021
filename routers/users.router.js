const Router = require('express');
const { usersController } = require('../controllers/users.controller.js');
const bodyParser = require('body-parser');

const usersRouter = Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

usersRouter.route('/')
  .get(usersController.getAllUsers); //получение данных

// рендер формы добавления данных
usersRouter.get('/create', usersController.renderCreatePage);
// добавление данных
usersRouter.post('/create', urlencodedParser, usersController.createUser);
// удаление данных по id
usersRouter.post('/delete/:id', urlencodedParser, usersController.removeUser);
// получаем пользователя по id для редактирования
usersRouter.get('/edit/:id', usersController.editUser);
// обновление данных в БД
usersRouter.post('/edit', urlencodedParser, usersController.setEditedUser);



//**************************************
// app.route('/book')
//   .get(function(req, res) {
//     res.send('Get a random book');
//   })
//   .post(function(req, res) {
//     res.send('Add a book');
//   })
//   .put(function(req, res) {
//     res.send('Update the book');
//   });

module.exports = { usersRouter }
