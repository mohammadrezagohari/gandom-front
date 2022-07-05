import cn from 'classnames';
import { t } from 'i18next';
import React, { DetailedHTMLProps, FC, ReactNode } from 'react';
export interface ButtonProps
    extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children?: ReactNode;
    title?: string;
    mode?: "contained" | "outlined";
    styleCustom?: string
}
const Button: FC<ButtonProps> = ({ children, title, mode, styleCustom, ...otherProps }) => {
    return <button
        className={cn(styleCustom, mode == "contained" ? "box-border dark:bg-gold bg-dark text-white dark:text-dark dark:hover:bg-dark dark:hover:text-gold hover:bg-white hover:text-dark dark:hover:border-gold hover:border-dark dark:hover:border-1 dark:border-gold border border-dark" : "box-border bg-transparent border border-dark dark:border-gold dark:text-gold hover:bg-dark hover:text-white dark:hover:bg-gold dark:hover:text-dark", "bg-transparent rtl:font-Yekanbakh font-Poppins font-medium text-lg font-Poppins box-border py-2 px-8 transition-all ease-in duration-800")}>
        {title}
    </button>
};

export default Button;
