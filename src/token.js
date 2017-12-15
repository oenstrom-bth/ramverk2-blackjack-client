export const saveToken = (token) => {
    window.localStorage.setItem("token", token);
};

export const readToken = () => {
    return window.localStorage.getItem("token");
};

export const removeToken = () => {
    window.localStorage.removeItem("token");
};
