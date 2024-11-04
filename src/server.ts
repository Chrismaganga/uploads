import express, { Request, Response } from 'express';

import bodyParser from 'body-parser';
import fileRoutes from './routes/fileRoutes';
import methodOverride from 'method-override';
import path from 'path';

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/', fileRoutes);

// Start server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Export app and server
export { app, server };
