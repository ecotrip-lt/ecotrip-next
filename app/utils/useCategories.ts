"use client";

import { useEffect, useState } from "react";
import { fetchWrapper } from "./fetchWrapper";
import { OptionType } from "./ecotripPriceList";

const useCategories = () => {
  const [categories, setCategories] = useState<OptionType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getCategoriesSelectOptions = async () => {
    const response = await fetchWrapper("ecotrip-pricelist", {
      httpOptions: {
        method: "GET",
      },
    });

    const data = await response.json();
    console.log("data", data);
    setCategories(data);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getCategoriesSelectOptions();
  }, []);

  return { categories, isLoading };
};
export default useCategories;
