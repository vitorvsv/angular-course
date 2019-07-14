import {Recipe} from "./recipe.model";

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('One Recipe', 'This is the one pizza', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/11/WU2001_Cast-Iron-Pizza_s4x3.jpg.rend.hgtvcom.826.620.suffix/1536690646007.jpeg'),
    new Recipe('Two Recipe', 'This is the second pizza', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/11/WU2001_Cast-Iron-Pizza_s4x3.jpg.rend.hgtvcom.826.620.suffix/1536690646007.jpeg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
