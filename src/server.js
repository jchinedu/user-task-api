
require('dotenv').config();

const app = require('./app');
const connectDB = require('./config/db');


connectDB();


const PORT = process.env.PORT || 4000;
app.get('/', (req, res) => {
  res.send('User Task API is running ');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
