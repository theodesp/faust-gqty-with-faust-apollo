import '../faust.config';
import 'faust.config';
import { FaustProvider } from '@faustjs/next';
import 'normalize.css/normalize.css';
import React from 'react';
import 'scss/main.scss';
import { client } from 'client';
import { useRouter } from 'next/router';
import { FaustProvider as NewFaustProvider } from '@faustwp/core';
import '@faustwp/core/dist/css/toolbar.css';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <NewFaustProvider pageProps={pageProps} >
          <FaustProvider client={client} pageProps={pageProps}>
            <Component {...pageProps} key={router.asPath} />
          </FaustProvider>
        </NewFaustProvider>
    </>
  );
}
