import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IPerfil } from '../../models/interfaces/perfil/IPerfil';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PerfilService {
  private apiUrl = environment.api_url;

  constructor(private http: HttpClient) {}

  obterPerfil(): Observable<IPerfil> {
    return this.http
      .get<IPerfil>(this.apiUrl)
      .pipe(catchError(this.tratarErro));
  }

  private tratarErro(erro: HttpErrorResponse): Observable<never> {
    console.error('Ocorreu um erro:', erro);
    return throwError(
      () => new Error('Algo deu errado; por favor, tente novamente mais tarde.')
    );
  }
}
