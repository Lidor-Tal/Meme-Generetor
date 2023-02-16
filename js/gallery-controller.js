'use strict'

function initGallery() {
    createImgs()
    init()
    renderGallery()
    console.log(gImgs)
}

function renderGallery() {
    let newStr = ''
    gImgs.map((img) => {
        newStr += `
        <img src="${img.url}" onclick="onImageSelect(${img.id})">
       `
    })
    document.querySelector('.gallery-container').innerHTML = newStr

}

function onImageSelect(id) {
    setImg(id)
}