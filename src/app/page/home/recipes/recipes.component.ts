import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  @Input() recipes: any;
  length: number;
  constructor() { }

  ngOnInit(): void {
  }

  len() {

    this.length = this.recipes === null ? -1 : this.recipes.data.count

  }

  stars(rating) {
    let rate = rating * 20;
    return `${rate}%`
  }
}
