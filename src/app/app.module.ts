import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PokeService } from 'src/app/services/poke.service';

import { AppRoutingModule } from './app-routing.module';
import { MainView } from './views/main/main.view';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonListView } from './views/pokemon-list/pokemon-list.view';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    MainView,
    PokemonComponent,
    PokemonListView,
    PokemonListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatPaginatorModule,
  ],
  providers: [
    PokeService
  ],
  bootstrap: [MainView]
})
export class AppModule { }
