"use client"
import { useRouter } from 'next/navigation';
import styles from "./PurchaseReservationButton.module.css"

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
            console.log(basket, res);


        } catch (error) {
            console.log(error);
        }

        router.push(`/basket/${basket.basketId}`)

    }
    return (

        <button className={styles.reservation} onClick={handelAddToCart}>رزرو و خرید</button>
    )
}

export default PurchaseReservationButton