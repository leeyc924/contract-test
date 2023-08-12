import express from 'express';
import cors from 'cors';
import routes from './router';

const port = process.env.PORT || 8005;
const app = express();

const init = () => {
  app.use(cors());
  app.use(routes);
  // app.use(authMiddleware);
  app.listen(port, () => {
    console.log('Express is listening on port', port);
  });
};

init();
