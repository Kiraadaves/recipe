"use client";

import React, { useState } from "react";
import { IoIosSearch, IoMdArrowDropdownCircle } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useGetRecipe from "@/hooks/useGetRecipe";
import Image from "next/image";
import Modal from "@/components/Modal";

const Recipe = () => {
  const [category, setCategory] = useState("");

  const [modalContent, setModalContent] = useState<string | null>(null);
  const { data: response } = useGetRecipe();
  console.log(response);
  const categories = response?.categories;
  const handleCategorySelect = (category: string) => {
    setCategory(category);
  };

  const openModal = (description: string) => {
    setModalContent(description);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <section className="flex flex-col md:flex-row justify-between items-center gap-4 px-6 py-4">
        <div className="h-[48px] md:w-[414px] w-full shadow-md pl-1 pr-5 py-[10px] flex items-center border-[1px] border-[#BFC3C5] rounded-[6px] ">
          <Input
            placeholder="Search"
            type="text"
            className="border-none placeholder:text-lg placeholder:text-[#60686C] placeholder:font-medium"
          />
          <IoIosSearch className="w-8 h-8 text-[#e0702f]" />
        </div>
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
                <IoMdArrowDropdownCircle className="w-8 h-8 text-[#e0702f]" />
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
        </div>{" "}
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6 py-4">
        {categories?.map((c) => (
          <div
            key={c.idCategory}
            className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-[#f6cdb2be]"
          >
            <div className="relative pt-[75%]">
              <Image
                alt={c.strCategory}
                src={c.strCategoryThumb}
                height={500}
                width={500}
                className="absolute top-0 left-0 transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-2xl font-bold text-[#e0702f] mb-2 text-center ">
                {c.strCategory}
              </h3>
              <p className={`text-sm text-[#60686C] line-clamp-2`}>
                {c.strCategoryDescription}
              </p>
              <div className="flex justify-center">
                <Button
                  variant="outline"
                  className="mt-2 text-[#e0702f] hover:text-[#c05f29] "
                  onClick={() => openModal(c.strCategoryDescription)}
                >
                  Read More
                </Button>
              </div>
            </div>{" "}
            {modalContent && (
              <Modal
                onClick={closeModal}
                modalContent={modalContent}
                modalHeading={c.strCategory}
              />
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Recipe;
