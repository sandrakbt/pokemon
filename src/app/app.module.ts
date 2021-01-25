import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PokeService } from 'src/app/services/poke.service';

import { AppRoutingModule } from './app-routing.module';
import { MainView } from './components/views/main/main.view';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonListView } from './components/views/pokemon-list/pokemon-list.view';

@NgModule({
  declarations: [
    MainView,
    PokemonComponent,
    PokemonListView
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PokeService
  ],
  bootstrap: [MainView]
})
export class AppModule { }
