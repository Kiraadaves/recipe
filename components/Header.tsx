"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosSearch, IoMdArrowDropdownCircle } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Header = () => {
  const [category, setCategory] = useState("Categories");

  const handleCategorySelect = (category: string) => {
    setCategory(category);
  };

  return (
    <nav className="flex justify-between items-center gap-5 px-8 py-4">
      <div>
        <Image
          alt="logo"
          width={200}
          height={200}
          src="/logo.png"
          className="w-16 h-16"
        />
      </div>
      <div className="h-[48px] w-[414px] shadow-md pl-1 pr-5 py-[10px] flex items-center border-[1px] border-[#BFC3C5] rounded-[6px] ">
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
            className="bg-[#ffffff] border-[1px] border-[#BFC3C5] py-3 px-4  h-[48px] rounded-[6px]"
          >
            <div className="flex items-center justify-between">
              <Button variant="outline" className="text-[#60686c] text-base">
                {category === "Categories" && "Categories"}
                {category === "Starter" && "Starter"}
                {category === "Breakfast" && "Breakfast"}
                {category === "Dessert" && "Dessert"}
                {category === "Side" && "Side"}
                {category === "Beef" && "Beef"}
                {category === "Chicken" && "Chicken"}
                {category === "Goat" && "Goat"}
                {category === "Lamb" && "Lamb"}
                {category === "Pork" && "Pork"}
                {category === "SeaFood" && "SeaFood"}
                {category === "Pasta" && "Pasta"}
                {category === "Miscellaneous" && "Miscellaneous"}
                {category === "Vegan" && "Vegan"}
                {category === "Vegetarian" && "Vegetarian"}
              </Button>
              <IoMdArrowDropdownCircle className="w-8 h-8 text-[#e0702f]" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[#fafafa] w-[163px] rounded shadow-lg flex flex-col gap-3 ">
            <DropdownMenuItem
              className="text-sm font-medium text-[#101618]"
              onClick={() => handleCategorySelect("Beef")}
            >
              Beef
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-sm font-medium text-[#101618]"
              onClick={() => handleCategorySelect("Breakfast")}
            >
              Breakfast
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-sm font-medium text-[#101618]"
              onClick={() => handleCategorySelect("Chicken")}
            >
              Chicken
            </DropdownMenuItem>
            <DropdownMenuSeparator className="border-[1px] border-solid border-[#e6e9ea]" />
            <DropdownMenuItem
              className="text-sm font-medium text-[#101618]"
              onClick={() => handleCategorySelect("Dessert")}
            >
              Dessert
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-sm font-medium text-[#101618]"
              onClick={() => handleCategorySelect("Goat")}
            >
              Goat
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-sm font-medium text-[#101618]"
              onClick={() => handleCategorySelect("Lamb")}
            >
              Lamb
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-sm font-medium text-[#101618]"
              onClick={() => handleCategorySelect("Miscellaneous")}
            >
              Miscellaneous
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-sm font-medium text-[#101618]"
              onClick={() => handleCategorySelect("Pasta")}
            >
              Pasta
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-sm font-medium text-[#101618]"
              onClick={() => handleCategorySelect("Pork")}
            >
              Pork
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-sm font-medium text-[#101618]"
              onClick={() => handleCategorySelect("Seafood")}
            >
              Seafood
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-sm font-medium text-[#101618]"
              onClick={() => handleCategorySelect("Side")}
            >
              Side
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-sm font-medium text-[#101618]"
              onClick={() => handleCategorySelect("Starter")}
            >
              Starter
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-sm font-medium text-[#101618]"
              onClick={() => handleCategorySelect("Vegan")}
            >
              Vegan
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-sm font-medium text-[#101618]"
              onClick={() => handleCategorySelect("Vegetarian")}
            >
              Vegetarian
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Header;
