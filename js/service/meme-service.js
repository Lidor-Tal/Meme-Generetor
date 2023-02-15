'use strict'

let gCurrImg

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

var gImgs = [
    { id: 1, url: 'meme-img/1.jpg', keywords: ['funny', 'tramp'] },
    { id: 2, url: 'meme-img/2.jpg', keywords: ['funny', 'cat'] },
];

var gMeme = [
    {
        selectedImgId: 1, selectedLineIdx: 0,
        lines: [
            {
                txt: 'I sometimes eat Falafel',
                size: 20,
                align: 'left',
                color: 'red'
            }
        ]
    },
    {
        selectedImgId: 2, selectedLineIdx: 0,
        lines: [
            {
                txt: 'I sometimes eat Falafel',
                size: 20,
                align: 'left',
                color: 'red'
            }
        ]
    }
]

function getUrlfromImg() {
    return gImgs.find(id => id = gMeme.selectedImgId)
}


function getText(img) {
    let meme = getMemebyId(img.id)
    let lines = meme.lines
    return lines.map(line => line.txt)
}

function setLineTxt() {
    let elInput = document.querySelector('[name="txt"]')
    let lines = gMeme.lines
    lines.forEach(line => line.txt = elInput.value)
    renderMeme()
}

function setImg(id) {
    console.log(id);
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
    console.log('hi');

    let gallery = document.querySelector('.image')
    gallery.classList.add('close')
}

function getCanvasdispay() {
    let gallery = document.querySelector('.meme-Editor')
    gallery.classList.toggle('close')
}

function getMemebyId(id) {
    return gMeme.find(meme => {
        if (meme.selectedImgId === id) {
            return meme
        }
    })
}