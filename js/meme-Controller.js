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
    console.log(color);
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
    console.log(selectedLineIdx);
    let strHtml = `
    <input type="text" name="txt">
    <button onclick="setLineTxt(${selectedLineIdx})">submit</button>  <input type="color" oninput="changeColor(value)" onchange="saveColor(value)">
    <button class="addInput" onclick="changelineIdx()">add-Line</button>
    <button class="changeLines" onclick="changeBetweenLines()"> change lines</button>
    `
    document.querySelector('.input-txt').innerHTML = strHtml
}