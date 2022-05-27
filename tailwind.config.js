const colors = require('tailwindcss/colors');

module.exports = {
    future: {
        purgeLayersByDefault: true,
        applyComplexClasses: true,
    },
    purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class', // 'media' or 'class'
    theme: {
        // screens: {
        //     'sm': {'min': '640px', 'max': '767px'},
        //     // => @media (min-width: 640px and max-width: 767px) { ... }

        //     'md': {'min': '768px', 'max': '1023px'},
        //     // => @media (min-width: 768px and max-width: 1023px) { ... }

        //     'lg': {'min': '1024px', 'max': '1279px'},
        //     // => @media (min-width: 1024px and max-width: 1279px) { ... }

        //     'xl': {'min': '1280px', 'max': '1535px'},
        //     // => @media (min-width: 1280px and max-width: 1535px) { ... }

        //     '2xl': {'min': '1536px'},
        //     // => @media (min-width: 1536px) { ... }
        // },
        extend: {
            fill: theme => ({
                'red': theme('colors.red'),
                'green': theme('colors.green.500'),
            }),
            zIndex: {},
            keyframes: {
                opacity: {
                    from: {
                        opacity: 0,
                    },
                    to: {
                        opacity: 1,
                    },
                },
                spinner: {
                    from: {
                        transform: 'rotate(0deg)',
                    },
                    to: {
                        transform: ' rotate(360deg)',
                    },
                },
                fadeLeft: {
                    '0%': {
                        transform: 'translateX(-50px)',
                        opacity: 0,
                    },
                    '100%': {
                        transform: 'translateX(0px)',
                        opacity: 1,
                    },
                },
                fadeRight: {
                    '0%': {
                        transform: 'translateX(50px)',
                        opacity: 0,
                    },
                    '100%': {
                        transform: 'translateX(0px)',
                        opacity: 1,
                    },
                },
            },
            animation: {
                spinner: ' spinner 1s linear infinite',
                opacity: 'opacity 0.2s ease-in-out',
                fadeLeft: 'fadeLeft 1s ease-in-out',
                fadeRight: 'fadeRight 1s ease-in-out',
            },
            width: {
                'max-content': 'max-content',
            },
            maxWidth: {
                '8xl': '1920px',
            },
            spacing: {
                '128': '10rem',
            },
             fontFamily: {
                'poppines': ['popines'],
            },
            fontWeight: {
                'light': 300,
                "medium": 500,
                "bold": 600,
                "regular":400
                },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                white: '#ffffff',
                light: "#F7F7F7",
                dark: "#101010",
                gray:{
                    dark:"#464646",
                    light: "#989898",
                    default: "#cccccc"
                },
                gold: "#F1CC94",
            },
            textColor: {
                white: '#ffffff',
                light: "#F7F7F7",
                dark: "#101010",
                gray:{
                    dark:"#464646",
                    light: "#989898",
                    default: "#cccccc"
                },
                gold: "#F1CC94",
            },
            boxShadow: {
                'outline-2': '0 0 0 2px var(--accents-2)',
                magical:
                    'rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px',
            },
            lineHeight: {
                'extra-loose': '2.2',
            },
            scale: {
                120: '1.2',
            },
           
        },
    },

    // variants: {
    //    
    //     extend: {
            
    // },
    // plugins: [
    //    
    // ],
};
