const setName = document.getElementById('setName');
const setUserName = document.getElementById('setUserName');
const getName = document.getElementById('getName');
const getUserName = document.getElementById('getUserName');
const checkcookie = document.getElementById('checkCookie');

console.log(setName, setUserName, getName, getUserName);
// setName.innerHTML = "Kishor";
// console.log(setName);
document.cookie = null;
console.log(document.cookie);

function setCookie(cname, cval, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    document.cookie = cname + "=" + cval + ";expires=" + d.toUTCString() + ";path=/";
}

function getCookie(cname) {
    let ca = document.cookie.split(';');
    console.log(ca);

    let length = ca.length;
    let name = cname + "=";
    console.log(cname);

    for (let i = 0; i < length; i++) {
        console.log(ca[i]);
        let str = ca[i].trim();
        console.log(str);

        if (str.indexOf(name) === 0) {
            return str.substring(name.length);
        }
    }

    return "";
}

function checkCookie(cname, exdays) {
    let name = getCookie(cname);

    if (name != "") {
        alert("Welcome again " + name);
    }
    else {
        name = prompt("Please enter your name:", "Harry Potter");
        if (name != null && name != "") {
            setCookie(cname, name, exdays);
        }
    }
}

function checkAgeCookie(cname, exdays) {
    let age = getCookie(cname);

    if (age != "") {
        alert("Your age is " + age);
    }
    else {
        age = prompt("Please enter your age:", "18");
        if (age != null && age != "") {
            setCookie(cname, age, exdays);
        }
    }
}