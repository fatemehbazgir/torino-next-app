"use client"
import { useQuery } from '@tanstack/react-query';
import { fetcher } from '../../services/tour';
import TourCard from '../module/TourCard';
import styles from "./TourList.module.css"


function TourList() {

    const { data, isLoading, isError } = useQuery({
        queryKey: ['tours'],
        queryFn: fetcher,
    });

    console.log(data);
    if (isLoading) return <div>در حال بارگذاری... ⏳</div>;

    return (
        <div className={styles.tours}>
            <p className={styles.title}>همه تور ها</p>
            <div className={styles.container}>
                {
                    data.map((tour) => <TourCard data={tour} key={tour.id} />)

                }
            </div>

        </div>
    )
}

export default TourList