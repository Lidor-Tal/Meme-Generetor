'use strict'

function initGallery() {
    createImgs()
    init()
    renderGallery()
}

function renderGallery() {
    let newStr = ''
    gImgs.map((img) => {
        newStr += `
        <img class="img-card" src="${img.url}" onclick="onImageSelect(${img.id})">
       `
    })
    document.querySelector('.gallery-container').innerHTML = newStr

}

function onImageSelect(id) {
    setImg(id)
}