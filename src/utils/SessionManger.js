export const Keys = {
    LOGGED_IN_USER: "loggedInUser"
}

export const setItem = (item) => {
    sessionStorage.setItem(item.key, item.value);
}

export const removeItem =(key) => {
     sessionStorage.removeItem(key);
}

export const getItem = (key) => {
    return sessionStorage.getItem(key)
}