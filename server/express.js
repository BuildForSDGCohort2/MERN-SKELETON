import express from 'express';
import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes';
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compress = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
/*... configure express ... */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());
app.use('/', userRoutes);
app.use('/', authRoutes);
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ "error": err.name + ": " + err.message })
  } else if (err) {
    res.status(400).json({ "error": err.name + ": " + err.message })
    console.log(err)
  }
})
export default app
