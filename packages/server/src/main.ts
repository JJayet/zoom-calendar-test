import * as express from 'express';
import * as bodyParser from 'body-parser'
import { createMeeting, getMeetings } from './app/zoom'
import * as dotEnv from 'dotenv-flow'
dotEnv.config()

const app = express();
app.use(bodyParser.json())

app.get('/meetings', async (_, res) => {
  const meetings = await getMeetings()
  res.send({ result: meetings });
});

app.post('/create', async (req, res) => {
  console.log(req.body)
  const { topic, startTime, duration } = req.body
  const meeting = await createMeeting(topic, startTime, duration)
  res.send({ result: meeting });
})

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
