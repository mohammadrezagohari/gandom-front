import '@assets/styles/main.css';
import 'keen-slider/keen-slider.min.css';
import { wrapper } from '@store/index';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import React, { FC, useState } from 'react';
import { ThemeProvider } from "next-themes";
import "tailwindcss/tailwind.css";
import { appWithTranslation } from 'next-i18next';
import { useTranslation } from "react-i18next";
// import DirectionProvider from "react-with-direction/dist/DirectionProvider";

const queryClient = new QueryClient();

export interface ContextProps {
    lang: string,
    langChange: (lang: string) => void;
}

export const MyDirection = React.createContext<ContextProps>({
    lang: "",
    langChange: () => false
});

function MyApp({ Component, pageProps }: { Component?: any, pageProps?: any }) {
    const [dir, setDir] = useState<string>("ltr")
    const AppContext: ContextProps = {
        lang: dir,
        langChange: (value) => (setDir(value))
    };

    // const { i18n } = useTranslation();
    // const getLanguage = () => i18n.language || window.localStorage.i18nextLng;
    // let bodyDirection = "";
    // if (getLanguage() === "fa") {
    //     bodyDirection = DIRECTIONS.RTL;
    // } else if (getLanguage() === "en") {
    //     bodyDirection = DIRECTIONS.LTR;
    // }


    return (
        // <DirectionProvider direction={bodyDirection}>
        <MyDirection.Provider value={AppContext}>
            <QueryClientProvider client={queryClient}>
                <Hydrate state={pageProps.dehydratedState}>
                    <ThemeProvider attribute="class" >
                        <Component {...pageProps} />
                    </ThemeProvider>
                </Hydrate>
            </QueryClientProvider>
        </MyDirection.Provider>
        // <DirectionProvider/>
    );
}

export default appWithTranslation(MyApp);