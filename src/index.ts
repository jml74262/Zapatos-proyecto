/* eslint-disable prettier/prettier */
import express from "express";
import { json } from "body-parser";
import ZapatosController from "./Service-layer/controllers/ZapatosCpontroller";
import "reflect-metadata"
import InventoryInsController from "./Service-layer/controllers/InventoryInsController";

const app = express();
const port = 3001;

app.use(json());

const zapController = new ZapatosController();
const inventoryInsController = new InventoryInsController();

zapController.mount(app);
inventoryInsController.mount(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})