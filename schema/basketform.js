import { object, string } from 'yup';
const fullNameRegex = /^[\u0600-\u06FF\s‌]+$/;

export const basketFormSchema = object({
    fullName: string()
        .required("لطفا نام و نام خانوادگی را کامل وارد کنبد")
        .min(2, 'نام باید حداقل ۲ کاراکتر باشد')
        .max(30, 'نام نباید بیشتر از ۳۰ کاراکتر باشد')
        .matches(fullNameRegex, 'نام فقط می‌تواند شامل حروف فارسی باشد'),

    nationalCode: string()
        .required('کد ملی الزامی است')
        .matches(/^\d{10}$/, 'کد ملی باید دقیقاً ۱۰ رقم باشد'),

    gender: string()
        .required('لطفاً جنسیت خود را انتخاب کنید')
        .oneOf(['male', 'female'], 'گزینه انتخاب شده نامعتبر است'),

});

