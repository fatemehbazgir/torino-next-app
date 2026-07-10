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
           
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.container}>
                <input className={`${errors.email?styles.error:""}`} placeholder="آدرس ایمیل" {...register("email")} />
            </div>
            <button type="submit">تایید</button>
        </form>
    )
}

export default UserAccountInformation