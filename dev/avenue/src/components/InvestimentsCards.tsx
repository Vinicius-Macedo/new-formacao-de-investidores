import React from "react";
import Image from "next/image";
import imageLoader from "@/loader";

type SimpleCardProps = {
  imgAdress: string;
  imgAlt: string;
  title: string;
  description: string;
};

export function InvestimentsCards(props: SimpleCardProps) {
  return (
    <div className="p-8 rounded-xl flex flex-col items-center gap-8 border-2 border-solid border-greenDark">
      <Image
        src={props.imgAdress}
        alt={props.imgAlt}
        className={"object-contain h-50 w-auto"}
        loader={imageLoader}
        unoptimized
        width={30}
        height={30}
      />
      <h3 className="font-bold">{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}
