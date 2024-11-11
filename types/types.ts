export interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface GetRecipeResponse {
  categories: Category[];
}

export interface CategoryName {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

export interface GetCategoryNameResponse {
  meals: CategoryName[];
}
