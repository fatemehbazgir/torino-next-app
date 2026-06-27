import { useForm, SubmitHandler } from "react-hook-form"
import Image from "next/image"
import { yupResolver } from "@hookform/resolvers/yup";
import { loginUserSchema } from "../../../../schema/LoginForm";
import api from "../../../../configs/api";

function SendOtpModal({ setStep }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginUserSchema),
    });
    const onSubmit = async (data) => {
        const { mobile } = data;
        console.log(mobile);
        try {
            const res = await api.post("/auth/send-otp", {
                mobile
            });
            if (res) return setStep(2)
            console.log(res);
        } catch (error) {
            if (error) console.log(errors.response.data.message);



        }


    };
    return (
        <div>
            <div onClick={() => setStep(0)}><Image src="/images/close.png" width={24} height={24} alt="close icon" /></div>
            <p>ورود به تورینو</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>شماره موبایل خود را وارد کنید</label>
                <input placeholder="4253***0912" {...register("mobile")} />
                {errors.mobile && <span>لطفا شماره موبایل معتبر وارد کنید</span>}

                <input type="submit" />
            </form>
        </div>
    )
}

export default SendOtpModal