'use strict'

let gElCanvas
let gCtx

function init() {
    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')
}

function renderMeme(img) {
    drawImg(img, img.url)
}

function drawImg(currImg, url) {
    const img = new Image()

    img.src = `${url}`

    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        drawTxt(currImg)
    }

}

function drawTxt(img) {
    let txt = getText(img)
    let x = gElCanvas.width / 2
    let y = gElCanvas.height / 2 - 150
    gCtx.lineWidth = 1
    gCtx.fillStyle = 'white'
    gCtx.font = `25px Arial`
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText(txt, x, y)
    gCtx.strokeText(txt, x, y)
}