/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';

import * as expressStaticGzip from 'express-static-gzip';

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to prod-server!' });
});

app.use(expressStaticGzip('dist/apps/victor-videos', {}));
app.use('/home', expressStaticGzip('dist/apps/victor-videos', {}));
app.use('/detail/*', expressStaticGzip('dist/apps/victor-videos', {}));

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
