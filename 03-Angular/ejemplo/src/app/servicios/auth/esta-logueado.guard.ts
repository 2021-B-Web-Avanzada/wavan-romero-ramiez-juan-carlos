import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";

@Injectable()
export class estaLogueadoGuard implements  CanActivate{
  //inyeccion de dependencias
  constructor(
    private readonly _authService:AuthService,
    private readonly _router: Router

  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this._authService.estalogueado){
      this._router.navigate(['/forbidden'])
    }
    return this._authService.estalogueado;
  }

}
