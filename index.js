import express from 'express'
import router from './routes/router.js'
import DB from './config/DB.js'

const app = express()

const PORT = process.env.PORT ?? 8080

DB.authenticate()

app.disable('x-powered-by')

app.use(express.json())

app.use(express.static('client'))

app.use('/', router)

app.listen(PORT)
