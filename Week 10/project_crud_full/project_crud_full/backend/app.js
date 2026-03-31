require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { sequelize } = require('./models');

const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve uploads
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('DB connected.');
  } catch (err) {
    console.error('DB connection error:', err);
  }
});
