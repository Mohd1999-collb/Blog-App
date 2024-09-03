/* import packages*/
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

/*import files */
const connectDb = require('./config/db')
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');

/*middleware */
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

/*import variables */
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT

connectDb(MONGO_URI);

// User Routes
app.use('/register', userRoutes);
app.use('/login', userRoutes);
app.use('/all-users', userRoutes);
app.use('/', userRoutes)

// Blog Routes
app.use('/posts', blogRoutes)
app.use('/posts/:id', blogRoutes)
app.use('/user-blog/:id', blogRoutes)
app.use('/', blogRoutes)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`.blue.bold));

