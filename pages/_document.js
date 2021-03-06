import React from "react";
import { ServerStyleSheets } from "@material-ui/core";
import Document,{Html,Head,Main,NextScript} from "next/document";


export default class MyDocument extends Document{
    render(){
        return(
            <Html lang="en">
            <Head></Head>
            <body>
                <Main />
                <NextScript />
            </body>
            </Html>
        )
    }

}

MyDocument.getInitialProps = async (ctx) =>{
    const sheets = new ServerStyleSheets();
    const originalRenderPagee = ctx.renderPage;
    ctx.renderPage = () =>{
        return originalRenderPagee({
            enhanceApp : (App) => (props) => sheets.collect(<App {...props}/>)
        })
    }
    const initialProps = await Document.getInitialProps(ctx);
    return{
        ...initialProps,
        styles:[
            ...React.Children.toArray(initialProps.styles),
            sheets.getStyleElement(),
        ]
    }
}