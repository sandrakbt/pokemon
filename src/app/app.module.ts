import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PokeService } from 'src/app/services/poke.service';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './components/views/main/main.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonListComponent } from './components/views/pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [
    MainComponent,
    PokemonComponent,
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PokeService
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
