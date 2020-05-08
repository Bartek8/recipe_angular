import { Component, OnInit } from '@angular/core';

import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recipes: any = null
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.fetchRecipes()
    this.recipeService.recipesChanged
      .subscribe(
        (recipes: any[]) => {
          console.log(recipes)
          this.recipes = recipes;
        }
      );

    this.recipes = this.recipeService.getRecipes()
  }



}
