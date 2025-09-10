"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";

const Brands = () => {
  // Duplicamos los datos para crear un efecto de loop continuo
  const duplicatedBrands = [...brandData, ...brandData];
  
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black overflow-hidden">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="relative">
            <div className="flex animate-marquee whitespace-nowrap">
              {duplicatedBrands.map((brand, key) => (
                <div className="inline-block mx-8" key={key}>
                  <SingleBrand brand={brand} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Brands;