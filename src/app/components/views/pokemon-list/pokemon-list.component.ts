import { Component, OnInit } from '@angular/core';
import { PokeService } from '../../../services/poke.service';

@Component({
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private apiService: PokeService) {}

  ngOnInit(): void {
    this.apiService.getAllPokemons().subscribe(pokemons => {
      this.pokemons = pokemons;
    });
  }
}
