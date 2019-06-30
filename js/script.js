"use strict";
const message = "U2FsdGVkX1/w8B8SZvfYxMPVMIv2IPqnjtMf5EPr6Ss=";
const password = window.prompt("Please enter the password");
const decrypted = CryptoJS.AES.decrypt(message, password);
document.getElementById("root").innerHTML = decrypted.toString(CryptoJS.enc.Utf8);
