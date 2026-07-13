"use client"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { basketFormSchema } from "../../schema/basketform";
import { DatePicker } from "zaman";
import { useEffect, useState } from "react";
import api from "../../configs/api";
import { useRouter } from "next/navigation";
import styles from "./InputsUserInformation.module.css"
import toast, { Toaster } from "react-hot-toast";

function InputsUserInformation() {
    const router = useRouter()
    const [date, setDate] = useState(null);
    const [profile, setProfile] = useState(null);
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(basketFormSchema),
    });
    useEffect(() => {
        if (date) {
            const selectedDate = new Date(date);
            const today = new Date();
            if (selectedDate > today) {
                toast.error("تاریخ تولد نمی تواند آینده باشد")
                setDate(null);
            }
        }
    }, [date]);
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await api.get("/user/profile");
                setProfile(res.data);

                reset({
                    fullName: res.data?.fullName,
                    nationalCode: res.data?.nationalCode,
                    gender: res.data?.gender || "",
                    birthDate: res.data.birthDate ? new Date(res.data.birthDate) : new Date()
                })
            } catch (error) {
                console.log(error);

            }
        }
        fetchProfile()
    }, [reset])


    const onSubmit = async (data) => {

        if (data.birthDate) {
            const dateObject = new Date(data.birthDate);
            data.birthDate = dateObject.toISOString().split('T')[0];
        }

        try {
            const res = await api.put("/user/profile", data);
            router.push("/userProfile")

        } catch (error) {
            console.log(error);
        }
    }
    const backHandler = () => {
        router.push("/userProfile")
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>

            <div>
                <input className={`${errors.fullName ? styles.error : ""}`} placeholder="نام و نام خانوادگی" {...register("fullName")} />
            </div>
            <div>
                <input className={`${errors.nationalCode ? styles.error : ""}`} placeholder="کد ملی" {...register("nationalCode")} />
            </div>
            <div>
                <Controller
                    name="birthDate"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <DatePicker
                            locale="fa"
                            className="my-input-style"
                            value={value}
                            onChange={(e) => onChange(e.value)}
                            maxDate={new Date()}
                            accentColor="#28a745"
                            inputAttributes={{
                                placeholder: "تاریخ تولد",
                                readOnly: true
                            }}
                        />
                    )
                    }

                />
            </div>
            <div>
                <select
                    id="gender"
                    {...register('gender')}
                    className={`${styles.select} ${errors.gender ? styles.error : ""}`}
                >
                    <option value="">جنسیت</option>
                    <option value="male">آقا</option>
                    <option value="female">خانم</option>

                </select>

            </div>


            <div className={styles.buttons}>

                <button type="submit" className={styles.submit}>تایید</button>
                <button type="button" onClick={backHandler} className={styles.cancel}>انصراف</button>
            </div>

        </form>

    )
}

export default InputsUserInformation