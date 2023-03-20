import React, { useEffect, useState } from "react";
import Image from "next/image";

const imageLoader = require("./../loader.js");

export function Header() {
  return (
    <header className="flex items-center bg-white border-b fixed left-0 top-0 w-full z-[999]">
      <div className="w-full flex flex-col items-center lg:flex-row lg:justify-between gap-8 px-16 xl:px-0  max-w-[1110px] m-auto py-4 lg:pt-8 lg:pb-16">
        <Image
          src={"./img/avenue.png"}
          alt={"Logo do monitor da Avenue"}
          width={190}
          height={60}
          loader={imageLoader}
          style={{ width: "auto", height: "auto" }}
          unoptimized
          className="object-contain w-55 sm:w-[190px]"
        />
        <div className="flex flex-col md:flex-row gap-2">
          <a
            className="border-black border rounded-full bg-white font-medium py-4 px-8 flex gap-4 justify-center items-center"
            href="https://pit.avenue.us/onboarding/foreign-finder/AVE817112"
            target="_blank"
            rel="noreferrer"
          >
            TRANSFERIR ASSESSORIA
            <Image
              src={"./img/user.png"}
              alt={"Logo do monitor da Avenue"}
              width={30}
              height={30}
              loader={imageLoader}
              unoptimized
              className="object-contain w-10"
            />
          </a>
          <a
            className="rounded-full bg-green font-medium py-4 px-8 flex gap-4 justify-center items-center"
            href="https://pit.avenue.us/onboarding/foreign-finder/AVE817112"
            target="_blank"
            rel="noreferrer"
          >
            ABRA SUA CONTA
          </a>
        </div>
      </div>
    </header>
  );
}
