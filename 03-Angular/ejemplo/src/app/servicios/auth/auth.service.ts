import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {
  estalogueado=false

  roles=[
    //"admin",
    "supervisor",
    "usuario"
  ]
}
