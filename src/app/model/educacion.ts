export class educacion{
    id?: number;
    titulo: string;
    anioIni: string;
    anioFin: string;
    descripcion: string;
    institucionEduc:String;
    

    constructor(id:number, titulo: string, anioIni: string, anioFin: string, descripcion: string, institucionEduc: string){
        this.titulo = titulo;
        this.anioIni = anioIni;
        this.anioFin = anioFin;
        this.descripcion = descripcion;
        this.institucionEduc = institucionEduc;
    }
}