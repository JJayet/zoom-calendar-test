import * as express from 'express';
import { createMeeting, getMeetings } from './app/zoom'
import * as dotEnv from 'dotenv-flow'
dotEnv.config()

const app = express();

app.get('/meetings', async (_, res) => {
  const meetings = await getMeetings()
  res.send({ result: meetings });
});

app.post('/create', async (req, res) => {
  const meeting = await createMeeting('temp title', new Date(), 90)
  res.send({ result: meeting });
})

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
