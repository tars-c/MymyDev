import App, { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/main.scss'
import 'three-dots/dist/three-dots.css'
import 'codemirror/lib/codemirror.css'

class Main extends App<AppProps> {
    constructor(props: AppProps) {
        super(props);
    }

    render() {
        const {Component, pageProps} = this.props;

        return (
            <>
                <Head>
                    <title>Mymy Dev</title>
                    <meta name="theme-color" content="#000"/>
                    <meta name="msapplication-TileColor" content="#000"/>
                    <link rel="icon" href="/logo.png"/>
                </Head>

                <Component {...pageProps}/>
            </>
        )
    }
}

export default Main