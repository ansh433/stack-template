import 'dotenv/config';
import { WebSocketServer } from 'ws';

const PORT = process.env.WS_PORT || 3002;
const wss = new WebSocketServer({ port: Number(PORT) });

wss.on('connection', (ws) => {
  console.log('Client connected');
  
  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    ws.send(`Echo: ${message}`);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log(`WebSocket server running on port ${PORT}`);

export default wss;