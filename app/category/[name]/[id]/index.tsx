"use client";
import useGetMealRecipe from "@/hooks/useGetMealRecipe";
import { useParams } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";

const Recipe = () => {
  const params = useParams();
  const id = params.id as string;
  const { data, isLoading, isError } = useGetMealRecipe(id);
  console.log(data);

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (isError || !data?.meals?.[0]) {
    return (
      <div className="text-center py-10 text-red-500">Error loading recipe</div>
    );
  }

  const meal = data?.meals?.[0];
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-[#47663B] mb-4 text-center">
        {meal.strMeal}
      </h1>

      <div className="mb-4 relative">
        <Image
          src={meal.strMealThumb}
          alt={meal.strMeal}
          width={500}
          height={500}
          className="rounded shadow-md w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>

      <div className="text-[#47663B] mb-6 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Category: {meal.strCategory}</h2>
        <p>Area: {meal.strArea}</p>
      </div>

      {meal.strYoutube && (
        <div className="mb-6 flex items-center gap-3">
          <h2 className="text-xl font-semibold text-[#100b08] mb-2">
            Watch on
          </h2>
          <Link
            href={meal.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <FaYoutube className="w-10 h-10 text-red-600" />
          </Link>
        </div>
      )}

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-[#47663B] mb-2 text-center">
          Instructions
        </h2>
        <p>{meal.strInstructions}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-[#47663B] mb-2">
          Ingredients
        </h2>
        <ul className="list-disc list-inside">
          {Array.from({ length: 20 }, (_, i) => {
            const ingredient =
              meal[`strIngredient${i + 1}` as keyof typeof meal];
            const measure = meal[`strMeasure${i + 1}` as keyof typeof meal];
            return ingredient && ingredient.trim() ? (
              <li key={i}>
                {measure} {ingredient}
              </li>
            ) : null;
          })}
        </ul>
      </div>
      {meal.strSource && (
        <div className="mt-6 text-center">
          <Link
            href={meal.strSource}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#47663B] font-medium hover:underline"
          >
            View Original Recipe
          </Link>
        </div>
      )}
    </div>
  );
};

export default Recipe;
