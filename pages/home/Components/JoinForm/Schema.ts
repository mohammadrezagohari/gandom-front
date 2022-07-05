import * as Yup from 'yup';

export const Schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'باید از دو حرف بیشتر باشد')
    .max(125, 'باید از 125 حرف کمتر باشد')
    .required('لطفا نام را وارد کنید'),
  lastname: Yup.string()
    .min(2, 'باید از دو حرف بیشتر باشد')
    .max(125, 'باید از 125 حرف کمتر باشد')
        .required('لطفا نام خانوادگی را وارد کنید'),
  Skills: Yup.string()
        .required('لطفا مهارت های خود را وارد کنید'),
  Section: Yup.string()
    .required('لطفا حوزه فعایت های خود را وارد کنید'),
  Resume: Yup.mixed().required('لطفا شماره همراه را وارد کنید'),
  grade: Yup.string().required('لطفا تحصیلات را انتخاب کنید'),
  university: Yup.string()
    .min(1, 'Too Short!')
    .max(50, 'Too Long!')
    .when("grade", {
      is: '2',
      then: Yup.string().required('لطفا دانشگاه را انتخاب کنید'),
    }),

});

interface Section {

}
//type Join form
export interface JoinFormType {
  name?: string,
  lastname: string,
  section: string[],
  skills:string,
  resume: null,
  information: string,
}

//initial value for join form
export const  JoinFormValuesInitial = {
  name: "",
  lastname: "",
  section: [],
  skills:"",
  resume: null,
  information: "",
};