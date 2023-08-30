//Importing
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

//Sending This Response On Request On Port 3000

app.post('/api/question', (req, res) => {
  const question = req.body.question;
  // Decided Reply
  const response = " Hello from GenAI! ";
  res.json({ response });
});

app.listen(PORT, () => {
  console.log(`Mock API server is running on port ${PORT}`);
});
