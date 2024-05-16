"use client";

// import CategoriesSelect from '@/app/components/CategoriesSelect';
import { FormFields } from "@/app/page";
import { categoriesOptions } from "@/app/utils/products";
import React from "react";
// import { Form, useForm } from 'react-hook-form';

const FirstStep = () => {
  return (
    <div>
      {categoriesOptions
        ? categoriesOptions.map((option) => (
            <div key={option.value}>
              {option.label} {"=>"} {option.value}
            </div>
          ))
        : null}
    </div>
  );
};

export default FirstStep;
