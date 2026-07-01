import { useForm, SubmitHandler } from "react-hook-form"
import Image from "next/image"
import { yupResolver } from "@hookform/resolvers/yup";

import styles from "./SendOtpModal.module.css"
import api from "../../configs/api";
import { loginUserSchema } from "../../schema/LoginForm";
import { e2p } from "../../utils/numbers";

function SendOtpModal({ setStep, setMobile, setCode }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginUserSchema),
    });
    const onSubmit = async (data) => {
        const { mobile } = data;

        try {
            const res = await api.post("/auth/send-otp", {
                mobile
            });
            setCode(res.data.code)
            setMobile(mobile);
            if (res) return setStep(2);
            console.log(res);
        } catch (error) {
            if (error) console.log(errors.response.data.message);
        }
    };
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.close} onClick={() => setStep(0)}><Image src="/images/close.png" width={24} height={24} alt="close icon" /></div>
                <p>ورود به تورینو</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>شماره موبایل خود را وارد کنید</label>
                    <input placeholder={e2p("4253***0912")} {...register("mobile")} />
                    {errors.mobile && <span>لطفا شماره موبایل معتبر وارد کنید!</span>}

                    <button type="submit">ارسال کد تایید</button>
                </form>
            </div>
        </div>

    )
}

export default SendOtpModal