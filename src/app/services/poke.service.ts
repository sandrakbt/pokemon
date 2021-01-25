import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable()
export class PokeService {

  constructor(private http: HttpClient) {}

  getAllPokemons(): Observable<Pokemon[]> {
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=10000').pipe(
      pluck('results')
    );
  }

  getPokemon(name: string): Observable<Pokemon> {
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon/' + name);
  }
}
