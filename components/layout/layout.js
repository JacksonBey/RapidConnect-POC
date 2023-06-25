import React from 'react';
import Header from './header';
import Head from 'next/head';

const Layout = ({ children }) => {
    return (
      <>
        <Head>
          <title>RapidConnect-POC</title>
          <meta name="description" content="RapidConnect-POC" />
          <link rel="icon" href="/favicon.ico" />      
        </Head>
        <div className="min-h-screen min-w-fit bg-gray-100">
            <Header />
            <main className="container mx-auto p-4">
                {children}
            </main>
        </div>
      </>
    )
};

export default Layout;
