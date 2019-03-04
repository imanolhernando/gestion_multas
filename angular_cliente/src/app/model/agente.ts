export class Agente {

    private _id: number;
    private _apellido: string;
    private _placa: number;
    private _password: string;
    private _departamento: string;

    constructor( id:number = -1, apellido:string = "", placa:number = -1, password:string = "", departamento:string = ""){
        this._id = id;
        this._apellido = apellido;
        this._placa = placa;
        this._password = "ABC";
        this._id = id;
        this._departamento = departamento;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get apellido(): string {
        return this._apellido;
    }
    public set apellido(value: string) {
        this._apellido = value;
    }

    public get placa(): number {
        return this._placa;
    }
    public set placa(value: number) {
        this._placa = value;
    }

    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }

    public get departamento(): string {
        return this._departamento;
    }
    public set departamento(value: string) {
        this._departamento = value;
    }


}
