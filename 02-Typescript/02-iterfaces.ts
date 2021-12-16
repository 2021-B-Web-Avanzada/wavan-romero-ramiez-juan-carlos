//02-interfaces.ts
interface  Usuario {
    nombre: string;
    apellido: string;
    edad?: number;
    sueldo?: number;
    casado: boolean | 0 | 1;
    estado: "AC" | "IC" | "BN";
    imprimirUsuario: (messaje: string)=> string |"BN";
    calcularImpuesto: (impuesto: number)=> number;
    estadoActual: () => "AP" | "AF" | "AT";
}

let user: Usuario ={
    nombre: "Juan",
    apellido: "Romero",
    casado: 0,
    sueldo: 20.5,
    estado: "AC",
    imprimirUsuario: (messaje )=>{
        return "el mensaje es: "+messaje;
    },
    calcularImpuesto: impuesto => {
        return this.sueldo + this.sueldo*impuesto;
    },
    estadoActual: () => {
        switch (this.estado){
            case "AC":
                return "AP";
            case "IN":
                return "AF";
            case "BN":
                return "AT";
        }
    }
}