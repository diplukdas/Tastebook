import React from "react";
import { Button, SingleCard } from "..";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const HomeCategories = ({ title, data }) => {
  return (
    <section className="box mt-28 flex flex-col items-center gap-6">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-3xl font-bold capitalize">Latest {title}s</h2>
        <Link to={"/recipe"}>
          <Button
            content={"View More"}
            customCss={"rounded-lg"}
            icon={<BsArrowUpRight />}
          />
        </Link>
      </div>
      <hr className="w-full" />
      {/* Cards container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {data?.slice(0, 4).map((singleData) => (
          <SingleCard
            key={singleData._id}
            singleData={singleData}
            type={title}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeCategories;