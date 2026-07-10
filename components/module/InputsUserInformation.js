"use client"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { basketFormSchema } from "../../schema/basketform";
import { DatePicker } from "zaman";
import { useEffect, useState } from "react";
import api from "../../configs/api";
import { useRouter } from "next/navigation";
import styles from "./InputsUserInformation.module.css"

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
                alert("تاریخ تولداینده نباشه");
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
            console.log(res);
        } catch (error) {
            router.push("/userProfile")
        }
    }
    const backHandler = () => {
        router.push("/userProfile")
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>

            <div>
                <input placeholder="نام و نام خانوادگی" {...register("fullName")} />
                {errors.fullName && <span>لطفا نام و نام خانوادگی را کامل وارد کنید</span>}
            </div>
            <div>
                <input placeholder="کد ملی" {...register("nationalCode")} />
                {errors.nationalCode && <span>لطفا کد ملی صحیح را وارد کنید</span>}
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
                    className={styles.select}
                >
                    <option value="">جنسیت</option>
                    <option value="male">آقا</option>
                    <option value="female">خانم</option>

                </select>

                {errors.gender && <span>لطفا جنسیت را مشخص کنید</span>}
            </div>



            <button type="submit" className={styles.submit}>تایید</button>
            <button type="button" onClick={backHandler} className={styles.cancel}>انصراف</button>
        </form>

    )
}

export default InputsUserInformation