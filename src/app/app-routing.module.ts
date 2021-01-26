import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListView } from './views/pokemon-list/pokemon-list.view';
import { PokemonView } from './views/pokemon/pokemon.view';

const routes: Routes = [
  { path: 'pokemon/:name', component: PokemonView },
  { path: '', component: PokemonListView },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
