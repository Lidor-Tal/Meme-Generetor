'use strict'

let gCurrId = 0
let gCurrImgCount = 18

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

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

var gMeme =
{
    selectedImgId: 1, selectedLineIdx: 0,
    lines: [
        {
            txt: 'hello',
            size: 56,
            align: 'left',
            color: 'red',
            x: 225,
            y: 100,

        },
        {
            txt: '',
            size: 56,
            align: 'left',
            color: 'red',
            x: 225,
            y: 400,

        }
    ]
}


function getUrlfromImg() {
    return gImgs.find(id => id = gMeme.selectedImgId)
}


function getText(img) {
    let meme = getMeme()
    let lines = meme.lines
    return lines.map(line => line.txt)
}

function setLineTxt(idx) {
    console.log(idx);
    setSelectedLine(idx)
    let elInput = document.querySelector('[name="txt"]')
    console.log(elInput.value);
    if (!elInput.value) return
    let { txt, color, size, x, y } = getCurrLine()
    txt = elInput.value
    elInput.value = ''
    drawTxt(txt, color, size, x, y)
}

function getMeme() {
    return gMeme
}

function setImg(id) {
    let currImg = getCurrImg(id)
    closeGallery()
    getCanvasdispay()
    renderMeme(currImg)
}

function getCurrImg(id) {
    return gImgs.find(img => {
        if (img.id === id) {
            return img
        }
    })
}

function closeGallery() {
    let gallery = document.querySelector('.gallery')
    gallery.classList.add('close')
}

function getCanvasdispay() {
    let gallery = document.querySelector('.meme-Editor')
    gallery.classList.toggle('close')
}

function setSelectedLine(idx) {
    return gMeme.selectedLineIdx = idx
}



function getCurrLineTxt() {
    var { lines, selectedLineIdx } = gMeme
    return lines[selectedLineIdx].txt
}

function getCurrLine() {
    const { lines, selectedLineIdx } = gMeme
    return lines[selectedLineIdx]
}

function changelineIdx() {
    let meme = getMeme()
    meme.selectedLineIdx++
    renderInput()
}

function changeBetweenLines() {
    let meme = getMeme()
    if (meme.selectedLineIdx <= 0) {
        meme.selectedLineIdx++
    } else {
        meme.selectedLineIdx--
    }
    renderInput()
}