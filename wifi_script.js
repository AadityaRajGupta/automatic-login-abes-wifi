// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://192.168.1.254:8090/httpclient.html
// @icon         https://www.google.com/s2/favicons?sz=64&domain=1.254
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    document.querySelector("#username").setAttribute("value","enter username here");
    document.querySelector("#password").setAttribute("value","enter your password here");
    document.querySelector("#loginbutton").click();
})();

//contributed by Aaditya Raj Gupta
