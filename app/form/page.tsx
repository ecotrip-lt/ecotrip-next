import React from "react";
import CustomLink from "../components/CustomLink";

const Form = () => {
  return (
    <div>
      <h2>Form page</h2>
      <p>Siunta ar Kiti Produktai?</p>
      <div className='flex items-center gap-4'>
        <CustomLink href='/form/shipment' label='Siunta' />
        <CustomLink href='/form/other-products' label='Kiti produktai' />
      </div>
    </div>
  );
};

export default Form;
