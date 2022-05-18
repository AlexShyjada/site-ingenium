import type { AppProps } from "next/app";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="index, follow" />
        <title>Ingenium Systems</title>
        <meta name="description" content="" />
        <meta name="application-name" content="Ingenium Systems" />
        <link rel="“canonical”" href="https://ingenium-systems.com.br/" />
        <meta name="keywords" content="" />
        <meta content="Alexandre Shyjada" name="creator" />
        <meta name="author" content="Alexandre Shyjada" />

        {/* Meta tags Facebook */}
        <meta name="og:type" content="website" />
        <meta name="og:url" content="" />
        <meta name="og:title" content="" />
        <meta name="og:description" content="" />
        <meta name="og:image" content="/social.png" />

        {/* Meta tags Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://ingenium-systems.com.br/"
        />
        <meta property="twitter:title" content="" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="/social.png" />
      </Head>

      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  box-sizing: border-box;
  padding: 0;
  border: none;
  font-family: 'Inter', sans-serif;
  text-decoration: none;
  border-radius: 0;
  background: transparent;
}
html {
  font-size: 62.5%;
}
body{
  font-size: 1.6rem;
  background: #F4F4F4;
}
a {
  color: inherit;
  text-decoration: none;
}
.container {
  margin: 0 auto;
  width: 1224px;
  display: flex;
}
`;
