import Footer from './Footer'
import Header from './Header'
import { cookies } from 'next/headers';

async function Layout({ children }) {


    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;




    return (
        <>
            <Header token={token} />
            {children}
            <Footer />
        </>

    )
}

export default Layout