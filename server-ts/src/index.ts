import path from 'path';
import http from 'http';
import Express, { Application, Request, Response } from 'express';
import mainRouter from './router/main';

const PORT = 3000
const app: Application = Express();
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));
/* app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
 */

app.use('/static', Express.static(path.join(__dirname, 'static')));

app.use('/', mainRouter);

const server = http.createServer(app);
server.listen(PORT);

server.on('error', error => {
  console.error(`Error HTTPD Server: ${error.message}`);
  process.exit();
});

server.on('listening', () => {
  console.info('Application listening on http://localhost:' + PORT);
});
