import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { pluck, tap } from 'rxjs/operators';
import Fuse from 'fuse.js';

@Injectable()
export class PokeService {
  allPokemons = new BehaviorSubject<PokeShort[]>([]);
  fuse!: Fuse<PokeShort>;
  pokeCache = new Map<string, Pokemon>();

  constructor(private http: HttpClient) {
    this.getAllPokemons().subscribe(pokemons => {
      this.allPokemons.next(pokemons);
      this.fuse = new Fuse(this.allPokemons.value, { keys: ['name'] });
    });
  }

  getAllPokemons(): Observable<PokeShort[]> {
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=10000').pipe(
      pluck('results')
    );
  }

  getPokemon(name: string): Observable<Pokemon> {
    if (this.pokeCache.has(name)) {
      return of(this.pokeCache.get(name) as Pokemon);
    }
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon/' + name).pipe(
      tap(data => this.pokeCache.set(name, data))
    );
  }

  findPokemons(term: string): PokeShort[] {
    return this.fuse.search(term).map(result => result.item);
  }
}
