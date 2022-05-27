import classNames from 'classnames';
import React, { DetailedHTMLProps, FC, ReactNode } from 'react';
import styles from "./ButtonCustom.module.scss";
import { FunctionComponent } from 'react';

export interface ButtonProps extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>  {
    children?: ReactNode;
    title?: string;
    variant?: "primary" | "danger" | "success" | "disable";
    textColor?: string;
    mode?: "contained" | "outlined" ;
    Icon?: FunctionComponent<React.SVGAttributes<SVGElement>>;
    size?: "small" | "medium" | "large" ;
    disabled?: boolean;
    color?: string;
    bgColor?: string;
    styleCustom?: string;
    txtStyle?: string;
    radius?: boolean
}
const ButtonCustom: FC<ButtonProps> = ({radius = true,children,title,mode,Icon,size,disabled,bgColor,color,variant,txtStyle,styleCustom = "",...props}) => {
    
  return (
         <button 
            className={classNames(
              {[styles.btnConatiner] : true},
              {[styles.radiusStyle] : radius},
              {[styles.outlinedModeStyle]: mode === "outlined"},
              {[styles.primary]: variant === "primary"},
              {[styles.danger]: variant === "danger"},
              {[styles.success]: variant === "success"},
              {[styles.disable]: variant === "disable"},
              {[styles.outlineDangerMode]: mode === "outlined" && variant === "danger"},
              {[styles.outlineSuccessMode]: mode === "outlined" && variant === "success"},
              {[styles.outlineDisabledMode]: mode === "outlined" && variant === "disable"},
              {[styles.outlineContainedMode]: mode === "outlined" && variant === "primary"},
              {[styleCustom]: true},
              {[styles.smallSize] : size === "small"} ,
              {[styles.mediumSize]: size === "medium"},
              {[styles.largeSize]: size === "large"})}
              disabled={disabled}
              {...props}
             >
            {children}
          <div className={styles.container}>
              {Icon?
              <Icon 
                fill={
                  mode === "outlined" && variant === "danger" ? "#c00f39" :
                  mode === "outlined" && variant === "primary" ? "#09359e" :
                  mode === "outlined" && variant === "success" ? "#08855f" :
                  mode === "outlined" && variant === "disable" ? "#818181" :
                  mode === "contained" && variant === "disable"? "#4b4b4b" : "#fff"
                } 
                className={classNames('w-6 h-6',{[styles.iconStyle]: true})}
               />:null} 
                <span 
                  color="#7c0062" 
                  className={classNames({[styles.titleStyle]: true},
                      {[styles.outlineDangerText]: mode === "outlined" && variant === "danger"},
                      {[styles.outlineSuccessText]: mode === "outlined" && variant === "success"},
                      {[styles.outlineDisabledText]: mode === "outlined" && variant === "disable"},
                      {[styles.outlineContainedText]: mode === "outlined" && variant === "primary"},
                      {[styles.containedText]: mode === "contained" && variant === "disable"},
                      // {[txtStyle]: true}
                      )}
                  >
                    {title}
                </span>
          </div>
        </button>
        );
};

export default ButtonCustom;
