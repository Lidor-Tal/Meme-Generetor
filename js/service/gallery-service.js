'use strict'

var gImgs = [];

function createImgs() {
    let img
    for (let i = 0; i < gCurrImgCount; i++) {
        let id = gCurrId++
        img = {
            id: gCurrId,
            url: `meme-img/${gCurrId}.jpg`,
            keywords: ['funny', 'cat']
        }
        gImgs.push(img)
    }
}


function getGalleryDisplay() {
    let gallery = document.querySelector('.gallery-container')
    gallery.classList.toggle('close')
}

