// const setCookie = (tokens) => {
//     document.cookie = `accessToken=${tokens.accessToken}; max-age=${1 * 24 * 60 * 60}`
//     document.cookie = `refreshToken=${tokens.refreshToken}; max-age=${30 * 24 * 60 * 60}`

// }

// const setAccessToken = (tokens) => {
//     document.cookie = `accessToken=${tokens.accessToken}; max-age=${1 * 24 * 60 * 60}`
// };


// const getCookie = (cookieName) => {
//     return document.cookie
//         .split(";")
//         .find((token) => token.trim().split("=")[0] === cookieName)
//         ?.split("=")[1];
// }


// export default setCookie;
// export { getCookie, setAccessToken }
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  const value = `; ${document?.cookie}`;
  const parts = value?.split(`; ${name}=`);
  if (parts?.length === 2) return parts?.pop()?.split(";")?.shift();
}

export { setCookie, getCookie };
