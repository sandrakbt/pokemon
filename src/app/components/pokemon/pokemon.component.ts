import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnChanges {
  @Input() pokemon!: Pokemon;
  imageURL!: string;

  ngOnChanges(change: SimpleChanges): void {
    if (change.pokemon) {
      this.imageURL = this.pokemon.sprites.other['official-artwork'].front_default || this.pokemon.sprites.front_default;
    }
  }

  constructor() {}
}
