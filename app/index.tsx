"use client";

import React, { useState } from "react";
//import {
//  DropdownMenu,
//  DropdownMenuContent,
//  DropdownMenuItem,
//  DropdownMenuTrigger,
//} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import useGetRecipe from "@/hooks/useGetRecipe";
import Image from "next/image";
import Modal from "@/components/Modal";
import { useRouter } from "next/navigation";

const Recipe = () => {
  // const [category, setCategory] = useState("");
  const [modalContent, setModalContent] = useState<{
    content: string;
    heading: string;
  } | null>(null);
  const { data: response } = useGetRecipe();
  console.log(response);
  const categories = response?.categories;
  const router = useRouter();
  // const handleCategorySelect = (category: string) => {
  //   setCategory(category);
  // };

  const openModal = (description: string, heading: string) => {
    setModalContent({ content: description, heading: heading });
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const handleViewCategory = (categoryName: string) => {
    setModalContent(null);
    router.push(`/category/${categoryName}`);
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <section className="flex flex-col md:flex-row justify-between items-center gap-4 px-6 py-4">
        <div className="text-center mb-12 w-full">
          <h1 className="text-4xl font-bold mb-4 text-[#47663B]">
            Explore Our Meal Categories
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover a world of culinary delights! Browse through our diverse
            meal categories, click{" "}
            <span className="text-[#47663B] font-bold">Read More</span> to learn
            about each category, or{" "}
            <span className="text-[#47663B] font-bold">View</span> to explore
            the various meals, recipes, and place your order. Your next favorite
            dish is just a click away!
          </p>
        </div>
        {/*
        <div>
          {" "}
          <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              className="bg-[#ffffff] border-[1px] border-[#BFC3C5] py-3 px-4  h-[48px]  rounded-[6px]"
            >
              <div className="flex items-center justify-between">
                <Button variant="outline" className="text-[#60686c] text-base">
                  {category || "Categories"}
                </Button>
                <IoMdArrowDropdownCircle className="w-8 h-8 text-[#47663B]" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#ffffff] w-[180px] rounded shadow-lg flex flex-col gap-3 ">
              {[
                "Beef",
                "Breakfast",
                "Chicken",
                "Dessert",
                "Goat",
                "Lamb",
                "Miscellaneous",
                "Pasta",
                "Pork",
                "Seafood",
                "Side",
                "Starter",
                "Vegan",
                "Vegetarian",
              ].map((item) => (
                <DropdownMenuItem
                  key={item}
                  className="text-sm font-medium text-[#101618]"
                  onClick={() => handleCategorySelect(item)}
                >
                  {item}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>{" "}*/}
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:px-6 lg:py-4 px-12 py-8">
        {categories?.map((c) => (
          <div
            key={c.idCategory}
            className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-[#47663B55] flex flex-col"
          >
            <div className="relative w-full pt-[75%] overflow-hidden">
              <Image
                alt={c.strCategory}
                src={c.strCategoryThumb}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="p-4 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#47663B] mb-2 text-center">
                  {c.strCategory}
                </h3>
                <p className="text-sm text-[#60686C] line-clamp-2">
                  {c.strCategoryDescription}
                </p>
              </div>
              <div className="flex justify-center mt-4">
                <Button
                  variant="outline"
                  className="text-[#47663B] hover:text-[#c05f29]"
                  onClick={() =>
                    openModal(c.strCategoryDescription, c.strCategory)
                  }
                >
                  Read More
                </Button>
                <Button
                  variant="outline"
                  className="text-[#47663B] hover:text-[#c05f29]"
                  onClick={() => handleViewCategory(c.strCategory)}
                >
                  View
                </Button>
              </div>
            </div>
          </div>
        ))}
      </section>
      {modalContent && (
        <Modal
          onClick={closeModal}
          modalContent={modalContent.content}
          modalHeading={modalContent.heading}
        />
      )}
    </div>
  );
};

export default Recipe;
