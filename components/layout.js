import React from "react";
import Head from "next/head";
import Link from "next/link";
import GlobalStyle from "./globalStyle";


const Layout = ({ children, title = "İEEE ODTÜ" }) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1" />
            <meta charSet="utf-8" />
            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400" rel="stylesheet" />
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        </Head>
        <header className="header section dark">
            <nav>

                <Link href="/"><a className="navlink">IEEE ODTÜ</a></Link>
                <Link prefetch href="/anlatrobotunu#whatisit"><a className="navlink">Nedir</a></Link>
                <Link href="/anlatrobotunu/register"  ><a className="navlink highlight">Başvur</a></Link>
                <Link prefetch href="/anlatrobotunu#purpose"><a className="navlink">Amacımız</a></Link>
                <Link prefetch href="/anlatrobotunu/doc"><a className="navlink">Yararlı Kaynaklar</a></Link>
                <Link prefetch href="/anlatrobotunu/rules"><a className="navlink">Şartname</a></Link>
            </nav>
            <GlobalStyle />
        </header>

        {children}

        <footer className="section dark">
            <p>Copyright © 2017</p>
            <p>IEEE ODTÜ </p>
        </footer>
    </div>
);

const { string, any } = React.PropTypes;
Layout.propTypes = {
    title: string, // eslint-disable-line react/require-default-props
    children: any.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Layout;
