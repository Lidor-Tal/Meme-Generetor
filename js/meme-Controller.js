'use strict'

let gElCanvas
let gCtx

function init() {
    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')
}

function renderMeme(img) {
    let url = img.url
    renderInput()
    drawImg(url)

}

function drawImg(url) {
    const img = new Image()

    img.src = `${url}`

    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        let { txt, color, size, x, y } = getCurrLine()

        drawTxt(txt, color, size, x, y)
    }

}

function drawTxt(txt, color, size = 50, x = 225, y = 225) {
    console.log('hi');

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
    drawTxt(txt, color = clr, size, x, y)
}

function saveColor(color) {
    let lines = getCurrLine()
    lines.color = color
}

function renderInput() {
    let { selectedLineIdx } = getMeme()
    let strHtml = `<div>
    <button class="btn-closeCanvas" onclick="closeCanvas()">Back to gallery</button>
    <input class="imput" type="text" name="txt"></div>
    <div><button class="btn" onclick="setLineTxt(${selectedLineIdx})">submit</button> 
    <input type="color" oninput="changeColor(value)" onchange="saveColor(value)"></div>
    <div> <button class="btn addInput" onclick="changelineIdx()">add-Line</button></div>
    <div> <button class="btn changeLines" onclick="changeBetweenLines()"> change lines</button></div>
    `
    document.querySelector('.input-txt').innerHTML = strHtml
}