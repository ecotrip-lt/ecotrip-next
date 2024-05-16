import { OptionType } from "@/app/utils/ecotripPriceList";
import React from "react";

import Select from "react-select";

// const Checkbox = ({ children, ...props }: JSX.IntrinsicElements["input"]) => (
//   <label style={{ marginRight: "1em" }}>
//     <input type="checkbox" {...props} />
//     {children}
//   </label>
// );

const CustomSelect = ({
  options,
  isDisabled,
  isLoading,
  isClearable,
  name,
  placeholder,
}: {
  options: OptionType[];
  isDisabled: boolean;
  isLoading: boolean;
  isClearable: boolean;
  name: string;
  placeholder?: string;
}) => {
  return (
    <div className="w-80">
      <Select
        className="basic-single"
        classNamePrefix="select"
        placeholder={placeholder ?? `Select ${name}`}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isRtl={false}
        isSearchable={false}
        name={name}
        options={options}
      />
    </div>
  );
};

export default CustomSelect;
