export default class Zapato {
  public id: string;

  public marca: string;

  public talla: number;

  public color: string;

  public constructor(id: string, marca: string, talla: number, color: string) {
    this.id = id;
    this.marca = marca;
    this.talla = talla;
    this.color = color;
  }
}
