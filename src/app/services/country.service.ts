import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../countries/interfaces/country';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private Url: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  //Si no se reflerencia el observable y la interfaz de country no se podra acceder a las propiedades que tiene esta consulta
  //para hacer la solicitud se debe realizar el subscribe
  buscarCapital(query: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.Url}/capital/${query}`).pipe(
      catchError(() => {
        //devuelve un onbservable vacio con el of ([])
        return of([]);
      })
    );
  }

  buscarPais(query: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.Url}/name/${query}`).pipe(
      catchError(() => {
        return of([]);
      })
    );
  }
}
