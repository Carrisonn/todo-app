import Sequelize from 'sequelize'

const DB = new Sequelize('todo-app', 'root', 'Car2001los..', {
  host: 'localhost',
  dialect: 'mysql',
  define: { timestamps: false },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

export default DB