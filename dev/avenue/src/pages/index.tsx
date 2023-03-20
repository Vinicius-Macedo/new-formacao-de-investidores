const imageLoader = require("./../loader.js");
import { DefaultMarginSection } from "@/components/DefaultMarginSection";
import { IconTitleTextCard } from "@/components/IconTitleTextCard";
import { InvestimentsCards } from "@/components/InvestimentsCards";
import Topic from "@/components/Topic";
import TopicWithIcon from "@/components/TopicWithIcon";
import TwoButtons from "@/components/TwoButtons";
import Footer from "@/partials/Footer";
import { Header } from "@/partials/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden pt-46">
        <DefaultMarginSection
          hasNoEffect={true}
          className="flex flex-col-reverse lg:flex-row items-center w-full justify-between"
        >
          <article className="max-w-[635px] flex flex-col md:items-center gap-8 lg:gap-16">
            <h1 className="font-montserrat font-semibold  big-title">
              Invista globalmente com assessoria especializada
            </h1>
            <p className="big-text">
              Acesse mercados globais com inúmeras vantagens, assessoria
              personalizada e o melhor: sem custos
            </p>
            <TwoButtons />
          </article>
          <Image
            src={"./img/hero-image.png"}
            alt={"Logo do monitor da Avenue"}
            width={351}
            height={502}
            loader={imageLoader}
            priority
            unoptimized
            className="object-contain"
          />
        </DefaultMarginSection>
        <DefaultMarginSection
          containerClassName="relative bg-[#112F27]"
          className="flex justify-center xl:justify-end"
        >
          <div className="bg-dark w-full h-full absolute left-0 top-0"></div>
          <Image
            src={"./img/bg-image.png"}
            alt={""}
            className="object-cover xl:object-contain"
            style={{ objectPosition: "0 20%" }}
            unoptimized
            fill
            loader={imageLoader}
          />
          <div className="flex flex-col items-center gap-16">
            <h2 className="font-montserrat font-semibold text-green text-[28.43px] text-center">
              Tenha acesso à vantagens:
            </h2>
            <div className="relative grid md:grid-cols-2 lg:grid-cols-3 auto-rows-fr w-full max-w-[748px] gap-17">
              <IconTitleTextCard
                imgAdress={"./img/card-icons-01.svg"}
                imgAlt={"Icone de fone de ouvido"}
                title={"Assessoria especializada"}
                description={
                  "Conte com assessores dedicados ao mercado internacional, focado em oferecer suporte à você, investidor"
                }
              />
              <IconTitleTextCard
                imgAdress={"./img/card-icons-02.svg"}
                imgAlt={"Icone de documentos com lupa"}
                title={"Relatórios e análises"}
                description={
                  "Tenha acesso aos principais relatórios e analises do mercado. Conte com informações relevantes para tomar decisões sobre seus investimentos"
                }
              />
              <IconTitleTextCard
                imgAdress={"./img/card-icons-03.svg"}
                imgAlt={"Icone de porcentagem"}
                title={"Suporte Fiscal"}
                description={
                  "O ambiente fiscal é um dos principais motivos de se investir no exterior. Tenha acesso à suporte fiscal para tirar suas dúvidas"
                }
              />
              <IconTitleTextCard
                imgAdress={"./img/card-icons-04.svg"}
                imgAlt={"Icone de balão de fala"}
                title={"Suporte tributário"}
                description={
                  "Conte com relatórios e suporte para a parte tributária, facilitando a relação com impostos em investimentos no exterior"
                }
              />
              <IconTitleTextCard
                imgAdress={"./img/card-icons-05.svg"}
                imgAlt={"Icone de pessoas interligadas"}
                title={"Plano de sucessão"}
                description={
                  "Conte com uma das principais plataformas do mercado para investir diretamente em ativos internacionais"
                }
              />
              <IconTitleTextCard
                imgAdress={"./img/card-icons-06.svg"}
                imgAlt={"Icone de "}
                title={"Robustez e segurança"}
                description={
                  "Tenha solidez e segurança com suas informações e com seu patrimônio"
                }
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-8">
              <a
                className="text rounded-full border bg-white border-black py-4 px-8 flex gap-4 justify-center items-center font-semibold"
                href="https://pit.avenue.us/onboarding/foreign-finder/AVE817112"
                target="_blank"
                rel="noreferrer"
              >
                TRANSFERIR ASSESSORIA
              </a>
              <a
                className="font-semibold text rounded-full bg-green text-greenDark py-4 px-8 flex gap-4 justify-center items-center"
                href="https://pit.avenue.us/onboarding/foreign-finder/AVE817112"
                target="_blank"
                rel="noreferrer"
              >
                ACESSE AGORA
              </a>
            </div>
          </div>
        </DefaultMarginSection>
        <DefaultMarginSection containerClassName="bg-[#EFFEF4]">
          <div className="flex flex-col items-center gap-32">
            <div className="flex flex-col items-center">
              <p className="text-[28.43px] leading-5">Investimentos</p>
              <h2 className="font-bold text-center text-[1.7769rem] first:md:text-[36.43px]">
                Seu dinheiro tão global quanto você
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 max-w-[1024px]">
              <InvestimentsCards
                imgAdress={"./img/investiment-card-01.svg"}
                imgAlt={"Icone de moeda"}
                title={"Bonds"}
                description={
                  "Títulos de dívida. São títulos de renda fixa negociados no exterior, tanto públicos como privados."
                }
              />
              <InvestimentsCards
                imgAdress={"./img/investiment-card-02.svg"}
                imgAlt={"Icone de casa gráfico e moeda"}
                title={"REITs"}
                description={
                  "Invista em fundos de investimento imobiliário, são uma maneira de investir em imóveis sem a necessidade de possuir fisicamente uma propriedade."
                }
              />
              <InvestimentsCards
                imgAdress={"./img/investiment-card-03.svg"}
                imgAlt={"Icone de gráfico de ações"}
                title={"Stocks"}
                description={
                  "Invista em ações das maiores empresas do mundo ou tenha acesso a milhares de empresas com capital aberto por todo o mundo"
                }
              />
              <InvestimentsCards
                imgAdress={"./img/investiment-card-04.svg"}
                imgAlt={"Icone de saco com cifrão"}
                title={"ETFs"}
                description={
                  "São fundos negociados em bolsa, são uma forma de investir em uma cesta de ativos, como ações, títulos e commodities, em uma única transação."
                }
              />
            </div>
            <TwoButtons />
          </div>
        </DefaultMarginSection>
        <DefaultMarginSection className="flex flex-col gap-16 items-center">
          <div className="flex flex-col lg:flex-row gap-32">
            <Image
              src={"./img/mulher-segurando-tablet.png"}
              alt={"Mulher segurando laptop sorrindo"}
              loader={imageLoader}
              unoptimized
              width={445}
              height={426}
            />
            <article className="bg-greenDark text-white p-16 rounded-xl flex flex-col gap-16 justify-center w-full lg:max-w-[350px]">
              <p className="flex gap-8 items-center font-semibold">
                <Image
                  src={"./img/lampada.svg"}
                  alt={"Icone de lâmpada"}
                  width={45}
                  height={45}
                  className={"object-contain"}
                  unoptimized
                  loader={imageLoader}
                />
                Um mundo de vantagens exclusivas para você:
              </p>
              <div className="flex flex-col gap-8">
                <TopicWithIcon description={"Assessoria especializada"} />
                <TopicWithIcon description={"Relatórios e Analises"} />
                <TopicWithIcon description={"Suporte Fiscal"} />
                <TopicWithIcon description={"Suporte tributário"} />
                <TopicWithIcon description={"Plataforma"} />
                <TopicWithIcon description={"Segurança e Robustez"} />
              </div>
            </article>
          </div>
          <TwoButtons />
        </DefaultMarginSection>
        <DefaultMarginSection className="flex flex-col items-center lg:grid lg:grid-cols-2 gap-32 items-center">
          <article className="justify-self-center max-w-[270px]">
            <p className="font-montserrat font-semibold  big-title leading-[3rem] text-center">
              Ainda com dúvidas?
            </p>
            <p className="font-montserrat">Veja todas as dúvidas frequentes</p>
          </article>
          <div className="flex flex-col gap-16">
            <Topic description={"Como faço um depósito na Avenue?"} />
            <Topic description={"Posso fazer depósito diretamente em US$?"} />
            <Topic
              description={
                "Fiz uma venda, por que não consigo realizar câmbio?"
              }
            />
            <Topic
              description={
                "Acabei de realizar um câmbio, por que os valores não estão disponíveis?"
              }
            />
            <Topic
              description={
                "Realizei a venda agora e não consigo fazer novas compras com o saldo, por quê?"
              }
            />
            <Link
              href="https://avenue.us/atendimento/"
              className="flex gap-8 font-montserrat text-[22px]"
            >
              <Image
                src={"./img/balao-de-fala.svg"}
                alt={"Icone de lâmpada"}
                width={45}
                height={45}
                className={"object-contain"}
                unoptimized
                loader={imageLoader}
              />
              Fale Conosco
            </Link>
          </div>
        </DefaultMarginSection>
      </main>
      <Footer />
    </>
  );
}
