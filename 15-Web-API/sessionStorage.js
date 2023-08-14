function setSessionStorageItem(key, value) {
    sessionStorage.setItem(key, value);
    return sessionStorage.length
}

function getSessionStorageItem(key) {
    return sessionStorage.getItem(key);
}

function removeSessionStorageItem(key) {
    sessionStorage.removeItem(key);
}

function clearSessionStorage() {
    sessionStorage.clear();
}

document.getElementById("demo").innerHTML = "SessionStorage : " + sessionStorage.length + " items";
