"use client";
import useGetCategoryName from "@/hooks/useGetCategoryByName";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CategoryName } from "@/types/types";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { IoAddCircleOutline, IoCartOutline } from "react-icons/io5";
import { IoIosRemoveCircleOutline } from "react-icons/io";

const Category = () => {
  const params = useParams();
  const categoryName = params.name as string;
  const router = useRouter();
  const { data, isLoading, isError } = useGetCategoryName(categoryName);
  // State for cart items
  const [cart, setCart] = useState<{
    [key: string]: {
      quantity: number;
      price: number;
      name: string;
      image: string;
    };
  }>({});

  //  to assign to meals based on index since mealDB has no price
  const prices = [5.5, 7.0, 8.0, 6.5, 4.0, 5.0];
  const defaultPrice = 6.0;

  const addToCart = (meal: CategoryName, index: number) => {
    const mealId = meal.idMeal;
    setCart((prevCart) => {
      const existingItem = prevCart[mealId];
      const quantity = existingItem ? existingItem.quantity + 1 : 1;
      const price = prices[index] || defaultPrice;

      return {
        ...prevCart,
        [mealId]: {
          quantity,
          price,
          name: meal.strMeal,
          image: meal.strMealThumb,
        },
      };
    });
  };

  const removeFromCart = (mealId: string) => {
    setCart((prevCart) => {
      const existingItem = prevCart[mealId];
      if (!existingItem) return prevCart;

      const quantity = existingItem.quantity - 1;
      if (quantity <= 0) {
        const newCart = { ...prevCart };
        delete newCart[mealId];
        return newCart;
      }

      return {
        ...prevCart,
        [mealId]: {
          ...existingItem,
          quantity,
        },
      };
    });
  };

  const clearCart = () => setCart({});

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
  const totalItems = Object.values(cart).reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const cartTotal = Object.values(cart).reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const handleViewRecipe = (idMeal: string) => {
    router.push(`/category/${categoryName}/${idMeal}`);
  };
  return (
    <div className="flex px-4 sm:px-6 lg:px-8 py-4">
      {/* Main Content Div */}
      <div className="w-3/4 pr-4">
        <h1 className="text-3xl font-bold text-[#e0702f] mb-6 text-center">
          {categoryName} Recipes
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.meals?.map((meal, index) => (
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
              <div className="p-4 relative flex-grow flex flex-col gap-2 justify-between">
                <h3 className="text-xl font-semibold text-[#e0702f] mb-2 mt-4 text-center">
                  {meal.strMeal}
                </h3>
                <div className="flex justify-center mt-4 absolute top-[-32px] left-1/2 transform -translate-x-1/2 ">
                  {cart[meal.idMeal] ? (
                    <div className="flex gap-3 items-center border py-1 px-5 rounded-[15px] bg-[#e0702f] text-white">
                      <button
                        className="border-2 rounded-full px-[5px] border-[#fafafa] text-xs"
                        onClick={() => removeFromCart(meal.idMeal)}
                      >
                        -
                      </button>
                      <span className="mx-2">{cart[meal.idMeal].quantity}</span>
                      <button
                        className="border-2 rounded-full px-[5px] border-[#fafafa] text-xs"
                        onClick={() => addToCart(meal, index)}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <Button
                      variant="outline"
                      className="text-[#e0702f] border hover:border-2 border-[#e0702f] hover:text-[#c05f29] bg-[#fafafa]"
                      onClick={() => addToCart(meal, index)}
                    >
                      Add to Cart
                    </Button>
                  )}
                </div>
                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    className="text-[#e0702f] hover:font-extrabold  transition-transform duration-300 ease-in-out"
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

      {/* Cart Sidebar Div */}
      <div className="w-1/4 pl-4">
        <div className="bg-white rounded-lg shadow-md p-6 sticky top-0 ">
          {totalItems === 0 ? (
            <h1 className="text-2xl font-bold mb-4 text-center relative">
              Your Cart
            </h1>
          ) : (
            <div className=" mb-4 text-center relative inline-block">
              <IoCartOutline className="w-8 h-8 text-[#e0702f]" />{" "}
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rounded-full border bg-[#e0702f] text-white px-2 py-1 text-xs">
                {totalItems}
              </span>
            </div>
          )}

          {Object.keys(cart).length === 0 ? (
            <div className="text-center">
              <div className="flex justify-center items-center">
                <MdOutlineAddShoppingCart className="w-24 h-24 text-[#f99e68]" />
              </div>
              <p className="text-sm text-[#e0702fab]">
                Your added items will appear here
              </p>
            </div>
          ) : (
            <>
              <ul>
                {Object.entries(cart).map(([mealId, item]) => (
                  <li
                    key={mealId}
                    className="flex flex-col gap-2 mb-2 border-b border-gray-200 pb-2"
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="rounded"
                      />
                      <span className="text-xs text-slate-700">
                        {item.name}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-slate-700">
                          {item.quantity}x
                        </span>
                        <span className="text-xs text-slate-700">
                          ${item.price.toFixed(2)}
                        </span>

                        <div className="flex items-center gap-4">
                          <button onClick={() => removeFromCart(mealId)}>
                            <IoIosRemoveCircleOutline className="text-[#e0702f] w-6 h-6" />
                          </button>
                          <button
                            onClick={() =>
                              addToCart(
                                {
                                  idMeal: mealId,
                                  strMeal: item.name,
                                  strMealThumb: item.image,
                                },
                                prices.indexOf(item.price)
                              )
                            }
                          >
                            <IoAddCircleOutline className="text-[#e0702f] w-6 h-6" />
                          </button>
                        </div>
                      </div>
                      <div>
                        <button
                          onClick={() => removeFromCart(mealId)}
                          className="text-red-500"
                        >
                          <TiDelete className="w-6 h-6 mt-1" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-right font-bold">
                Total: ${cartTotal.toFixed(2)}
              </div>
              <div className="mt-4 flex justify-between">
                <button onClick={clearCart} className="text-[#e0702f]">
                  Clear Cart
                </button>
                <button
                  onClick={() => alert("Confirming order...")}
                  className="bg-[#e0702f] text-white px-4 py-2 rounded"
                >
                  Confirm Order
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
