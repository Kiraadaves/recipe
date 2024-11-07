import { useQuery } from "@tanstack/react-query";
import { getRecipe } from "@/api/api";
import { GetRecipeResponse } from "@/types/types";

const useGetRecipe = () => {
  const {
    data: response,
    isLoading,
    isError,
  } = useQuery<GetRecipeResponse>({
    queryKey: ["categories"],
    queryFn: getRecipe,
  });

  return { data: response, isLoading, isError };
};

export default useGetRecipe;
