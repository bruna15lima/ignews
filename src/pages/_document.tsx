import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render(){
    return(      
      <Html lang="en">
      <Head>   
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
   
        <title>Início | ignews</title>          
      </Head>
      <body>
      <Main />
      <NextScript/>
      </body>
      </Html>
    )
  }
}