import React from "react";

const HomeSectionCard = () => {
  return (
    <div className="cursor-pointer flex flex-col bg-white rounded-lg shadow-md overflow-hidden w-[15rem] mx-3">
      <div className="h-[13rem] w-[16rem]">
        <img
          className="object-cover object-top h-full w-full"
          src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg"
          alt="category"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">T-shirt</h3>
        <p className="mt-1 text-sm text-gray-500">
          Men Solid Pure Straight Kurta
        </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
