'use strict'

let gCurrImg

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

var gImgs = [
    { id: 1, url: 'meme-img/1.jpg', keywords: ['funny', 'tramp'] },
    { id: 2, url: 'meme-img/2.jpg', keywords: ['funny', 'cat'] },
    { id: 3, url: 'meme-img/3.jpg', keywords: ['funny', 'cat'] },
    { id: 4, url: 'meme-img/4.jpg', keywords: ['funny', 'cat'] },
    { id: 5, url: 'meme-img/5.jpg', keywords: ['funny', 'cat'] },
    { id: 6, url: 'meme-img/6.jpg', keywords: ['funny', 'cat'] },
    { id: 7, url: 'meme-img/7.jpg', keywords: ['funny', 'cat'] },
    { id: 8, url: 'meme-img/8.jpg', keywords: ['funny', 'cat'] },
    { id: 9, url: 'meme-img/9.jpg', keywords: ['funny', 'cat'] },
    { id: 10, url: 'meme-img/10.jpg', keywords: ['funny', 'cat'] },
    { id: 11, url: 'meme-img/11.jpg', keywords: ['funny', 'cat'] },
    { id: 12, url: 'meme-img/12.jpg', keywords: ['funny', 'cat'] },
];

var gMeme =
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
}


function getUrlfromImg() {
    return gImgs.find(id => id = gMeme.selectedImgId)
}


function getText(img) {
    let meme = getMeme()
    let lines = meme.lines
    return lines.map(line => line.txt)
}

function setLineTxt() {
    let elInput = document.querySelector('[name="txt"]')

    lines.forEach(line => line.txt = elInput.value)
    renderMeme()
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

// function getMemebyId(id) {
//     return gMeme.find(meme => {
//         if (meme.selectedImgId === id) {
//             return meme
//         }
//     })
// }