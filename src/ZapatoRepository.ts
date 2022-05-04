import fs from 'fs';
import path from 'path';
import IRepository from './IRepository';
import Zapato from './Zapato';

export default class ZapatoRepository implements IRepository<Zapato> {
  private zapatos: Zapato[] = [];

  private static readonly ZAPATOS_FILE_PATH = path.join(
    __dirname,
    'data/zapatos.json'
  );

  public constructor() {
    this.Load();
  }

  public list(): Zapato[] {
    return this.zapatos;
  }

  public get(id: string): Zapato {
    return <Zapato>this.zapatos.find((zapatos) => zapatos.id === id);
  }

  public add(entity: Zapato): Zapato {
    this.zapatos.push(entity);
    this.save();
    return entity;
  }

  public update(entity: Zapato): Zapato {
    this.zapatos = this.zapatos.reduce(
      (accumulation: Zapato[], currentZapato) => {
        if (currentZapato.id === entity.id) {
          accumulation.push(entity);
        } else {
          accumulation.push(currentZapato);
        }
        return accumulation;
      },
      []
    );
    this.save();

    return entity;
  }

  public delete(id: string): void {
    this.zapatos = this.zapatos.reduce(
      (accumulation: Zapato[], currentZapato) => {
        if (currentZapato.id !== id) {
          accumulation.push(currentZapato);
        }
        return accumulation;
      },
      []
    );
    this.save();
  }

  private Load(): void {
    const zapatosJson = fs.readFileSync(ZapatoRepository.ZAPATOS_FILE_PATH);
    this.zapatos = <Zapato[]>JSON.parse(zapatosJson.toString());
  }

  private save(): void {
    const zapatosJson = JSON.stringify(this.zapatos);
    fs.writeFileSync(ZapatoRepository.ZAPATOS_FILE_PATH, zapatosJson);
  }
}
