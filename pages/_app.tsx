import '@assets/styles/main.css';
import 'keen-slider/keen-slider.min.css';
import { wrapper } from '@store/index';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import React, { FC, useState } from 'react';
import { ThemeProvider } from "next-themes";
import "tailwindcss/tailwind.css";
import { appWithTranslation } from 'next-i18next';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: { Component?: any, pageProps?: any }) {
    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
            <ThemeProvider attribute="class" >
                <Component {...pageProps} />
            </ThemeProvider>
            </Hydrate>
        </QueryClientProvider>
    );
}

export default appWithTranslation(MyApp);