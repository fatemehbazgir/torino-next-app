import { object, string } from 'yup';


export const userAccountSchema = object({
    email: string()
        .required("لطفا ایمیل معتبر وارد کنید")
        .email("فرمت ایمیل نامعتبر است")
        .trim()

});
