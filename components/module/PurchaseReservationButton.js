"use client"
import { useRouter } from 'next/navigation';
import api from '../../configs/api';
import styles from "./PurchaseReservationButton.module.css"
// import { getCookie } from '../../utils/cookie';

function PurchaseReservationButton({ tourId }) {
    // const accessToken = getCookie("accessToken")
    const router = useRouter();


    const handelAddToCart = async () => {
        try {
            console.log(tourId);
            // const response = await api.put(`${tourId}`, { tourId, Authorization: `Bearer ${accessToken}` })
            // const data = await response.json();
            // console.log(data);
            // if (response) {
            //     router.push("/basket")
            // }

        } catch (error) {
            return error;

        }
    }
    return (

        <button className={styles.reservation} onClick={handelAddToCart}>رزرو و خرید</button>
    )
}

export default PurchaseReservationButton