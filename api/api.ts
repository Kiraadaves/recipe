import { GetRecipeResponse } from "@/types/types";
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
