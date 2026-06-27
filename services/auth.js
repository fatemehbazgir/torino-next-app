import api from "../configs/api"

const checkOtp = async (mobile, code) => {
    try {
        const response = await api.post("/auth/check-otp", { mobile, code })
        return { response }
    } catch (error) {
        return { error }
    }
}

export { checkOtp };