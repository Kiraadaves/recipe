"use client";
import useGetCategoryName from "@/hooks/useGetCategoryByName";
import { useParams } from "next/navigation";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Category = () => {
  const params = useParams();
  const categoryName = params.name as string;
  const { data, isLoading, isError } = useGetCategoryName(categoryName);

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="text-center py-10 text-red-500">
        Error loading category items
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#e0702f] mb-6 text-center">
        {categoryName} Recipes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.meals?.map((meal) => (
          <div
            key={meal.idMeal}
            className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-[#f6cdb2be] flex flex-col"
          >
            <div className="relative w-full pt-[75%] overflow-hidden">
              <Image
                alt={meal.strMeal}
                src={meal.strMealThumb}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="p-4 flex-grow flex flex-col justify-between">
              <h3 className="text-xl font-semibold text-[#e0702f] mb-2 text-center">
                {meal.strMeal}
              </h3>
              <div className="flex justify-center mt-4">
                <Button
                  variant="outline"
                  className="text-[#e0702f] hover:text-[#c05f29]"
                >
                  View Recipe
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
