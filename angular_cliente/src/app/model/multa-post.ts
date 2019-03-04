export class MultaPost {

  private _concepto: string;
  public get concepto(): string {
    return this._concepto;
  }
  public set concepto(value: string) {
    this._concepto = value;
  }
  private _importe: number;
  public get importe(): number {
    return this._importe;
  }
  public set importe(value: number) {
    this._importe = value;
  }

  constructor(
    concepto:string = "",
    importe:number
    ){
    this._concepto = concepto;
    this._importe = importe;
}
}
