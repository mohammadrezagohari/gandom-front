import classNames from 'classnames';
import React, { DetailedHTMLProps, FC, ReactNode,InputHTMLAttributes } from 'react';
import styles from "./InputCustom.module.scss";
import { FunctionComponent, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>  {
    lable?: string;
    placeholder?: string;
    errorText?: string;
}
const InputCustom: FC<InputProps> = ({lable,placeholder,errorText,...props}) => {
    const [message, setMessage] = useState(''); // This will be used to show a message if the submission is successful
    const [submitted, setSubmitted] = useState(false);

    const formik = useFormik({
        initialValues: {
          email: '',
          name: '',
          message: '',
        },
        onSubmit: () => {
          setMessage('Form submitted');
          setSubmitted(true);
        },
        validationSchema: yup.object({
          name: yup.string().trim().required('Name is required'),
          email: yup
            .string()
            .email('Must be a valid email')
            .required('Email is required'),
          message: yup.string().trim().required('Message is required'),
        }),
      });
    return (
        <div className={classNames({[styles.inputWrapper]: true})}>
            {lable ? <span>{lable}</span> : null}
            <input
                placeholder={placeholder}
            />
            <span >{errorText}</span>
        </div>
        );
};

export default InputCustom;
