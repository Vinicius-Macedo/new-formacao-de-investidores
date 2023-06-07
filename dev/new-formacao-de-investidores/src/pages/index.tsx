const imageLoader = require("./../loader.js");
import Image from "next/image";
import CardNumber from "../components/CardNumber";
import CardWithImage from "../components/CardWithImage";

import { DefaultMarginSection } from "../components/DefaultMarginSection";
import IconWithText from "../components/IconWithText";
import ModuleTopic from "../components/ModuleTopic";
import Topics from "../components/Topics";

export default function Home() {
  return (
    <>
      <main className="bg-black overflow-hidden">
        <DefaultMarginSection className="flex flex-col justify-center items-center gap-8">
          <Image
            src={"./img/new-formacao-de-investidores.png"}
            alt={""}
            width={0}
            height={0}
            loader={imageLoader}
            className="absolute left-0 top-0 w-full h-full object-cover -z-10"
          />
          <div>
            <h1 className="text-white font-bold text-[24px] lg:text-[36px] text-center">
              Descubra o segredo dos investidores de sucesso
            </h1>
            <p className="title font-extrabold text-center text-yellow">
              CONDIÇÃO EXCLUSIVA:
            </p>
          </div>
          <div className="flex flex-col gap-8 items-center justify-center">
            <div className="flex flex-wrap justify-center items-center gap-8">
              <p className="font-extrabold text-[36px] lg:text-[54px]">
                <span
                  className="text-border-yellow border-solid text-black font-extrabold text-[64px] lg:text-[96px]"
                  style={{ lineHeight: "20px" }}
                >
                  50%
                </span>{" "}
                DE
                <br />
                DESCONTO
              </p>
              <p className="text-white font-extrabold border-yellow border border-solid rounded-lg flex justify-center items-center flex-col bg-[#2b2a15] w-100 h-50">
                <span className="text-[36px] lg:[54px] leading-7">VAGAS</span>
                <span className="text-[22px] lg:[34px]">LIMITADAS</span>
              </p>
            </div>

            <a
              href="https://pay.hotmart.com/A78289712N?sck=HOTMART_SITE&off=rd2651c7&bid=1676312679980"
              target="_blank"
              rel="noreferrer"
              className="text-black font-extrabold text-[22px] lg:text-[34px] bg-yellow px-8 py-4 text-center rounded"
            >
              FAZER MINHA INSCRIÇÃO NO FORMAÇÃO DE INVESTIDORES
            </a>
            <p className="text-center font-extrabold text-white text-[22px] lg:text-[34px]">
              APROVEITE! DE{" "}
              <span className="text-[#E36A6A] line-through">R$ 997,00</span> POR{" "}
              <span className="text-[#B0D364]">R$ 397,00</span> POR TEMPO
              LIMITADO
            </p>
          </div>

          <div>
            <p className="text-center lg:text-[24px]">
              Compra segura{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="#000000"
                height="157.2"
                preserveAspectRatio="xMidYMid meet"
                version="1"
                viewBox="113.8 157.2 489.7 157.2"
                width="489.7"
                zoomAndPan="magnify"
                className="object-contain w-30 h-auto inline"
              >
                <defs>
                  <clipPath id="a">
                    <path d="M 170 254 L 227.582031 254 L 227.582031 314.320312 L 170 314.320312 Z M 170 254" />
                  </clipPath>
                  <clipPath id="b">
                    <path d="M 113.789062 157.160156 L 227.582031 157.160156 L 227.582031 314.320312 L 113.789062 314.320312 Z M 113.789062 157.160156" />
                  </clipPath>
                </defs>
                <g>
                  <g id="change1_1">
                    <path
                      d="M 255.480469 287.625 L 255.480469 216.816406 C 255.480469 216.488281 255.746094 216.179688 256.121094 216.179688 L 269.71875 216.179688 C 270.113281 216.179688 270.359375 216.507812 270.359375 216.816406 L 270.359375 242.335938 L 270.566406 242.335938 C 274.167969 237.804688 279.601562 235.742188 285.574219 235.742188 C 296.285156 235.742188 299.707031 242.746094 299.707031 252.015625 L 299.707031 287.625 C 299.707031 287.917969 299.464844 288.261719 299.066406 288.261719 L 285.472656 288.261719 C 285.105469 288.261719 284.828125 287.953125 284.828125 287.625 L 284.828125 253.320312 C 284.828125 249.304688 280.632812 248.066406 277.953125 248.066406 C 275.277344 248.066406 270.359375 249.820312 270.359375 254.863281 L 270.359375 287.625 C 270.359375 287.886719 270.148438 288.261719 269.71875 288.261719 L 256.121094 288.261719 C 255.824219 288.261719 255.480469 288.019531 255.480469 287.625"
                      fill="#fafafa"
                      fillRule="evenodd"
                    />
                  </g>
                  <g id="change1_2">
                    <path
                      d="M 364.046875 273.640625 L 364.046875 249.234375 L 357.785156 249.234375 C 357.40625 249.234375 357.144531 248.917969 357.144531 248.59375 L 357.144531 239.828125 C 357.144531 239.527344 357.371094 239.28125 357.589844 239.21875 C 357.808594 239.152344 365.882812 236.773438 365.882812 236.773438 C 365.882812 236.773438 370.273438 223 370.339844 222.792969 C 370.402344 222.585938 370.636719 222.355469 370.949219 222.355469 L 378.28125 222.355469 C 378.605469 222.355469 378.921875 222.605469 378.921875 223 L 378.921875 236.773438 L 389.917969 236.773438 C 390.203125 236.773438 390.558594 237 390.558594 237.414062 L 390.558594 248.597656 C 390.558594 249.003906 390.222656 249.234375 389.917969 249.234375 L 378.921875 249.234375 L 378.921875 272.097656 C 378.921875 274.464844 380.261719 275.90625 383.554688 275.90625 L 389.917969 275.90625 C 390.347656 275.90625 390.558594 276.277344 390.558594 276.550781 L 390.558594 286.378906 C 390.558594 286.734375 390.269531 286.929688 390.128906 286.984375 C 386.28125 288.429688 384.113281 289.292969 379.640625 289.292969 C 368.546875 289.292969 364.046875 282.804688 364.046875 273.640625"
                      fill="#fafafa"
                      fillRule="evenodd"
                    />
                  </g>
                  <g id="change1_3">
                    <path
                      d="M 576.957031 273.640625 L 576.957031 249.234375 L 570.699219 249.234375 C 570.316406 249.234375 570.058594 248.917969 570.058594 248.59375 L 570.058594 239.828125 C 570.058594 239.527344 570.285156 239.28125 570.503906 239.21875 C 570.71875 239.152344 578.796875 236.773438 578.796875 236.773438 C 578.796875 236.773438 583.1875 223 583.25 222.792969 C 583.316406 222.585938 583.546875 222.355469 583.859375 222.355469 L 591.195312 222.355469 C 591.519531 222.355469 591.832031 222.605469 591.832031 223 L 591.832031 236.773438 L 602.832031 236.773438 C 603.113281 236.773438 603.472656 237 603.472656 237.414062 L 603.472656 248.597656 C 603.472656 249.003906 603.132812 249.234375 602.832031 249.234375 L 591.832031 249.234375 L 591.832031 272.097656 C 591.832031 274.464844 593.171875 275.90625 596.46875 275.90625 L 602.832031 275.90625 C 603.261719 275.90625 603.472656 276.277344 603.472656 276.550781 L 603.472656 286.378906 C 603.472656 286.734375 603.183594 286.929688 603.042969 286.984375 C 599.195312 288.429688 597.023438 289.292969 592.554688 289.292969 C 581.460938 289.292969 576.957031 282.804688 576.957031 273.640625"
                      fill="#fafafa"
                      fillRule="evenodd"
                    />
                  </g>
                  <g id="change1_4">
                    <path
                      d="M 399.5 287.625 L 399.5 237.414062 C 399.5 237.050781 399.796875 236.777344 400.140625 236.777344 L 412.425781 236.777344 C 412.730469 236.777344 412.976562 237.003906 413.035156 237.222656 C 413.09375 237.441406 414.453125 242.335938 414.453125 242.335938 L 414.660156 242.335938 C 418.265625 237.804688 423.617188 235.742188 429.59375 235.742188 C 436.902344 235.742188 440.429688 239.039062 442.386719 244.085938 L 442.796875 244.085938 C 446.503906 237.910156 452.96875 235.742188 458.941406 235.742188 C 469.648438 235.742188 473.070312 242.746094 473.070312 252.015625 L 473.070312 287.625 C 473.070312 288 472.753906 288.265625 472.433594 288.265625 L 458.753906 288.265625 C 458.347656 288.265625 458.117188 287.90625 458.117188 287.625 L 458.117188 253.558594 C 458.117188 249.542969 454.316406 247.988281 451.640625 247.988281 C 448.53125 247.988281 443.929688 249.957031 443.722656 254.488281 L 443.722656 287.625 C 443.722656 287.941406 443.488281 288.265625 443.082031 288.265625 L 429.398438 288.265625 C 429.046875 288.265625 428.765625 287.957031 428.765625 287.625 L 428.765625 253.558594 C 428.765625 249.542969 424.738281 247.988281 421.8125 247.988281 C 419.136719 247.988281 414.375 250.058594 414.375 255.105469 L 414.375 287.625 C 414.375 287.910156 414.144531 288.265625 413.742188 288.265625 L 400.136719 288.265625 C 399.734375 288.265625 399.5 287.917969 399.5 287.625"
                      fill="#fafafa"
                      fillRule="evenodd"
                    />
                  </g>
                  <g id="change1_5">
                    <path
                      d="M 482.125 248.089844 L 482.125 238.742188 C 482.125 238.410156 482.398438 238.160156 482.640625 238.113281 C 489.753906 236.726562 496.304688 235.742188 502.535156 235.742188 C 515.71875 235.742188 523.441406 238.9375 523.441406 253.148438 L 523.441406 287.625 C 523.441406 288 523.125 288.265625 522.804688 288.265625 L 509.796875 288.265625 C 509.46875 288.253906 509.25 288.050781 509.179688 287.789062 C 509.105469 287.527344 507.765625 282.703125 507.765625 282.703125 L 508.359375 282.703125 C 504.652344 287.851562 499.734375 289.292969 493.761719 289.292969 C 484.078125 289.292969 478.929688 281.777344 478.929688 272.921875 C 478.929688 259.53125 488.714844 256.855469 496.023438 256.855469 L 508.566406 256.855469 L 508.566406 253.46875 C 508.566406 249.207031 505.429688 248.332031 493.476562 248.332031 C 488.433594 248.332031 483.050781 248.730469 482.769531 248.730469 C 482.453125 248.730469 482.125 248.457031 482.125 248.089844 Z M 508.566406 266.019531 L 500.394531 266.019531 C 496.054688 266.019531 493.242188 267.683594 493.242188 272.277344 C 493.242188 277.257812 496.820312 278.40625 500.265625 278.40625 C 503.460938 278.40625 508.566406 276.492188 508.566406 270.109375 L 508.566406 266.019531"
                      fill="#fafafa"
                      fillRule="evenodd"
                    />
                  </g>
                  <g id="change1_6">
                    <path
                      d="M 532.125 287.625 L 532.125 237.414062 C 532.125 237.0625 532.425781 236.777344 532.761719 236.777344 L 544.921875 236.777344 C 545.261719 236.777344 545.5 237.019531 545.554688 237.304688 C 545.605469 237.585938 547 245.117188 547 245.117188 L 547.207031 245.117188 C 550.480469 238.367188 557.269531 235.921875 563.105469 235.753906 C 563.425781 235.742188 563.761719 235.996094 563.761719 236.394531 L 563.761719 250.394531 C 563.761719 250.785156 563.429688 251.042969 563.121094 251.042969 L 559.644531 251.042969 C 550.273438 251.042969 547 254.796875 547 259.429688 L 547 287.625 C 547 288.035156 546.648438 288.265625 546.363281 288.265625 L 532.765625 288.265625 C 532.414062 288.265625 532.125 287.96875 532.125 287.625"
                      fill="#fafafa"
                      fillRule="evenodd"
                    />
                  </g>
                  <g id="change1_7">
                    <path
                      d="M 306.0625 262.519531 C 306.0625 246.144531 312.460938 235.742188 330.585938 235.742188 C 348.8125 235.742188 355.210938 246.144531 355.210938 262.519531 C 355.210938 278.996094 348.8125 289.292969 330.585938 289.292969 C 312.460938 289.292969 306.0625 278.996094 306.0625 262.519531 Z M 322.164062 262.519531 C 322.164062 271.375 323.472656 276.808594 330.585938 276.808594 C 337.796875 276.808594 339.109375 271.375 339.109375 262.519531 C 339.109375 253.664062 337.796875 248.308594 330.585938 248.308594 C 323.472656 248.308594 322.164062 253.664062 322.164062 262.519531"
                      fill="#fafafa"
                      fillRule="evenodd"
                    />
                  </g>
                  <g clipPath="url(#a)" id="change2_1">
                    <path
                      d="M 170.667969 314.320312 C 170.59375 314.320312 170.515625 314.320312 170.4375 314.320312 L 170.894531 314.320312 C 170.820312 314.320312 170.742188 314.320312 170.667969 314.320312 M 227.582031 255.039062 L 227.582031 254.171875 C 227.582031 254.25 227.582031 254.328125 227.582031 254.40625 L 227.582031 254.808594 C 227.582031 254.886719 227.582031 254.964844 227.582031 255.039062"
                      fill="#ffffff"
                    />
                  </g>
                  <g clipPath="url(#b)" id="change3_1">
                    <path
                      d="M 170.894531 314.320312 L 170.4375 314.320312 C 170.355469 314.320312 170.273438 314.320312 170.191406 314.320312 C 139.007812 314.0625 113.890625 288.75 113.789062 257.644531 L 113.789062 257.28125 C 113.789062 257.1875 113.792969 257.085938 113.792969 256.988281 C 113.800781 256.222656 113.835938 255.464844 113.871094 254.707031 C 113.902344 254.074219 113.945312 253.441406 113.996094 252.808594 L 113.996094 252.804688 C 114.113281 251.351562 114.347656 249.414062 114.339844 249.414062 C 114.339844 249.414062 114.335938 249.4375 114.328125 249.484375 C 116.480469 228.789062 127.8125 206.519531 140.328125 193.4375 C 140.414062 193.351562 140.519531 193.308594 140.621094 193.308594 C 140.863281 193.308594 141.082031 193.53125 140.929688 193.859375 C 139.398438 197.148438 136.210938 206.59375 140.636719 206.890625 C 140.707031 206.894531 140.777344 206.898438 140.847656 206.898438 C 142.195312 206.898438 142.914062 205.988281 143.738281 204.324219 C 148.914062 193.871094 153.765625 165.21875 178.078125 157.195312 C 178.148438 157.171875 178.222656 157.160156 178.292969 157.160156 L 178.300781 157.160156 C 178.609375 157.160156 178.859375 157.386719 178.585938 157.820312 C 174.097656 165.019531 171.589844 176.546875 178.195312 187.324219 C 180.882812 191.710938 183.644531 193.363281 185.84375 193.363281 C 186.886719 193.363281 187.804688 192.992188 188.53125 192.359375 C 191.328125 189.910156 190.609375 182.726562 189.398438 180.421875 C 189.25 180.132812 189.460938 179.878906 189.722656 179.878906 C 189.808594 179.878906 189.894531 179.90625 189.980469 179.960938 C 207.652344 191.910156 199.324219 209.132812 207.371094 209.671875 C 207.5 209.679688 207.628906 209.683594 207.75 209.683594 C 211.902344 209.683594 211.703125 204.734375 210.941406 201.957031 C 210.871094 201.648438 211.035156 201.457031 211.246094 201.457031 C 211.386719 201.457031 211.546875 201.542969 211.671875 201.738281 C 222.558594 219.09375 227.480469 240.042969 227.582031 254.171875 L 227.582031 255.039062 C 227.574219 255.859375 227.554688 256.648438 227.515625 257.414062 C 227.515625 257.585938 227.523438 257.753906 227.523438 257.925781 C 227.265625 289.097656 201.980469 314.199219 170.894531 314.320312 M 170.652344 231.078125 C 156.1875 231.078125 144.402344 242.746094 144.28125 257.238281 C 144.164062 271.804688 155.875 283.710938 170.441406 283.832031 C 170.515625 283.832031 170.589844 283.832031 170.664062 283.832031 C 185.128906 283.832031 196.914062 272.164062 197.03125 257.671875 C 197.152344 243.105469 185.441406 231.199219 170.875 231.078125 C 170.800781 231.078125 170.726562 231.078125 170.652344 231.078125"
                      fill="#fafafa"
                    />
                  </g>
                </g>
              </svg>{" "}
              |{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                data-name="Layer 1"
                fill="#ffffff"
                height="30.5"
                preserveAspectRatio="xMidYMid meet"
                version="1"
                viewBox="3.0 0.9 26.0 30.5"
                width="26"
                zoomAndPan="magnify"
                className="w-7 object-contain inline"
              >
                <g id="change1_1">
                  <path
                    d="M15.758,31.339a1.016,1.016,0,0,0,.484,0A16.817,16.817,0,0,0,29,15V7a1,1,0,0,0-1-1A17.653,17.653,0,0,1,16.707,1.293a1,1,0,0,0-1.414,0C10.66,5.926,4.064,6,4,6A1,1,0,0,0,3,7v8A16.817,16.817,0,0,0,15.758,31.339ZM5,7.946A19.562,19.562,0,0,0,16,3.374,19.562,19.562,0,0,0,27,7.946V15A14.821,14.821,0,0,1,16,29.336,14.821,14.821,0,0,1,5,15Z"
                    fill="inherit"
                  />
                </g>
                <g id="change1_2">
                  <path
                    d="M14.293,19.707a1.013,1.013,0,0,0,1.414,0l6-6a1,1,0,0,0-1.414-1.414L15,17.586l-2.293-2.293a1,1,0,0,0-1.414,1.414Z"
                    fill="inherit"
                  />
                </g>
              </svg>{" "}
              Ambiente 100% seguro
            </p>
          </div>
        </DefaultMarginSection>
        <div className="flex justify-between w-full max-w-[1110px] px-16 xl:px-0 pt-16 m-auto">
          <div>
            <p className="font-montserrat text-[1.125rem] sm:text-[1.625rem] font-semibold leading-[1.25rem] sm:leading-6">
              Formação de
              <br />
              investidores
            </p>
            <p className="text-gray text-[.75rem] sm:text-[1rem]">
              SEJA UM MULTI-INVESTIDOR
            </p>
          </div>
          <div>
            <figure className="relative w-70 h-30 sm:w-100">
              <Image
                src={"./img/monitor-do-mercado.webp"}
                alt={"Logo do monitor do mercado"}
                style={{ width: "auto", height: "auto", objectFit: "contain" }}
                width={247}
                height={61}
                loader={imageLoader}
                priority
                unoptimized
              />
            </figure>
          </div>
        </div>
        <section>
          <div
            className={
              "px-8 py-32 sm:px-16 md:py-32 xl:px-0 xl:w-[1110px] xl:m-auto flex flex-col-reverse items-center md:grid grid-cols-2 xl:flex xl:flex-row overflow-hidden xl:overflow-visible xl:pt-32"
            }
          >
            <div className="max-w-[665px] xl:w-[665px] flex flex-col gap-12 items-center lg:items-start">
              <h2 className="text-center text-[1.4063rem] xl:text-[2.25rem] font-extrabold md:text-left lg:text-justify">
                Aprenda escolher os{" "}
                <span className="text-yellow">
                  melhores investimentos e acelerar seus resultados.
                </span>{" "}
                Conheça os conceitos e práticas de investimentos para tomar as
                melhores decisões e montar{" "}
                <span className="text-yellow">
                  uma carteira de investimentos lucrativa.
                </span>
              </h2>
              <div className="flex flex-col items-center gap-2 w-full lg:items-start">
                <p className="semititle text-center md:text-left">
                  Faça agora sua matrícula
                </p>
                <a
                  href="https://pay.hotmart.com/A78289712N?sck=HOTMART_SITE&off=rd2651c7&bid=1676312679980"
                  target={"_blank"}
                  rel="noreferrer"
                  className="bg-yellow hover:bg-[#d6bc29]  text-black font-extrabold px-8 py-4 lg:px-16 lg:py-12 rounded max-w-[425px] text text-center"
                >
                  QUERO GARANTIR MINHA VAGA
                </a>
              </div>
            </div>
            <figure className="relative flex justify-center xl:-mr-30">
              <div className="circle-decoration-active absolute w-[400px] h-[400px] z-[1] left-1/2 top-1/2 -translate-x-1/2 -translate-y-[50%] xl:w-[600px] xl:h-[600px]"></div>
              <picture>
                <source
                  media="(max-width:500px)"
                  srcSet="./img/hero-photo-p.webp"
                />
                <img
                  alt="Douglas Soave"
                  src="./img/hero-photo.webp"
                  width="300"
                  height="405"
                  decoding="sync"
                  data-nimg="1"
                  className="object-contain z-[2] w-[300px] xl:w-[520px]"
                  loading="eager"
                  style={{ color: "transparent" }}
                />
              </picture>
            </figure>
          </div>
        </section>

        <DefaultMarginSection className="flex flex-col gap-32 relative">
          <div className="circle-decoration absolute w-[400px] h-[400px] z-[1] -left-[200px] md:-left-[150px] lg:-left-[300px] 3xl:-left-[450px] -top-[100px] lg:-top-[150px] xl:w-[600px] xl:h-[600px] 3xl:h-[650px] 3xl:w-[650px]"></div>

          <h2 className="title font-extrabold text-center">
            O QUE O{" "}
            <span className="text-yellow">FORMAÇÃO DE INVESTIDORES</span>
            <br /> IRÁ ENTREGAR:
          </h2>
          <div className="flex flex-wrap justify-center xl:justify-between gap-16 relative">
            <IconWithText
              imgAdress={"./img/icon-book.webp"}
              imgAlt={"icone de livro"}
              title={"Conteúdo"}
              text={"5 Módulos de conteúdo exclusivo"}
            />
            <IconWithText
              imgAdress={"./img/icon-clock.webp"}
              imgAlt={"icone de relógio"}
              title={"Inicio das aulas"}
              text={
                "Modelo flexível para adaptar a sua rotina com aulas gravadas."
              }
            />
            <IconWithText
              imgAdress={"./img/icon-screen.webp"}
              imgAlt={"icone de tela"}
              title={"Duração"}
              text={
                "Com método estruturado e pragmático, o curso conta com 5 horas de duração"
              }
            />
          </div>
        </DefaultMarginSection>

        <DefaultMarginSection className="flex flex-col items-center m-auto gap-32">
          <div className="max-w-[652px]">
            <p className="text text-gray font-normal text-center leading-8	">
              Com linguagem simples e objetiva, conheça os tipos de
              investimentos e faça o seu dinheiro render de verdade!
            </p>
            <h2 className="text-center text-yellow font-extrabold title max-w-[652px]">
              OS SEGREDOS REVELEADOS SOBRE
            </h2>
          </div>
          <div className="flex flex-wrap gap-15 justify-center items-center w-full m-auto">
            <CardWithImage
              imgAdress={"./img/card-image-3.webp"}
              imgAlt={"Segurando globo com olograma terrestre"}
              title={"PRINCÍPIOS FUNDAMENTAIS"}
            />
            <CardWithImage
              imgAdress={"./img/card-image-2.webp"}
              imgAlt={"Olograma de gráficos subindo"}
              title={"MONTAGEM DE CARTEIRA"}
            />
            <CardWithImage
              imgAdress={"./img/card-image-4.webp"}
              imgAlt={"Dólars com calculadora e gráficos"}
              title={"COMO INVESTIR"}
            />
            <CardWithImage
              imgAdress={"./img/card-image-5.webp"}
              imgAlt={"Copo com uma planta e moedas no lugar da terra"}
              title={"FUNDOS DE INVESTIMENTOS"}
            />
            <CardWithImage
              imgAdress={"./img/card-image-1.webp"}
              imgAlt={"Olograma de gráficos subindo"}
              title={"RENDA FIXA"}
            />
            <CardWithImage
              imgAdress={"./img/card-image-6.webp"}
              imgAlt={"Gráficos subindo"}
              title={"AÇÕES"}
            />
            <CardWithImage
              imgAdress={"./img/card-image-7.webp"}
              imgAlt={
                "Olagrama com opções e uma pessoa apertando o botão investment"
              }
              title={"OPÇÕES"}
            />
            <CardWithImage
              imgAdress={"./img/card-image-8.webp"}
              imgAlt={"Globo terrestre olográfico com conexões"}
              title={"BDRs"}
            />
            <CardWithImage
              imgAdress={"./img/card-image-9.webp"}
              imgAlt={"celular com ilustração de casa em cima"}
              title={"FUNDOS IMOBILIÁRIOS"}
            />
          </div>
        </DefaultMarginSection>
        <DefaultMarginSection className="relative flex justify-center flex-wrap gap-32 lg:gap-0 lg:justify-between">
          <div className="circle-decoration absolute w-[400px] h-[400px] z-[1] -right-[200px] md:-right-[150px] lg:-right-[300px] 3xl:-right-[450px] -top-[100px] lg:-top-[150px] xl:w-[600px] xl:h-[600px] 3xl:h-[650px] 3xl:w-[650px]"></div>
          <div>
            <h2 className="font-bold title leading-10 text-center lg:text-left lg:w-[268px]">
              Invista no seu conhecimento!
            </h2>
            <div>
              <Topics
                number={"01"}
                topic={"LIBERDADE"}
                text={"Aprenda de onde você estiver."}
              />
              <Topics
                number={"02"}
                topic={"AUTONOMIA"}
                text={
                  "Organize seus estudos de acordo com à sua disponibilidade"
                }
              />
              <Topics
                number={"03"}
                topic={"SUPER BÔNUS"}
                text={
                  "Duas aulas AO VIVO com contéudos exclusivos + tira dúvidas"
                }
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-6">
            <div>
              <p className="font-bold title">Faça sua inscrição AGORA!</p>
              <p className="text-yellow text-[24px]">
                CONDIÇÃO EXCLUSIVA PRÉ-INSCRIÇÃO
                <br />
                <span className="text-white">
                  DE R$ <span className="line-through">997,00</span>
                </span>
              </p>
              <div className="flex items-center gap-8">
                <div className="text-yellow flex flex-col items-center">
                  <p className="text">POR</p>
                  <p className="text-[36px] font-bold leading-6">R$</p>
                </div>
                <p className="text-yellow text-[80px] sm:text-[120px] font-extrabold gap-4 leading-[1]">
                  397,00
                </p>
              </div>
            </div>
            <a
              href="https://pay.hotmart.com/A78289712N?sck=HOTMART_SITE&off=rd2651c7&bid=1676312679980"
              target={"_blank"}
              rel="noreferrer"
              className="bg-yellow hover:bg-[#d6bc29]  text-black font-extrabold py-12 w-full max-w-[449px] text-[22px] sm:text-[32px] text-center rounded"
            >
              FAZER MINHA INSCRIÇÃO
            </a>
          </div>
        </DefaultMarginSection>
        <DefaultMarginSection
          hasNoEffect={true}
          containerClassName="background-image-default z-[3] relative"
          className={"flex flex-col gap-32 items-center"}
        >
          {/* background: center no-repeat;
              background-size: cover;
              background-image: url("./img/background-image.webp"); */}
          <h2 className="title font-extrabold text-center leading-10">
            O que vai aprender no
            <br />
            <span className="text-yellow">Formação de investidores:</span>
          </h2>
          <div className="grid sm:grid-cols-2 justify-center w-full gap-y-16 gap-x-48 max-w-[758px]">
            <ModuleTopic
              number={"1"}
              description={"Introdução à formação de investidores"}
            />
            <ModuleTopic number={"2"} description={"Sistema financeiro"} />
            <ModuleTopic number={"3"} description={"Renda Fixa"} />
            <ModuleTopic number={"4"} description={"Renda Variável"} />
            <ModuleTopic
              number={"5"}
              description={"Montando uma Carteira de Investimentos Próspera"}
            />
          </div>
          <a
            href="https://pay.hotmart.com/A78289712N?sck=HOTMART_SITE&off=rd2651c7&bid=1676312679980"
            target={"_blank"}
            rel="noreferrer"
            className="text text-black font-extrabold px-8 py-10 w-full max-w-[555px] bg-yellow hover:bg-[#d6bc29]  rounded text-center"
          >
            QUERO ACESSAR TODOS OS MÓDULOS
          </a>
        </DefaultMarginSection>
        <DefaultMarginSection className="flex flex-col  gap-32 sm:gap-64 relative">
          <div className="circle-decoration absolute w-[400px] h-[400px] z-[1] -left-[200px] md:-left-[150px] lg:-left-[300px] 3xl:-left-[450px] -top-[100px] lg:-top-[150px] xl:w-[600px] xl:h-[600px] 3xl:h-[650px] 3xl:w-[650px]"></div>
          <div className="flex flex-col items-center">
            <h2 className="text-center title font-extrabold text-yellow">
              CONDIÇÃO EXCLUSIVA
              <br />
              PRÉ-INSCRIÇÃO
            </h2>
            <p className="title text-center">
              DE R$ 997,00 <span className="text-yellow">POR R$ 397,00</span>
            </p>
            <a
              href="https://pay.hotmart.com/A78289712N?sck=HOTMART_SITE&off=rd2651c7&bid=1676312679980"
              target={"_blank"}
              rel="noreferrer"
              className={
                "max-w-[415px] w-full text-center py-10 font-extrabold text text-black bg-yellow hover:bg-[#d6bc29]  mt-8 rounded"
              }
            >
              FAZER MINHA INSCRIÇÃO
            </a>
          </div>
          <div className="gap-15 flex flex-wrap lg:grid lg:grid-cols-2 lg:max-w-[540px] justify-center m-auto xl:flex xl:max-w-none">
            <CardNumber
              number={"01"}
              description={"Saia do zero e torne-se um investidor completo"}
            />
            <CardNumber
              number={"02"}
              description={"Faça você mesmo seu dinheiro render mais"}
            />
            <CardNumber
              number={"03"}
              description={"Conheça os diferentes investimentos"}
            />
            <CardNumber
              number={"04"}
              description={
                "Segurança e confiança para você e para a sua família"
              }
            />
          </div>
        </DefaultMarginSection>
        <DefaultMarginSection className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-32 justify-between items-center">
          <div className="flex flex-col gap-16 w-full lg:max-w-[430px]">
            <h2 className="text-center lg:text-left text-[36px] lg:text-[54px] font-bold leading-[1]">
              Com quem você vai <span className="text-yellow">aprender?</span>
            </h2>
            <div>
              <p className="title font-extrabold text-yellow text-center lg:text-left">
                Douglas Soave
              </p>
              <p className="text font-semibold leading-10 text-center lg:text-left">
                Investidor profissional - ANCORD, Diretor & Partner no grupo
                Wise | BTG Pactual; MBA em Gestão Comercial e Negócios Sales
                Strategy - University of Michigan; Pós-graduado pela Fundação
                Getúlio Vargas (FGV); Engenheiro Mecânico - Escola de Engenharia
                de Piracicaba.
              </p>
            </div>
          </div>
          <figure className="relative flex md:max-w-[300px] lg:w-full lg:max-w-[577px] h-full max-h-[706px]">
            <div className="circle-decoration-active absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] z-[1] right-0 bottom-0 3xl:h-[650px] 3xl:w-[650px]"></div>
            <Image
              src={"./img/douglas-footer.webp"}
              alt={"Douglas Soave Foto"}
              className={"object-contain"}
              loader={imageLoader}
              width={577}
              height={706}
              unoptimized={true}
            />
          </figure>
        </DefaultMarginSection>
      </main>
    </>
  );
}
