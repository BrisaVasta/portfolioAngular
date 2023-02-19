export class persona{
    id?: number;
    nombre: string;
    titulo: string;
    telefono: string;
    edad: number;
    email: string;
    ciudad: string;
    urlPerfil: string;
    urlBanner: string;

   constructor( id:number,  nombre: string, titulo:string, telefono:string,  edad:number, email:string, ciudad:string, urlPerfil:string, urlBanner:string) {
        this.id = id;
        this.nombre = nombre;
        this.titulo = titulo;
        this.telefono = telefono;
        this.edad = edad;
        this.email = email;
        this.ciudad = ciudad;
        this.urlPerfil = urlPerfil;
        this.urlBanner = urlBanner;
    }
}