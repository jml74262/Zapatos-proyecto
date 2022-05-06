/* eslint-disable prettier/prettier */
import IAsyncTaks from "./IAsyncTask";
import DatabaseConnection from "../../persistence-layer/DatabaseConnection";
import Zapato from "../../domain-layer/Zapato";

export default class DeleteZapatoTask implements IAsyncTaks<void> {
  private zapId: string;

  public constructor(zapId: string) {
    this.zapId = zapId;
  }

  public async execute(): Promise<void> {
    const databaseConnection = await DatabaseConnection.getInstance();
    const zapRepo = databaseConnection.getRepo(Zapato);
    
    const zapato = zapRepo.delete(this.zapId);
  }
}