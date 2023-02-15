'use strict'


function getRandomId(length) {
    var chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    var charsLength = chars.length;
    var randomId = '';

    if (!length) {
        length = 20;
    }

    for (var i = 0; i < length; i++) {
        randomId += chars[Math.floor(Math.random() * charsLength)];
    }

    return randomId;
}