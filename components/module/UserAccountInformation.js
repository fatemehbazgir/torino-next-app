"use client"
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { userAccountSchema } from "../../schema/userAccount";
import api from "../../configs/api";
import { useRouter } from "next/navigation";
import styles from "./UserAccountInformation.module.css"

function UserAccountInformation() {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(userAccountSchema),
    });

    const onSubmit = async (data) => {
        const { email } = data;

        try {
            const res = await api.put("/user/profile", {
                email
            });
            router.push("/userProfile")
            console.log(res);
        } catch (error) {
            if (error) console.log(errors.response.data.message);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.container}>
                <input placeholder="آدرس ایمیل" {...register("email")} />
                {errors.email && <span>لطفا ایمیل معتبر وارد کنید!</span>}
            </div>
            <button type="submit">تایید</button>
        </form>
    )
}

export default UserAccountInformation