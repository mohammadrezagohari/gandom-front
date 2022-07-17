import '@assets/styles/main.css';
import 'keen-slider/keen-slider.min.css';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import React, { FC, useState } from 'react';
import { ThemeProvider } from "next-themes";
import "tailwindcss/tailwind.css";
import { appWithTranslation } from 'next-i18next';
import { Provider } from "react-redux";
import store from 'redux/store';
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: { Component?: any, pageProps?: any }) {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <Hydrate state={pageProps.dehydratedState}>
                    <ThemeProvider attribute="class" >
                        <Component {...pageProps} />
                    </ThemeProvider>
                </Hydrate>
            </QueryClientProvider>
        </Provider>
    );
}

export default appWithTranslation(MyApp);