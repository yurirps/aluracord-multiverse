import appConfig from '../config.json';
import Head from 'next/head';

function GlobalStyle() {
  return (
      <style global jsx>{`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
    }
    body {
      font-family: 'Open Sans', sans-serif;
    }
    /* App fit Height */ 
    html, body, #__next {
      min-height: 100vh;
      display: flex;
      flex: 1;
    }
    #__next {
      flex: 1;
    }
    #__next > * {
      flex: 1;
    }
    /* Works on Firefox */
    * {
      scrollbar-width: thin;
      scrollbar-color: #384c57 #181f25;
    }
    /* Works on Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
      width: 4px;
    }
    *::-webkit-scrollbar-track {
      background: #181f25;
      border-radius: 20px;
    }
    *::-webkit-scrollbar-thumb {
      /* background-color: #384c57; */
      background-color: #384c57;
      border-radius: 20px;
      /* border: 1px solid white; */
    }
    /* ./App fit Height */ 
  `}</style>
  );
}

export default function CustomApp({ Component, pageProps }) {
  console.log('Está vivo!');
  return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="https://www.nicepng.com/png/detail/220-2209448_marvels-spider-man-spiderman-icon.png" />
          <title>Aranhaverso</title>
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
  );
}