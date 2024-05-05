"use client";

import CategoriesSelect from "@/app/components/CategoriesSelect";
import { FormFields } from "@/app/page";
import React from "react";
import { Form, useForm } from "react-hook-form";

const FirstStep = ({}: {}) => {
  const methods = useForm<FormFields>({
    defaultValues: {
      category: null,
    },
  });

  const formValues = methods.watch();

  console.log("form", formValues);

  return (
    <Form {...methods}>
      <form>
        <CategoriesSelect methods={methods} />
      </form>
    </Form>
  );
};

export default FirstStep;
