import { useQuery } from "@tanstack/react-query";
import { getCategoryName } from "@/api/api";
import { GetCategoryNameResponse } from "@/types/types";

const useGetCategoryName = (name: string) => {
  const {
    data: response,
    isLoading,
    isError,
  } = useQuery<GetCategoryNameResponse>({
    queryKey: ["category", name],
    queryFn: () => getCategoryName(name),
  });

  return { data: response, isLoading, isError };
};

export default useGetCategoryName;
