'use strict'

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

var gImgs = [{ id: 1, url: 'meme-img/1.jpg', keywords: ['funny', 'cat'] }];

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}

function getUrlfromImg() {
    return gImgs.find(id => id = gMeme.selectedImgId)
}


function getText() {
    var lines = gMeme.lines
    return lines.map(lines => lines.txt)
}

function setLineTxt() {
    let elInput = document.querySelector('[name="txt"]')
    let lines = gMeme.lines
    lines.forEach(line => line.txt = elInput.value)
    renderMeme()
}

