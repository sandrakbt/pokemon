import { Component, OnInit } from '@angular/core';
import { PokeService } from '../../services/poke.service';
import debounce from 'lodash.debounce';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  templateUrl: './pokemon-list.view.html',
  styleUrls: ['./pokemon-list.view.scss']
})
export class PokemonListView implements OnInit {
  search = debounce(this.performSearch, 250);
  form: FormGroup;
  pokeShorts: PokeShort[] = [];
  allPokeShorts: PokeShort[] = [];
  searching = false;

  constructor(
    public pokeService: PokeService,
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
      this.searching = term;
      if (term) {
        this.search(term);
      } else {
        this.loadPokemons();
      }
    });

    this.pokeService.allPokemons.subscribe(pokeShorts => {
      this.allPokeShorts = pokeShorts;
      if (!this.searching) {
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
    this.pokeShorts = this.allPokeShorts;
  }

  private performSearch(term: string): void {
    this.pokeShorts = this.pokeService.findPokemons(term);
  }
}
