import React from "react";
import Image from "next/image";
import imageLoader from "@/loader";

type SimpleCardProps = {
  imgAdress: string;
  imgAlt: string;
  title: string;
  description: string;
};

export function IconTitleTextCard(props: SimpleCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl flex flex-col gap-8">
      <Image
        src={props.imgAdress}
        alt={props.imgAlt}
        className={"object-contain h-23 w-auto mr-auto"}
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
