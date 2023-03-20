import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;1,300&display=swap"
          rel="stylesheet"
        />

        {/* favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />

        {/* meta tags io */}
        {/* <!-- Primary Meta Tags --> */}
        <title>Avenue - Sua vida financeira global e completa</title>
        <meta
          name="title"
          content="Avenue - Sua vida financeira global e completa"
        />
        <meta
          name="description"
          content="De investimentos a banking, abrimos as portas do mundo aos brasileiros. Abra sua conta na Avenue e torne seu dinheiro tão global quanto você."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://monitordomercado.com.br/avenue/" />
        <meta
          property="og:title"
          content="Avenue - Sua vida financeira global e completa"
        />
        <meta
          property="og:description"
          content="De investimentos a banking, abrimos as portas do mundo aos brasileiros. Abra sua conta na Avenue e torne seu dinheiro tão global quanto você."
        />
        <meta
          property="og:image"
          content="https://monitordomercado.com.br/social-image.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://monitordomercado.com.br/avenue/" />
        <meta
          property="twitter:title"
          content="Avenue - Sua vida financeira global e completa"
        />
        <meta
          property="twitter:description"
          content="De investimentos a banking, abrimos as portas do mundo aos brasileiros. Abra sua conta na Avenue e torne seu dinheiro tão global quanto você."
        />
        <meta
          property="twitter:image"
          content="https://monitordomercado.com.br/social-image.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
