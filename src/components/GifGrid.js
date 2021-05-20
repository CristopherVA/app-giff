import React from "react";
import { useFetchGif } from "../hooks/useFetchGif";
import GifGridItem from "./GifGridItem";
// import { getGif } from "../helpers/getGif";


const GifGrid = ({ category }) => {

    const {data, loading} = useFetchGif(category)


  return (
    <> 
      <h3 className="animate__animated animate__bounce animate__fadeInLeft">{category}</h3>

        {loading ? <p className="animate__animated animate__bounce animate__zoomInLeft">Loading</p> : null}

      <div className="card-grid">
        {data.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
