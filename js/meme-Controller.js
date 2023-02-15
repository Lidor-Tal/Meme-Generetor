'use strict'

let gElCanvas
let gCtx

function init() {
    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')
    renderMeme()

}

function renderMeme() {
    drawImg()
}

function drawImg() {
    const img = new Image()

    img.src = 'meme-img/1.jpg'

    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        drawTxt()
    }

}

function drawTxt() {
    let txt = getText()
    let x = gElCanvas.width / 2
    let y = gElCanvas.height / 2
    console.log(txt, x, y);
    gCtx.lineWidth = 1
    gCtx.fillStyle = 'white'
    gCtx.font = `25px Arial`
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText(txt, x, y)
    gCtx.strokeText(txt, x, y)
}