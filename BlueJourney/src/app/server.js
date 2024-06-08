const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(bodyParser.json());

const jsonFilePath = './Dados_CI.json';

// Middleware para registrar mensagens de log de solicitações recebidas
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] - Recebida uma solicitação ${req.method} na rota "${req.url}"`);
  next();
});

// Endpoint para adicionar um novo evento
app.post('/api/addEvent', (req, res) => {
  const newEvent = req.body;

  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).send('Error reading file');
    }

    try {
      const events = JSON.parse(data);
      events.push(newEvent);

      fs.writeFile(jsonFilePath, JSON.stringify(events, null, 2), (err) => {
        if (err) {
          console.error('Error writing file:', err);
          return res.status(500).send('Error writing file');
        }

        console.log(`[${new Date().toLocaleString()}] - Event added successfully:`, newEvent);
        res.status(200).send('Event added successfully');
      });
    } catch (error) {
      console.error('Error parsing JSON:', error);
      res.status(500).send('Error parsing JSON');
    }
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor está em execução na porta ${PORT}`);
});
