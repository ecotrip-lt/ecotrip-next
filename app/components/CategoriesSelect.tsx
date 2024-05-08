"use client";

import React from "react";
import useCategories from "../utils/useCategories";
import CustomSelect from "./reusableComponents/form/select/CustomSelect";
import { Controller, UseFormReturn } from "react-hook-form";
import { FormFields } from "../page";

const CategoriesSelect = ({
  methods,
}: {
  methods: UseFormReturn<FormFields, any, undefined>;
}) => {
  const categories = useCategories();

  const options = categories ?? [];
  console.log("Categories in client side component", categories);

  return (
    <Controller
      control={methods.control}
      name="category"
      render={({ field }) => {
        return (
          <CustomSelect
            label="Categories"
            options={options}
            {...field}
            // onChange={(value) => {
            //   console.log("CHANGING VALUE", value);
            //   field.onChange(value);
            // }}
            //   {...methods.register("category")}
          />
        );
      }}
    />
  );
};

export default CategoriesSelect;
