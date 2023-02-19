'use strict'

let gElCanvas
let gCtx


function init() {

    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')
}

function renderMeme(img) {
    let url = img.url
    drawImg(url)
}

function drawImg(url) {
    const img = new Image()

    img.src = `${url}`

    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        drawTxt()
    }

}

function drawTxt() {
    let { txt, color, x, y, size } = getCurrLine()

    gCtx.beginPath()
    gCtx.lineWidth = 1
    gCtx.fillStyle = color
    gCtx.font = `${size}px Arial`
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText(txt, x, y)
    gCtx.strokeText(txt, x, y)

}

function changeColor(clr) {
    let { txt, color, size, x, y } = getCurrLine()
    color = clr
    drawTxt(txt, color, size, x, y)
}

function saveColor(color) {
    let lines = getCurrLine()
    lines.color = color
}

function renderInput() {

}

