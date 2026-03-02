import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'http-backend' });
});

app.listen(PORT, () => {
  console.log(`HTTP server listening on port ${PORT}`);
});

export default app;