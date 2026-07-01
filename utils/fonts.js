import localFont from "next/font/local";


const yekan = localFont({
    src: [
        {
            path: "../public/fonts/YekanBakhMedium.woff",
            style: "normal",
            weight: "100",
        },
        {
            path: "../public/fonts/YekanBakhBold.woff",
            style: "normal",
            weight: "600",
        },
        {
            path: "../public/fonts/YekanBakhHeavy.woff",
            style: "normal",
            weight: "700",
        },

    ],
    variable: "--font-yekan"
});
const vazir = localFont({
    src: [
        {
            path: "../public/fonts/Vazirmatn-ExtraLight.woff2",
            style: "normal",
            weight: "100"
        },
        {
            path: "../public/fonts/Vazirmatn-Light.woff2",
            style: "normal",
            weight: "200"
        },
        {
            path: "../public/fonts/Vazirmatn-Regular.woff2",
            style: "normal",
            weight: "300"
        },
        {
            path: "../public/fonts/Vazirmatn-Medium.woff2",
            style: "normal",
            weight: "400"
        },
        {
            path: "../public/fonts/Vazirmatn-Bold.woff2",
            style: "normal",
            weight: "500"
        },
    ],
    variable: "--font-vazir"
});

export { yekan, vazir };