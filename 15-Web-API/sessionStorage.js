function setSessionStorageItem(key, value) {
    SessionStorage.setItem(key, value);
    return SessionStorage.length;
}

function getSessionStorageItem(key) {
    return SessionStorage.getItem(key);
}

function removeSessionStorageItem(key) {
    SessionStorage.removeItem(key);
}

function clearSessionStorage() {
    SessionStorage.clear();
}

document.getElementById("demo").innerHTML = "SessionStorage : " + SessionStorage.length + " items";
