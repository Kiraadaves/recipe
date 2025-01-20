"use client";

import useGetCategoryName from "@/hooks/useGetCategoryByName";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CategoryName } from "@/types/types";
import { useCart } from "@/context/CartContext";
import CartSidebar from "@/components/CartSideBar";
import SuccessModal from "@/components/SuccessModal";

const Category = () => {
  const params = useParams();
  const categoryName = params.name as string;
  const router = useRouter();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { data, isLoading, isError } = useGetCategoryName(categoryName);
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  const prices = [5.5, 7.0, 8.0, 6.5, 4.0, 5.0];
  const defaultPrice = 6.0;

  const handleAddToCart = (meal: CategoryName, index: number) => {
    addToCart({
      id: meal.idMeal,
      name: meal.strMeal,
      price: prices[index] || defaultPrice,
      quantity: 1,
      image: meal.strMealThumb,
    });
  };

  const handleViewRecipe = (idMeal: string) => {
    router.push(`/category/${categoryName}/${idMeal}`);
  };

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
    <div className="flex px-4 sm:px-6 lg:px-8 py-4">
      {/* Main Content Div */}
      <div className="w-full lg:w-3/4 lg:pr-4">
        <h1 className="text-3xl font-bold text-[#47663B] mb-6 text-center">
          {categoryName} Recipes
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.meals?.map((meal, index) => (
            <div
              key={meal.idMeal}
              className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-[#47663B55] flex flex-col"
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
              <div className="p-4 relative flex-grow flex flex-col gap-2 justify-between">
                <h3 className="text-xl font-semibold text-[#47663B] mb-2 mt-4 text-center">
                  {meal.strMeal}
                </h3>
                <div className="flex justify-center mt-4 absolute top-[-32px] left-1/2 transform -translate-x-1/2 ">
                  {cart[meal.idMeal] ? (
                    <div className="flex gap-3 items-center border py-1 px-5 rounded-[15px] bg-[#47663B] text-white">
                      <button
                        className="border-2 rounded-full px-[5px] border-[#fafafa] text-xs"
                        onClick={() => removeFromCart(meal.idMeal)}
                      >
                        -
                      </button>
                      <span className="mx-2">{cart[meal.idMeal].quantity}</span>
                      <button
                        className="border-2 rounded-full px-[5px] border-[#fafafa] text-xs"
                        onClick={() => handleAddToCart(meal, index)}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <Button
                      variant="outline"
                      className="text-[#47663B] border hover:border-2 border-[#47663B] hover:font-black bg-[#fafafa] transition-transform duration-500 ease-in-out"
                      onClick={() => handleAddToCart(meal, index)}
                    >
                      Add to Cart
                    </Button>
                  )}
                </div>
                <div className="flex justify-center mb-6">
                  <Button
                    variant="outline"
                    className="bg-[#47663B] text-white hover:font-extrabold  transition-transform duration-300 ease-in-out"
                    onClick={() => handleViewRecipe(meal.idMeal)}
                  >
                    View Recipe
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Sidebar */}
      <div className="hidden lg:block w-1/4 pl-4">
        <CartSidebar
          onConfirmOrder={() => {
            setShowSuccessModal(true);
          }}
        />
      </div>
      {showSuccessModal && <SuccessModal onClose={() => { clearCart(); setShowSuccessModal(false)}} />}
    </div>
  );
};

export default Category;
