"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { SearchBox } from "./SearchBox";
import Step from "./Step";

type AddressFormProps = {
  addressFrom: string;
  addressTo: string;
};

const AddressForm = () => {
  const { register, setValue, watch, getValues } = useForm<AddressFormProps>({
    defaultValues: {},
  });

  const form = watch();

  return (
    <Step title='Paėmimo ir pristatymo adresai' step={1}>
      <div>
        <h2>From</h2>
        <SearchBox {...register("addressFrom")} defaultValue='' />
        <h2>to</h2>
        <SearchBox {...register("addressTo")} defaultValue='' />
      </div>
    </Step>
  );
};

export default AddressForm;
