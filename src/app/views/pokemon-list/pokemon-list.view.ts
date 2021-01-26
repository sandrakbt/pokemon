import { Component, OnInit } from '@angular/core';
import { map, mergeMap } from 'rxjs/operators';
import { PokeService } from '../../services/poke.service';
import { forkJoin } from 'rxjs';
import debounce from 'lodash.debounce';
import { ActivatedRoute, Router } from '@angular/router';
import { Form, FormControl, FormGroup } from '@angular/forms';
@Component({
  templateUrl: './pokemon-list.view.html',
  styleUrls: ['./pokemon-list.view.scss']
})
export class PokemonListView implements OnInit {
  pokemons: Pokemon[] = [];
  search = debounce(this.performSearch, 250);
  form: FormGroup;

  constructor(
    private pokeService: PokeService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.form = new FormGroup({
      search: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(({ search: term }) => {
      this.form.get('search')?.setValue(term);
      if (term) {
        this.search(term);
      } else {
        this.loadPokemons();
      }
    });
  }

  handleInput(value: string): void {
    this.router.navigate([], {
      queryParams: value ? { search: value } : null
    });
  }

  private loadPokemons(): void {
    this.pokeService.allPokemons.pipe(
      map(pokeShorts => pokeShorts.slice(0, 100)),
      mergeMap(pokeShorts => forkJoin(pokeShorts.map(poke => this.pokeService.getPokemon(poke.name))))
    ).subscribe(pokemons => {
      this.pokemons = pokemons;
    });
  }

  private performSearch(term: string): void {
    forkJoin(this.pokeService.findPokemons(term).map(poke => this.pokeService.getPokemon(poke.name)))
    .subscribe(pokemons => this.pokemons = pokemons);
  }
}
