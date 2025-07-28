import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="NoMoo is your all-in-one app to discover, order, and book plant-powered meals while making a real impact on the planet. Join the plant-based revolution!"
        />
        <meta
          name="keywords"
          content="plant-based, vegan, sustainable, food delivery, eco-friendly, NoMoo, restaurant booking, healthy eating"
        />
        <meta
          property="og:title"
          content="NoMoo | Plant-Powered Meals & Sustainable Living"
        />
        <meta
          property="og:description"
          content="Discover, order, and book plant-powered meals with NoMoo. Make a real impact on the planet while enjoying delicious food."
        />
        <meta
          property="og:image"
          content="https://mynomoo.com/light-thumbnail.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.mynomoo.com/" />
        <meta
          property="twitter:title"
          content="PNoMoo | Plant-Powered Meals & Sustainable Living"
        />
        <meta
          property="twitter:description"
          content="Discover, order, and book plant-powered meals with NoMoo. Make a real impact on the planet while enjoying delicious food."
        />
        <meta
          property="twitter:image"
          content="https://mynomoo.com/light-thumbnail.png"
        />
        <meta property="og:url" content="https://mynomoo.com/" />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://nomoo.app/" />
        <meta name="theme-color" content="#00C853" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
