const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();


const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const taskRoutes = require('./routes/task.routes');


const errorMiddleware = require('./middlewares/error.middleware');
const e = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);


app.use(errorMiddleware);

module.exports = app;