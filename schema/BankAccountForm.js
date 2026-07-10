import { object, string } from 'yup';


const ibanPattern = /^IR[A-Z0-9]{24}$/;

export const BankAccountSchema = object({
    shaba_code: string()
        .matches(ibanPattern, "فرمت شماره شبا اشتباه است! باید با IR شروع شود و ۲۶ کاراکتر باشد ⚠️")
        .test('is-iban-length', 'طول شماره شبا باید ۲۶ کاراکتر باشد', (value) => {
            return value?.length === 26;
        })
        .trim(),
    debitCard_code: string()
        .matches(/^[0-9\s\-]+$/, "شماره کارت فقط باید شامل عدد باشد 🔢")
        .test('is-16-digits', 'شماره کارت باید دقیقاً ۱۶ رقم باشد ⚠️', (value) => {
            if (!value) return false;
            const cleanNumber = value.replace(/[\s\-]/g, '');
            return cleanNumber.length === 16;
        })
        .test('only-numbers', 'لطفاً فقط عدد وارد کنید', (value) => {
            const cleanNumber = value?.replace(/[\s\-]/g, '') || '';
            return /^\d+$/.test(cleanNumber);
        })
        .trim(),
    accountIdentifier: string()
        .matches(/^[0-9\s]+$/, "شماره حساب فقط باید شامل عدد باشد 🔢")
        .test('is-reasonable-length', 'شماره حساب وارد شده طول نامعقولی دارد! ⚠️', (value) => {
            if (!value) return false;
            const cleanNumber = value.replace(/\s+/g, '');
            return cleanNumber.length >= 8 && cleanNumber.length <= 16;
        })
        .trim(),


});
