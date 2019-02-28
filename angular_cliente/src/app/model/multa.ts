export class Multa {

    private _id: number;
    private _fecha: Date;
    private _matricula: string;
    private _concepto: string;
    private _modelo: string;
    private _kilometraje: number;
    
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
    private _importe: number;
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
