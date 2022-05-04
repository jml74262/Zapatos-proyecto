import express, { application } from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import ZapatoRepository from './ZapatoRepository';
import respond from './respond';
import Zapato from './Zapato';

const app = express();

app.use(json());

app.use(cors());

//  listar zapatos

app.get('/zapatos', (req, res) => {
  const zapatoRepository = new ZapatoRepository();

  const zapatos = zapatoRepository.list();

  respond(res, 200, zapatos);
});

//  listar zapatos por id

app.get('/zapatos/:id', (req, res) => {
  const id = req.params.id;

  const zapatoRepository = new ZapatoRepository();

  const zapatos = zapatoRepository.get(id);

  if (!zapatos) {
    respond(res, 404);

    return;
  }

  respond(res, 200, zapatos);
});

app.post('/zapatos', (req, res) => {
  const zapato = new Zapato(
    req.body.id,
    req.body.marca,
    req.body.talla,
    req.body.color
  );

  const zapatoRepository = new ZapatoRepository();
  zapatoRepository.add(zapato);

  respond(res, 200, zapato);
});

app.delete('/zapatos/:id', (req, res) => {
  const id = req.params.id;

  const zapatoRepository = new ZapatoRepository();
  zapatoRepository.delete(id);

  respond(res, 200);
});

app.listen(3001, () => {
  console.log('App started on port 3001');
});
