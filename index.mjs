import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import { formatResponse } from './utils/formatResponse.mjs';
import { InitializeDB } from './db/mongooseConn.mjs';
import { authRouter } from './users/routes.mjs';
import { verifyUser } from './utils/middleware.mjs';
// import { uploadRouter } from './storage/route.mjs';
import { seedRestaurants } from './restaurants/seed.mjs';
import { restaurantRouter } from './restaurants/routes.mjs';

// dotenv.config();

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

app.use('/auth', authRouter);

// app.use('/upload', uploadRouter);
app.use('/restaurant', restaurantRouter);

// 404 router
app.use('/', (req, res) =>
  res.status(404).send(`Missing route ${req.method} ${req.path}`)
);

// Global error handling
app.use((err, _req, res, next) => {
  if (err) {
    res.status(500).send(formatResponse('Error occured', null, err.message));
  }
});

// start the Express server
app.listen(PORT, async () => {
  console.log(`Server is running on port: ${PORT}`);
  await InitializeDB();

  await seedRestaurants();
});
