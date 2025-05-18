const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/echo', (req, res) => {
  const { message } = req.body;
  res.json({ echoedMessage: `You said: ${message}` });
});

app.listen(3001, () => {
  console.log('Backend running on http://localhost:3001');
});
