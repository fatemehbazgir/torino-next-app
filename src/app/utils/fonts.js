import localFont from 'next/font/local'


const yekan = localFont({
    src: [
        {
            path: "../../../public/fonts/YekanBakhMedium.woff",
            style: "normal"
        },
        {
            path: "../../../public/fonts/YekanBakhHeavy.woff",
            style: "normal"
        },
        {
            path: "../../../public/fonts/YekanBakhBold.woff",
            style: "normal"
        },
    ]
});
const vazir = localFont({
    src: [
        {
            path: "../../../public/fonts/Vazirmatn[wght].woff2",
            style: "normal"
        },
        {
            path: "../../../public/fonts/Vazirmatn[wght].woff2",
            style: "normal"
        },
        {
            path: "../../../public/fonts/Vazirmatn-Thin.woff2",
            style: "normal"
        },
        {
            path: "../../../public/fonts/Vazirmatn-SemiBold.woff2",
            style: "normal"
        },
        {
            path: "../../../public/fonts/Vazirmatn-SemiBold.woff2",
            style: "normal"
        },
        {
            path: "../../../public/fonts/Vazirmatn-Regular.woff2",
            style: "normal"
        },
        {
            path: "../../../public/fonts/Vazirmatn-Medium.woff2",
            style: "normal"
        },
        {
            path: "../../../public/fonts/Vazirmatn-Light.woff2",
            style: "normal"
        },
        {
            path: "../../../public/fonts/Vazirmatn-ExtraLight.woff2",
            style: "normal"
        },
        {
            path: "../../../public/fonts/Vazirmatn-ExtraBold.woff2",
            style: "normal"
        },
        {
            path: "../../../public/fonts/Vazirmatn-Bold.woff2",
            style: "normal"
        },
        {
            path: "../../../public/fonts/Vazirmatn-Black.woff2",
            style: "normal"
        },
        {
            path: "../../../public/fonts/iranyekanwebregular.woff",
            style: "normal"
        },
        {
            path: "../../../public/fonts/iranyekanwebmedium.woff",
            style: "normal"
        },

    ]
});

export { yekan, vazir };