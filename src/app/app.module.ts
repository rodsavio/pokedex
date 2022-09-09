import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { MinimumIntegerDigits } from './pipes/minimumIntegerDigits';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    ButtonsComponent,
    MinimumIntegerDigits
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
