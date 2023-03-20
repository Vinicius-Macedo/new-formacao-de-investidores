import React from "react";
import Image from "next/image";
import imageLoader from "@/loader";

type Props = {
  description: string;
};

export default function TopicWithIcon(props: Props) {
  return (
    <p className="flex items-center gap-4">
      <Image
        src={"./img/confere.svg"}
        alt={"Icone de confere"}
        className={"object-contain"}
        width={30}
        height={30}
        loader={imageLoader}
        unoptimized
      />
      {props.description}
    </p>
  );
}
