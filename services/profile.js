

const getProfile = async (token) => {
    try {
        const res = await fetch(`http://localhost:6500/user/profile`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return await res.json()

    } catch (error) {
        console.log(error);
    }
}

export {getProfile}