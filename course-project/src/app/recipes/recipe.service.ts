import {Recipe} from "./recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'This is the one pizza',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/11/WU2001_Cast-Iron-Pizza_s4x3.jpg.rend.hgtvcom.826.620.suffix/1536690646007.jpeg',
      [
        new Ingredient('Pasta', 1),
        new Ingredient('Cheese', 1),
        new Ingredient('Chicken', 1),
      ]
    ),
    new Recipe(
      'Hamburguer',
      'This is the second pizza',
      'https://i2.wp.com/hamburguergourmetcurso.com/wp-content/uploads/2018/11/curso_de_hamburguer_gourmet_completo_ima.png?resize=439%2C439&ssl=1',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Bread', 1),
      ]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addingredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
