'use strict'

let gCurrId = 0
let gCurrImgCount = 18

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

let gCurrImg

var gMeme =
{
    selectedImgId: 1, selectedLineIdx: 0,
    lines: [
        {
            txt: 'first Line',
            size: 56,
            align: 'left',
            color: 'black',
            x: 225,
            y: 100,

        }
    ]
}


function getUrlfromImg() {
    return gImgs.find(id => id = gMeme.selectedImgId)
}

function onSetLineTxt(text) {
    let txt = getCurrLineTxt()
    return txt += text
}

function getMeme() {
    return gMeme
}

function setImg(id) {
    let currImg = getCurrImg(id)
    gCurrImg = currImg
    getGalleryDisplay()
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

function getCanvasdispay() {
    let gallery = document.querySelector('.meme-editor')
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

function closeCanvas() {
    // cheackIfWantToSave()
    getCanvasdispay()
    getGalleryDisplay()
}


function toggleMenu() {
    document.body.classList.toggle('menu-open')
}
