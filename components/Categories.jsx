import React, { useEffect, useState } from "react";
import { getCategories } from "@/services";
import Link from "next/link";

const Categories = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="font-semibold text-xl mb-8 border-b pb-4">Categories</h3>
      {categories?.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="cursor-pointer block pb-3 mb-3">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
