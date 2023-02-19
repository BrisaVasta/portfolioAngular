export class proyecto{
    id?: number;
    titulo: string= '';
    anioFin: string= '';
    descripcion: string= '';

    constructor(id:number, titulo:string, anioFin: string,  descripcion: string, ){
        this.titulo= titulo;
        this.anioFin = anioFin;
        this.descripcion = descripcion;
    }
}