import { Component, OnInit } from '@angular/core';
import { PokeService } from '../../../services/poke.service';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title = 'poke-api';
  pokemons: Pokemon[] = [];

  constructor(private apiService: PokeService) {}

  ngOnInit(): void {
    this.apiService.getAllPokemons().subscribe(pokemons => {
      this.pokemons = pokemons;
    });

    // this.apiService.getPokemon('pikachu').subscribe(pokemon => {
    //   console.log(pokemon)
    // });
    
  }
}
