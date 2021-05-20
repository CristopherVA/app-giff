import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Piece"]);

  //   const handleAdd = () => {
  //     setCategories([...categories, "Naruto Shippuden"]);

  //   };

  return (
    <>
      <h1>GifExpertApp</h1>
      <hr />

      <AddCategory setCategories={setCategories} />

      {
        categories.map(category => (
          <GifGrid key={category} category={category} />
        ))
      }
    </>
  );
};
