import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <link rel='icon' href={`${process.env.PUBLIC_URL}/shaunShines.ico`} />
          <meta
            name='Shaun Shines Detailing | Virgina Beach, VA'
            content="I'll make it Shine, Like it's Mine!"
          />
          <link
            rel='apple-touch-icon'
            href={`${process.env.PUBLIC_URL}/ShaunShineICONsm-01.png`}
          />
          <link
            rel='manifest'
            href={`${process.env.PUBLIC_URL}/manifest.json`}
          />
          <link
            href='https://fonts.googleapis.com/icon?family=Material+Icons'
            rel='stylesheet'
          />

          <script
            src='https://kit.fontawesome.com/259fb81e1d.js'
            crossOrigin='anonymous'
            dangerouslySetInnerHTML={{ __html: `` }}
            defer
          />
          <noscript>You need to enable JavaScript to run this app.</noscript>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
