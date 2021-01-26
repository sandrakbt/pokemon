import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PokeService } from '../../services/poke.service';
import debounce from 'lodash.debounce';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  templateUrl: './pokemon.view.html',
  styleUrls: ['./pokemon.view.scss']
})
export class PokemonView implements OnInit {
  pokemon!: Pokemon;
  imageURL!: string;

  constructor(
    public pokeService: PokeService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ name }) => {
      this.loadPokemon(name);
    });
  }

  loadPokemon(name: string): void {
    this.pokeService.getPokemon(name).subscribe(poke => {
      this.pokemon = poke;
      this.imageURL = this.pokemon.sprites.other['official-artwork'].front_default || this.pokemon.sprites.front_default;
    });
  }
}
