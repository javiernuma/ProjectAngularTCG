import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe( 'testReceta', 'esto es un simple texto',
    // tslint:disable-next-line:max-line-length
    'http://impactonoticias.pe/wp-content/uploads/2018/06/impacto_copa-mundial-2018.jpg' ),
    new Recipe( 'A test Recipe', 'this is a simple test',
    // tslint:disable-next-line:max-line-length
    'http://impactonoticias.pe/wp-content/uploads/2018/06/impacto_copa-mundial-2018.jpg' ),
    new Recipe( 'A test Recipe2', 'this is a simple test2',
    // tslint:disable-next-line:max-line-length
    'http://impactonoticias.pe/wp-content/uploads/2018/06/impacto_copa-mundial-2018.jpg' )
  ];
  constructor() { }

  ngOnInit() {
  }
  OnRecipeSelected( recipe: Recipe ) {
    this.recipeWasSelected.emit(recipe);
  }

}
