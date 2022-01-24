import express from 'express';
import Template from './../template';
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compress = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const app = express()
/*... configure express ... */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())
app.get('/', (req, res) => {
res.status(200).send(Template())
})
export default app