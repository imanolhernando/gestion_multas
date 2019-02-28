export class Multa {

    private _id: number;
    private _fecha: Date;
    private _matricula: string;
    private _concepto: string;
    private _modelo: string;
    private _kilometraje: number;
    private _fecha_baja: Date;
    private _importe : number;

  public get fecha_baja(): Date {
    return this._fecha_baja;
  }
  public set fecha_baja(value: Date) {
    this._fecha_baja = value;
  }
    constructor(
      id:number = -1,
      fecha:Date = null,
      matricula:string = "",
      concepto:string = "",
      modelo:string = "",
      kilometraje:number,
      fecha_baja:Date = null,
      importe:number
      ){
      this._id = id;
      this._fecha = fecha;
      this._matricula = matricula;
      this._concepto = concepto;
      this._modelo = modelo;
      this._kilometraje = kilometraje;
      this.fecha_baja = fecha_baja;
      this.importe = importe;
  }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get fecha(): Date {
        return this._fecha;
    }
    public set fecha(value: Date) {
        this._fecha = value;
    }

    public get matricula(): string {
        return this._matricula;
    }
    public set matricula(value: string) {
        this._matricula = value;
    }

    public get importe(): number {
        return this._importe;
    }
    public set importe(value: number) {
        this._importe = value;
    }

    public get concepto(): string {
        return this._concepto;
    }
    public set concepto(value: string) {
        this._concepto = value;
    }

    public get modelo(): string {
        return this._modelo;
    }
    public set modelo(value: string) {
        this._modelo = value;
    }

    public get kilometraje(): number {
        return this._kilometraje;
    }
    public set kilometraje(value: number) {
        this._kilometraje = value;
    }




}
