import Link from "next/link";
import React from "react";

type Props = {
  description: string;
};

export default function Topic(props: Props) {
  return (
    <Link className="font-montserrat text-[22px]" href={"https://avenue.us/atendimento/"}>{props.description}</Link>
  );
}
