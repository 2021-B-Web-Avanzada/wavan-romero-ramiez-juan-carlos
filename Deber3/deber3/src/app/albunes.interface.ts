import {Cancion} from "./canciones.interface";

export interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

export interface Albun{
  nombre?: string;
  anio?: number;
  autor?: string;
  precio?: number;
  disponible_en_linea?: boolean;
  canciones?: Cancion[];
}
