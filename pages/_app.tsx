import '@assets/styles/main.css';
import 'keen-slider/keen-slider.min.css';
import { wrapper } from '@store/index';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import React, { FC, useState } from 'react';
import { ThemeProvider } from "next-themes";
import "tailwindcss/tailwind.css";
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
    return (
        <MyDirection.Provider value={AppContext}>
            <QueryClientProvider client={queryClient}>
                <Hydrate state={pageProps.dehydratedState}>
                    <ThemeProvider attribute="class" >
                        <Component {...pageProps} />
                    </ThemeProvider>
                </Hydrate>
            </QueryClientProvider>
        </MyDirection.Provider>
    );
}

export default wrapper.withRedux(MyApp);