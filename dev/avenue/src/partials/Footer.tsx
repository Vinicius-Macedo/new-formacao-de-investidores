import React from "react";
import Image, { ImageLoaderProps } from "next/image";
import imageLoader from "../loader";
import { DefaultMarginSection } from "@/components/DefaultMarginSection";

export default function Footer() {
  return (
    <footer>
      <DefaultMarginSection
        hasNoEffect={true}
        containerClassName="bg-greenDark"
        className="text-white flex flex-col gap-16"
      >
        <Image
          src={"./img/avenue-logo-branco.png"}
          alt={"Logo da Avenue"}
          width={136}
          height={26}
          loader={imageLoader}
          unoptimized
        />
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-32">
          <article>
            <p>© 2023 Avenue</p>
            <p>
              2601 S Bayshore Drive, Suite 1100 - Miami, Florida - U.S. - 33133
            </p>
          </article>
          <article>
            <p>Telefone</p>
            <p>
              +1 786-220-7233
              <br />
              (Ligação internacional)
            </p>
          </article>
          <article>
            <p>Contato</p>
            <p>customer@avenue.us</p>
          </article>
        </div>
      </DefaultMarginSection>
    </footer>
  );
}
