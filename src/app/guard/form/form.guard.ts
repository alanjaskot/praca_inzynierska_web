import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NewAuthorComponent } from 'src/app/views/authors/new-author/new-author/new-author.component';
import { FormGuardDialogComponent } from 'src/app/views/helpers/form-guard-dialog/form-guard-dialog.component';
import { IFormGuard } from '../interfaces/i-form-guard.interface';

@Injectable({
  providedIn: 'root'
})
export class FormGuard implements CanDeactivate<IFormGuard> {
  constructor(private dialog: MatDialog){}
  canDeactivate(
    component: IFormGuard,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(component.form.dirty){
      const dialogReference = this.dialog.open(FormGuardDialogComponent);
      return dialogReference.afterClosed()
    }
    return true;
  }
  
}
