import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { Pokemon } from "src/app/models/pokemon";

@Injectable({
    providedIn: 'root'
})

export class PokemonService {
    private basePokemonUrl = 'https://pokeapi.co/api/v2/'

    constructor(private http: HttpClient) {}

    getPokemonById(idName: string): Observable<Pokemon> {
        let objectUrl = this.basePokemonUrl + 'pokemon/' + idName.toLowerCase();

        return this.http.get<Pokemon>(objectUrl).pipe(
            catchError(this.handleError)
        )
    }

    private handleError(errorResponse: HttpErrorResponse) {
        let errorMessage = '';
        if (errorResponse.error instanceof ErrorEvent) {
            errorMessage = `An erros occurred: ${errorResponse.error.message}`;
        }
        else {
            errorMessage = `Server returned code ${errorResponse.status}, error message: ${errorResponse.message}`;
        }
        console.error(errorMessage);
        return throwError(() => errorMessage);
    }
}