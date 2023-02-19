export class experiencia{
    id?: number;
    anioIni: string= '';
    anioFin: string= '';
    descripcion: string= '';
    puesto: string='';
    empresa:string='';

    constructor(id:number, anioIni: string, anioFin: string, descripcion: string, puesto: string, empresa:string){
        this.id=id;
        this.puesto= puesto;
        this.anioIni = anioIni;
        this.anioFin = anioFin;
        this.descripcion = descripcion;
        this.empresa= empresa;
    }
}