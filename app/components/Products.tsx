"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
import { ProductType } from "../api/products/route";
import ProductCard from "./ProductCard";

export default function Products() {
  const [search, setSearch] = useState("");
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  }, []);

  const filteredProducts = search.trim() === ""
      ? allProducts
      : allProducts.filter((product: ProductType) => {
          const terms = search.toLowerCase().split(" ");
          return terms.every(
            (term) =>
              product.name.toLowerCase().includes(term) ||
              product.cars.join(" ").toLowerCase().includes(term)
          );
        });

  return (
    <div className="w-full flex flex-col justify-center h-full">
      <div className="border-gray-500 md:w-1/2 mx-auto mb-4">
        <label
          htmlFor="search"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Pesquisa
        </label>
        <div className="mt-2 grid grid-cols-1">
          <input
            id="search"
            name="search"
            type="search"
            placeholder="Pesquisar produtos"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pl-10 pr-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6"
          />
          <MagnifyingGlassIcon
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
          />
        </div>
      </div>

      <div className="mb-4 border-b border-1"></div>
      <div className="flex flex-col items-center">
        {filteredProducts.length === 0 ? (
          <p className="font-semibold text-gray-500 text-xl p-4 text-center">
            Nenhum produto encontrado
          </p>
        ) : (
          <ul>
            {filteredProducts.map((p: ProductType) => (
              <ProductCard
                key={p.name}
                name={p.name}
                image={p.image}
                model={p.model}
                treadwear={p.treadwear}
                traction={p.traction}
                temperature={p.temperature}
                speedRating={p.speedRating}
                loadIndex={p.loadIndex}
                pattern={p.pattern}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
