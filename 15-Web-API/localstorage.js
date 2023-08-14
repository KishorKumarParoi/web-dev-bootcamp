function setLocalStorageItem(key, value) {
    localStorage.setItem(key, value);
    return localStorage.length;
}

function getLocalStorageItem(key) {
    return localStorage.getItem(key);
}

function removeLocalStorageItem(key) {
    localStorage.removeItem(key);
}

function clearLocalStorage() {
    localStorage.clear();
}