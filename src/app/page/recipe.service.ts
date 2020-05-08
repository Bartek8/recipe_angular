import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private http: HttpClient) { }
recipesChanged = new Subject<any>();
  recipes: any = []

  getRecipes() {
    return this.recipes
  }

  setRecipes(recipes: any[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes);
  }

  fetchRecipes() {
    return this.http
      .get(
        'http://localhost:4000/recipe'
      )
      .subscribe(response => {
        this.recipesChanged.next(response);
      });
      
  }
}
