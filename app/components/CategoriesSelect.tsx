"use client";

import React from "react";
import useCategories from "../utils/useCategories";
import CustomSelect from "./reusableComponents/form/select/CustomSelect";

const CategoriesSelect = () => {
  const { categories, isLoading } = useCategories();

  const options = categories ? categories : [];
  console.log("Categories in client side component", categories);

  return (
    <div className="w-full">
      <CustomSelect
        name="category"
        options={options}
        isClearable={true}
        isLoading={isLoading}
        isDisabled={false}
      />
    </div>
  );
  // (
  //   <Controller
  //     control={methods.control}
  //     name="category"
  //     render={({ field }) => {
  //       return <CustomSelect options={options} {...field} />;
  //     }}
  //   />
  // );
};

export default CategoriesSelect;
