const colors = require('tailwindcss/colors');

module.exports = {
    future: {
        purgeLayersByDefault: true,
        applyComplexClasses: true,
    },
    content: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class', // 'media' or 'class',
    theme: {
        extend: {
             boxShadow: {
               '3xl': '-128px -26px 107px 220px rgb(241 204 148 / 12%)',
            },
            fill: theme => ({
                'red': theme('colors.red'),
                'green': theme('colors.green.500'),
            }),
            borderWidth: {
                '0': '0',
                '5': '0.5px',
                '1': '1px',
                '2': '2px',
                '3': '3px',
                '4': '4px',
                '6': '6px',
                '8': '8px',
            },
            keyframes: {
                 modal: {
                    '0%, 100%': { opacity: 0 },
                    '100%': { opacity: 1 },
                    },

                    // if you are using drawer variant right
                    'drawer-right': {
                    '0%, 100%': { right: '-500px' },
                    '100%': { right: '0' },
                    },

                    // if you are using drawer variant left
                    'drawer-left': {
                    '0%, 100%': { left: '-500px' },
                    '100%': { left: '0' },
                    },
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
                borderEffect: "transform 250ms ease-in-out",
               
                // if you are using the animate variant of the modal
                modal: 'modal 0.5s',

                // if you are using drawer variant right
                drawerRight: 'drawer-right 0.3s',

                // if you are using drawer variant left
                drawerLeft: 'drawer-left 0.3s',
            },
            transitionProperty: {
                'backgroundsize': 'background-size',
            },
             transitionDuration: {
                '3': '0.3ms',
                '2000': '2000ms',
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
                 'Poppins': ['Poppins'],
                 'NotoSerif': ['NotoSerif'],
                 'Yekanbakh': ['Yekanbakh']
            },
            fontWeight: {
                'light': 100,
                "medium": 500,
                "bold": 600,
                "regular":400
            },
            flex: {
                '1.5': '1.5 1.5 0%'
            },
          
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                blur:"#ffffff33",
                white: '#ffffff',
                black:'#0a0a0a',
                light: "#F7F7F7",
                dark: "#101010",
                gray:{
                    dark:"#464646",
                    light: "#989898",
                    default: "#cccccc",
                    darkFull:"#171717"
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
    }
     
};
