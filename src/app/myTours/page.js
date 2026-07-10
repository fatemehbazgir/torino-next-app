import { cookies } from 'next/headers';
import Sidebar from '../../../components/module/Sidebar'
import MyTourCard from '../../../components/module/MyTourCard';
import styles from "./page.module.css"

async function Page() {
    const cookieStore = await cookies();
    const token = cookieStore.get('accessToken')?.value;
    let myTour = null;
    try {
        const res = await fetch("http://localhost:6500/user/tours",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                cache: 'no-store'
            }
        )
    
        const data = await res.json();

        myTour = data;
    } catch (error) {
        console.log(error);
        
    }

    if(!myTour)return<p>در حال بارگیری اطلاعات</p>

    return (
        <div className={styles.parent}>
            <Sidebar />
            <div className={styles.container}>
                {
                    myTour.map((tourItem)=><MyTourCard key={tourItem.id} tourItem={tourItem}/>)
                }
            </div>
        </div>
    )
}

export default Page