import React from "react";
import HorizontalBorder from "./HorizontalBorder";

type Props = {
  id: string;
  title: string;
  description: string;
};

const ServiceCard = ({ id, title, description }: Props) => {
  return (
    <div className=" relative overflow-hidden rounded-3xl border dark-border p-2 md:p-3 h-full box-border featured-shadow">
      <HorizontalBorder />
      <div className="featured-bg flex flex-col gap-6 border dark-border h-full rounded-2xl p-3 md:p-8">
        <p className="text-base flex items-center gap-3">
          <span className="size-2 rounded-full bg-[#ffffff] animate-pulse white-blur "></span>
          {id}
        </p>
        <span className="h-[1px] bg-foreground w-full"></span>
        <div className="space-y-4">
          <h6 className="bg-clip-text bg-gradient-to-r from-black font-bold inline-block text-4xl tracking-wide">
            {title}
          </h6>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
