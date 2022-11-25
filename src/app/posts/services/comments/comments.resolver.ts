import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { filter, first, Observable, tap } from 'rxjs';
import { CommentEntityService } from './comment-entity.service';

@Injectable()
export class CommentsResolver implements Resolve<boolean> {
  constructor(private commentService: CommentEntityService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    //state:corrent state of the router

    //return this.postsService.getAll().pipe(map((posts) => !!posts)); //questo metodo prenderà i posts dal backend e li metterà nello store.Emetterà un observable di post quindi dobbiamo trasformarlo in observable di boolean, lo facciamo nella pipe

    return this.commentService.loaded$.pipe(
      //vogliamo che il metodo get venga chiamato una sola volta e non tutte le volte che il router cambia destinazione. Nello store abbiamo una proprietà chiamata loaded settata a true se tutti i dati sono arrivati dal backend
      tap((loaded) => {
        if (!loaded) {
          //if not loaded..prendili dal backend
          this.commentService.getAll();
        }
      }),
      filter((loaded) => !!loaded), //filtriamo solo i valori true di loaded
      first() //is going to make sure tha whenever the first value gets emitted, the observable is going to get completed.Quindi la funzione getAll non verrà chiamata ogni volta ma solo la prima volta
    );
  }
}
