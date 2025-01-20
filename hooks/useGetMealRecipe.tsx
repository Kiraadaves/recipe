import { useQuery } from "@tanstack/react-query";
import { getMealRecipe } from "@/api/api";
import { MealsResponse } from "@/types/types";

const useGetMealRecipe = (id: string) => {
  const {
    data: response,
    isLoading,
    isError,
  } = useQuery<MealsResponse>({
    queryKey: ["recipe", id],
    queryFn: () => getMealRecipe(id),
  });

  return { data: response, isLoading, isError };
};

export default useGetMealRecipe;
