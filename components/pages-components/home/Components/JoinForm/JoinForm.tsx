import cn from 'classnames';
import { t } from 'i18next';
import React, { DetailedHTMLProps, FC, ReactNode, useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { Formik, Field, Form, ErrorMessage, useFormik } from 'formik';
import { useTheme } from 'next-themes';

import JoinTeamDark from "@assets/svg/JoinTeamDark.svg";
import JoinTeamLight from "@assets/svg/JoinTeamLight.svg";
// import { InputCustom } from "@components/ui";
import { Schema, JoinFormValuesInitial, JoinFormType } from './Schema';

//type attribute html tag
declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        for?: string;
    }
};
export interface FormProps
    extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children?: ReactNode;
    title?: string;
    mode?: "contained" | "outlined";
    styleCustom?: string
}
const JoinForm: FC<FormProps> = ({ children, title, mode, styleCustom, ...otherProps }) => {
    const { t } = useTranslation('translation');
    const { theme } = useTheme();
    const formik = useFormik({
        initialValues: JoinFormValuesInitial,
        onSubmit: function (values) {
            alert(`You are registered! Name: ${values.name}. LastName: ${values.lastname}. Section: ${values.section}. 
        Skills: ${values.skills}. Resume: ${values.resume}. information: ${values.information}`);
        }
    })





    return (
        <div className='w-full flex-col'>
            <div className="w-full flex items-center justify-center">
                <h2 className="font-bold whitespace-nowrap mb-1 md:mb-3 font-Poppins rtl:font-yekanBakh text-dark text-2xl md:text-3xl lg:text-4xl dark:text-gold ltr:mr-10 rtl:ml-10">
                    {t("JoinOurTeam")}
                </h2>
                <span className="h-[3px] w-full bg-dark dark:bg-gold" />
            </div>
            <div className='w-full md:flex mt-10'>
                <div className="sm:w-10/12 md:w-7/12 xl:w-7/12 mt-10 flex flex-col ltr:items-start rtl:items-end justify-center">
                    <Formik
                        initialValues={JoinFormValuesInitial}
                        validateOnBlur={false}
                        onSubmit={(values: JoinFormType, { setSubmitting, resetForm }: any) => {

                            setTimeout(() => {

                                resetForm();
                            }, 500)

                        }}
                        validateOnMount={true}
                        enableReinitialize={true}
                        validationSchema={Schema}
                        render={({ handleSubmit, handleBlur, handleChange, setFieldValue, errors, touched, values, validateForm, isSubmitting, isValid = false, dirty, resetForm, isValidating }) => (
                            <form
                                onSubmit={handleSubmit}>
                                <section >

                                    {/* <InputCustom
                                        label='نام'
                                        placeholder='نام را وارد کنید'
                                        name='name'
                                        type='text'
                                        handleChange={handleChange}
                                        error={errors.name}
                                        touched={touched.name}
                                        onBlur={handleBlur}
                                        value={values.name}
                                    />
                                    <InputCustom
                                        label='نام خانوادگی'
                                        placeholder='نام خانوادگی را وارد کنید'
                                        name='lastname'
                                        type='text'
                                        handleChange={handleChange}
                                        error={errors.lastname}
                                        touched={touched.lastname}
                                        onBlur={handleBlur}
                                        value={values.lastname}
                                    /> */}
                                    {/* <InputCustom
                                        label='نام پدر'
                                        placeholder='نام پدر را وارد کنید'
                                        name='fatherName'
                                        type='text'
                                        handleChange={handleChange}
                                        error={errors.section}
                                        touched={touched.section}
                                        onBlur={handleBlur}
                                        value={values.section}
                                    />
                                    <SelectBox
                                        itemList={educationOption}
                                        htmlFor='grade'
                                        name='grade'
                                        handleChange={(value: any) => setFieldValue('grade', value.value)}
                                        label="تحصیلات"
                                        error={errors.grade}
                                        touched={touched.grade}
                                        onBlur={handleBlur}
                                        value={values.grade}
                                        placeHolder="لطفا تحصیلات را انتخاب کنید"

                                    />
                                    <InputCustom
                                        label='شماره همراه'
                                        placeholder='شماره همراه را وارد کنید'
                                        name='phoneNumer'
                                        type="text"
                                        handleChange={handleChange}
                                        error={errors.phoneNumer}
                                        touched={touched.phoneNumer}
                                        onBlur={handleBlur}
                                        value={values.phoneNumer}
                                    /> */}
                                    {/* {values.grade == '2' ?
                                        <SelectBox
                                            itemList={Unioptions}
                                            htmlFor='university'
                                            name='university'
                                            handleChange={(value: any) => setFieldValue('university', value.value)}
                                            label="دانشگاه"
                                            error={errors.university}
                                            touched={touched.university}
                                            value={values.university}
                                            placeHolder="لطفا دانشگاه را انتخاب کنید"
                                        /> : <span className={styles.span} />
                                    } */}
                                </section>
                                {/* <div className={styles.btnContainer}>
                                    <ButtonCustom
                                        title='ثبت'
                                        size='medium'
                                        type='submit'
                                    />
                                </div> */}
                            </form>
                        )}>
                    </Formik>
                </div>
                <div className='sm:w-10/12 md:w-5/12 xl:w-5/12 mt-10 flex flex-col items-center justify-center'>
                    {theme == "dark" ? <JoinTeamDark className='w-full xl:h-[30rem] flex self-center z-[50]' /> : <JoinTeamLight className='w-full xl:h-[30rem] flex self-center z-[50]' />}
                </div>
            </div>
        </div>
    )
};

export default JoinForm;
