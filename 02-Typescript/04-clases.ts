//04-clases.ts
class Persona{
    public nombre:string;
    public apellido: string;
    static nombreReferencial: string = 'Humano';
    protected nombreYApellido='';

    constructor(
        nombreParametro: string,
        apellidoParametro: string
    ) {
        this.nombre = nombreParametro;
        this.nombreYApellido = apellidoParametro;
        this.nombreYApellido = nombreParametro+' '+apellidoParametro;
    }
    private mostrarNombreApellido():string{
        return  this.nombreYApellido;
    }
}

class Usuario extends Persona{
    constructor(
        nombreParametro: string,
        apellidoParametro: string,
        public cedula: string, //modificador de acceco -> Propiedad de la clase
        public estadocivil: string
    ) {
        super(nombreParametro,apellidoParametro);
    }
}
const juan = new Usuario(
    'Juan',
    'Romero',
    '0706859600',
    'soltero'
)
juan.nombre;
juan.apellido;
juan.cedula;
juan.estadocivil;