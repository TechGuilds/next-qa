import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="english">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=DM Serif Display"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Montserrat Subrayada"
          ></link>
          <link
            rel="stylesheet"
            href="https://kajoo.nyc3.digitaloceanspaces.com/kajoo-assets/fonts/sfprotext.css"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=DM Serif Display"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Montserrat Subrayada"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=DM Serif Display"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Montserrat Subrayada"
          ></link>
        </Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
