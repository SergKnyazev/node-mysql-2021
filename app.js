// const Sequelize = require('sequelize');
const express = require('express');

const { database } = require('./database/database.js');

const { usersRouter } = require('./routers/users.router.js');

const app = express();

app.use(usersRouter);

// "host": "remotemysql.com",
// "user": "09OhAjwTap",
// "password": "8IxnrlpJPw",
// "database": "09OhAjwTap",

// определяем объект Sequelize
// const sequelize = new Sequelize('09OhAjwTap', '09OhAjwTap', '8IxnrlpJPw', {
//   dialect: 'mysql',
//   host: 'remotemysql.com',
//   define: {
//     timestamps: false,
//   },
// });



//TODO ::: users.router ругается на отсутствие сущности User
//TODO ::: вынести User в отдельный файл и импортировать его по необходимости



// определяем модель User
// const User = sequelize.define('user', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//     allowNull: false,
//   },
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   age: {
//     type: Sequelize.INTEGER,
//     allowNull: false,
//   },
// });

app.set('view engine', 'hbs');

// синхронизация с бд, после успшной синхронизации запускаем сервер
database
  .sync()
  .then(() => {
    console.log('+++ Database MySQL is connected...');
    app.listen(3000, function () {
      console.log('+++ Server started on PORT=3000...');
    });
  })
  .catch((err) => console.log(err));

// //получение данных
// app.get('/', function (req, res) {
//   User.findAll({ raw: true })
//     .then((data) => {
//       res.render('index.hbs', {
//         users: data,
//       });
//     })
//     .catch((err) => console.log(err));
// });

// app.get('/create', function (req, res) {
//   res.render('create.hbs');
// });

// // добавление данных
// app.post('/create', urlencodedParser, function (req, res) {
//   if (!req.body) return res.sendStatus(400);

//   const username = req.body.name;
//   const userage = req.body.age;
//   User.create({ name: username, age: userage })
//     .then(() => {
//       res.redirect('/');
//     })
//     .catch((err) => console.log(err));
// });

// // получаем объект по id для редактирования
// app.get('/edit/:id', function (req, res) {
//   const userid = req.params.id;
//   User.findAll({ where: { id: userid }, raw: true })
//     .then((data) => {
//       res.render('edit.hbs', {
//         user: data[0],
//       });
//     })
//     .catch((err) => console.log(err));
// });

// // обновление данных в БД
// app.post('/edit', urlencodedParser, function (req, res) {
//   if (!req.body) return res.sendStatus(400);

//   const username = req.body.name;
//   const userage = req.body.age;
//   const userid = req.body.id;
//   User.update({ name: username, age: userage }, { where: { id: userid } })
//     .then(() => {
//       res.redirect('/');
//     })
//     .catch((err) => console.log(err));
// });

// // удаление данных
// app.post('/delete/:id', function (req, res) {
//   const userid = req.params.id;
//   User.destroy({ where: { id: userid } })
//     .then(() => {
//       res.redirect('/');
//     })
//     .catch((err) => console.log(err));
// });



/*
*
* const express = require('express');
const path = require('path');
const cors = require('cors');
const { database } = require('./database/database.js');
const { worksRouter } = require('./backend/routes/works.router.js');
const { timetrackRouter } = require('./backend/routes/timetrack.router.js');

const app = express();
const PORT = process.env.PORT ?? 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(timetrackRouter);
app.use(worksRouter);

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  })
  console.log('Process.env.NODE_ENV === production ');
}

(async function startApp() {
  try {
    app.listen(PORT, () => {
      console.log(`+++ Server has been started on port ${PORT}...!`)
    });
    await database.getConnection(err => {
      err === null && console.log('+++ The connection to the MySQL backend is successfully...!');
      err !== null && console.error('ERROR of connect to MySQL : ' + err.message);
    })
  } catch (err) {
    console.log(`ERROR function startAPP with err=${err}`)
  }
}())

// startApp()

* **/
