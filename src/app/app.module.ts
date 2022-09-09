import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { MinimumIntegerDigits } from './pipes/minimumIntegerDigits';
import { SearchFormComponent } from './forms/search-form.component';
import { PokemonTypeComponent } from './pokemon-type/pokemon-type.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    ButtonsComponent,
    MinimumIntegerDigits,
    SearchFormComponent,
    PokemonTypeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
