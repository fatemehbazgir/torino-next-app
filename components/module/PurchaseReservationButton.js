"use client"
import { useRouter } from 'next/navigation';
import styles from "./PurchaseReservationButton.module.css"
import toast from 'react-hot-toast';

function PurchaseReservationButton({ tourId,token }) {


    const router = useRouter();
    let basket = null;
    console.log(basket);

    const handelAddToCart = async () => {

        try {
            const res = await fetch(`http://localhost:6500/basket/${tourId}`, {
                method: "PUT",
                body: tourId,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })

            basket = await res.json();
           


        } catch (error) {
            console.log(error);
        }

        router.push(`/basket/${basket.basketId}`)
        toast.success("تور به سبد خرید شما اضافه شد")

    }
    return (

        <button className={styles.reservation} onClick={handelAddToCart}>رزرو و خرید</button>
    )
}

export default PurchaseReservationButton