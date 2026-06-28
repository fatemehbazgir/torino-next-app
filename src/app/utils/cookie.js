const setCookie = (tokens) => {
    document.cookie = `accessToken=${tokens.accessToken}; max-age=${1 * 60 * 60}`;
    document.cookie = `refreshToken=${tokens.refreshToken}; max-age=${7 * 24 * 60 * 60}`;
};

export default setCookie;