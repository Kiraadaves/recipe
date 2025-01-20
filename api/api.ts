import {
  GetCategoryNameResponse,
  GetRecipeResponse,
  MealsResponse,
} from "@/types/types";
import axios from "axios";

export const getRecipe = async (): Promise<GetRecipeResponse> => {
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
  try {
    const response = await axios.get<GetRecipeResponse>(url);
    return response.data;
  } catch (error) {
    console.error(
      "Failed to make request:",
      error instanceof Error ? error.message : String(error)
    );
    throw error;
  }
};

export const getCategoryName = async (
  name: string
): Promise<GetCategoryNameResponse> => {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`;
  try {
    const response = await axios.get<GetCategoryNameResponse>(url);
    return response.data;
  } catch (error) {
    console.error(
      "Failed to make request:",
      error instanceof Error ? error.message : String(error)
    );
    throw error;
  }
};

export const getMealRecipe = async (id: string): Promise<MealsResponse> => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  try {
    const response = await axios.get<MealsResponse>(url);
    return response.data;
  } catch (error) {
    console.error(
      "Failed to make request:",
      error instanceof Error ? error.message : String(error)
    );
    throw error;
  }
};
