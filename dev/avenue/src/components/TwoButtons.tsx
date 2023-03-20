import React from "react";

export default function TwoButtons() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4">
        <a
          className="text rounded-full border border-green text-green bg-greenDark py-4 px-8 flex gap-4 justify-center items-center"
          href="https://pit.avenue.us/onboarding/foreign-finder/AVE817112"
          target="_blank"
          rel="noreferrer"
        >
          ABRA SUA CONTA
        </a>
        <a
          className="text rounded-full border border-black py-4 px-8 flex gap-4 justify-center items-center"
          href="https://pit.avenue.us/onboarding/foreign-finder/AVE817112"
          target="_blank"
          rel="noreferrer"
        >
          TRANSFERIR ASSESSORIA
        </a>
      </div>
    </>
  );
}
