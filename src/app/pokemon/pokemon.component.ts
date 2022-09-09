import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/service/pokemon.service';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})

export class PokemonComponent implements OnInit {

  constructor(private _pokemonService: PokemonService) { }

  pokemon: Pokemon | undefined;
  imageUrl: string = '';
  imageUrlAux: string = '';
  adjustExceed: string = '';
  exceedPokemons: Array<number> = [40, 152, 153, 154, 164, 176, 186, 190, 191, 199, 201, 204, 230, 238, 240, 251]
  pokefound: boolean = false;
  errorMessage: string = '';

  ngOnInit(): void {
    this.searchPokemon("1");
  }

  submitForm(event: Event): void {
    event?.preventDefault();

    let inputValue: string = (<HTMLInputElement>document.getElementById("searchElementText"))?.value;
    
    this.searchPokemon(inputValue);    
  }

  searchPokemon(id: string): void {
    this._pokemonService.getPokemonById(id).subscribe({
      next: pokemon => {
        this.pokemon = pokemon;
        this.imageUrl = pokemon.sprites.versions['generation-v']['black-white']?.animated?.front_default;
        this.imageUrlAux = pokemon.sprites.versions['generation-viii'].icons.front_default;

        if (this.exceedPokemons.indexOf(this.pokemon.id) > -1) { 
          this.adjustExceed = 'img_adjustExceed'; 
        } 
        else { 
          this.adjustExceed = ''; 
        }        
      },
      error: err => { this.errorMessage = err; this.pokemon = undefined; console.log("erro"); }
    });
  }

  clickUp(): void {
    (<HTMLInputElement>document.getElementById("searchElementText")).value = "";
    let newPokemon: number = (this.pokemon?.id || 0) + 1;    
    this.searchPokemon(newPokemon.toString());
  }

  clickDown(): void {
    (<HTMLInputElement>document.getElementById("searchElementText")).value = "";
    let newPokemon: number = (this.pokemon?.id || 0) - 1;
    
    if (newPokemon < 1)
      newPokemon = 1;
    
    this.searchPokemon(newPokemon.toString());
  }
}