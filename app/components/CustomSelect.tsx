"use client";
import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import { OptionType } from "../utils/ecotripPriceList";

const CustomSelect = ({
  label,
  options,
}: {
  label: string;
  options: OptionType[];
}) => {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const [error, setError] = useState<string>("");

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    const foundOption = options.find(
      (option) => option.value === e.target.value
    );
    if (foundOption) {
      console.log("Selected Option", foundOption);

      setSelectedOption(foundOption);
    } else {
      setError("Option not found");
    }
  };

  return (
    <div>
      <label htmlFor="select">{label}</label>
      <select
        name="select"
        id={`customSelect-${label}`}
        onChange={handleChange}
        value={selectedOption?.value ?? options[0].value}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error ? <div>{error}</div> : null}
    </div>
  );
};

export default CustomSelect;
