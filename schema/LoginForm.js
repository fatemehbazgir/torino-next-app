import { object, string } from 'yup';


export const loginUserSchema = object({
    mobile: string()
        .required("لطفا شماره موبایل خود را وارد کنید")
        .matches(/^(?:\+98|0)?9\d{9}$/, "شماره موبایل وارد شده معتبر نیست."
        ),

});
