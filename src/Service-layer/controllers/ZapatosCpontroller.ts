/* eslint-disable prettier/prettier */
import { Request, Response } from "express";
import AddZapatoTask from "../tasks/AddZapatoTask";
import DeleteZapatoTask from "../tasks/DeleteZapatoTask";
import FindZapatoTask from "../tasks/FindZapatoTask";
import GetZapatoListTask from "../tasks/GetZapatoListTask";
import UpdateZapatoTask from "../tasks/UpdateZapatoTask";
import BaseController from "./BaseControllers";

export default class ZapatosController extends BaseController {
  public constructor() {
    super("/Zapatos");
  }

  protected configureRouter(): void {
    this.router.get('/', this.getZapatoList.bind(this));
    this.router.get('/:id', this.findZapato.bind(this));
    this.router.post('/', this.addZapato.bind(this));
    this.router.put('/', this.updateZapato.bind(this));
    this.router.delete('/:id', this.deleteZapato.bind(this));
  }

  private async getZapatoList(req: Request, res: Response): Promise<void> {
    try {
      const getZapatoList = new GetZapatoListTask();

      const zapatoList = await getZapatoList.execute();

      this.respond(res, 200, zapatoList);
    } catch {
      this.respond(res, 500);
    }
  }
}