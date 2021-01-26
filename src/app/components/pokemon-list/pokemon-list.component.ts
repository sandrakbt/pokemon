import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { forkJoin } from 'rxjs';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnChanges{
  @Input() pokeShorts: PokeShort[] = [];
  @Input() itemsPerPage = 50;
  pokemons: Pokemon[] = [];

  constructor(private pokeService: PokeService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.pokeShorts) {
      this.loadPokemons(0);
    }
  }

  handlePage(event: PageEvent): void {
    this.loadPokemons(event.pageIndex);
  }

  loadPokemons(page: number): void {
    forkJoin(this.pokeShorts
      .slice(page * this.itemsPerPage, (page + 1) * this.itemsPerPage)
      .map(poke => this.pokeService.getPokemon(poke.name))).subscribe(pokemons => this.pokemons = pokemons);
  }
}
