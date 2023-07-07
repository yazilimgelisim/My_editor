//! Include helper area
import { classEvent, select, addDelete, transfer } from '/js/helper.js'




//! Selected HTML elements area
const boxes = document.querySelectorAll('.bx')
const palette = document.getElementById('colors')
const linkArea = document.getElementById('linkArea')
const color = document.querySelectorAll('.color')
const text = document.getElementById('text')
const title = document.getElementById('title')
const linkURL = document.getElementById('linkURL')
const linkButton = document.getElementById('linkButton')
const outTitle = document.getElementById('outTitle')
const outText = document.getElementById('outText')
const prism = document.querySelectorAll('.prism')
const language = document.getElementById('language')
const code = document.querySelectorAll('code')




//! Varibles and arrays area
let colorControl = false, colorCounter = 0
let linkControl = false, linkCounter = 0
let focusControl = false



//! Animation added area
//* Color palette animation
classEvent(boxes, 'click', (bx) => {
    if (bx.className === 'bx bx-palette') {
        colorControl = true
        colorCounter++
        palette.style.visibility = 'visible'
        palette.style.opacity = '1'
    }
})

//* Link Area animation
classEvent(boxes, 'click', (bx) => {
    if (bx.className === 'bx bx-link') {
        linkControl = true
        linkCounter++
        linkArea.style.transform = 'translateX(0px)'
    }
})

// Link and Color finished animation area
document.addEventListener('click', () => {
    if (colorControl) {
        colorCounter++
        if (colorCounter > 2) {
            setTimeout(() => {
                palette.style.visibility = 'hidden'
                palette.style.opacity = '0'
            }, 300)
            colorCounter = 0
            colorControl = false
        }
    }

    if (linkControl) {
        linkCounter++
        if (linkCounter > 5) {
            setTimeout(() => {
                linkArea.style.transform = 'translateX(-150%)'
            }, 300)
            linkControl = false
            linkCounter = 0
        }
    }
})


//* Focus events area
text.addEventListener('blur', () => {
    if (focusControl == false) {
        text.focus()
    }
})

title.addEventListener('click', () => {
    focusControl = true
    title.focus()
})
title.addEventListener('blur', () => {
    focusControl = false
})
linkURL.addEventListener('click', () => {
    focusControl = true
    linkURL.focus()
})
linkURL.addEventListener('blur', () => {
    focusControl = false
})


//* Text trasfer Area
if(text.value.length > 0){
    outText.innerHTML = text.value
    addDelete(prism)
}
text.addEventListener('keyup', ()=>{
    outText.innerHTML = text.value
    addDelete(prism)
})
title.addEventListener('keyup', ()=>{
    outTitle.innerText = title.value
})


//! Click and keyup events case text transfor out text area
// if (text.value.length > 0) {
//     outText.innerHTML = text.value
// }
// if (title.value.length > 0) {
//     outTitle.innerText = title.value
// }
// text.addEventListener('keyup', () => {
//     outText.innerHTML = text.value
// })
// text.addEventListener('click', () => {
//     outText.innerHTML = text.value
// })
// title.addEventListener('keyup', () => {
//     outTitle.innerText = title.value
// })
// title.addEventListener('click', () => {
//     outTitle.innerText = title.value
// })


//! Buttons click when change text events area
//* Color added in text area
classEvent(color, 'click', (clr) => {
    let selectedColor = clr.className.split(' '); selectedColor = selectedColor[1]
    let array = select(text), txt = array[0], start = array[1], end = array[2];
    if (txt.length > 0) {
        txt = `<span style="color:${selectedColor};">${txt}</span>`
        let newText = text.value.substring(0, start) + txt + text.value.substring(end, text.value.length)
        text.value = newText
        outText.innerHTML = newText
        addDelete(prism)
    }

})



//* Bold property added the text
classEvent(boxes, 'click', (bx) => {
    if (bx.className === 'bx bx-bold') {
        let array = select(text), txt = array[0], start = array[1], end = array[2];
        if (txt.length > 0) {
            txt = `<b>${txt}</b>`
            let newText = text.value.substring(0, start) + txt + text.value.substring(end, text.value.length)
            text.value = newText
            outText.innerHTML = newText
            addDelete(prism)
        }
    }
})


//* Italic property added the text
classEvent(boxes, 'click', (bx) => {
    if (bx.className === 'bx bx-italic') {
        let array = select(text), txt = array[0], start = array[1], end = array[2];
        if (txt.length > 0) {
            txt = `<i>${txt}</i>`
            let newText = text.value.substring(0, start) + txt + text.value.substring(end, text.value.length)
            text.value = newText
            outText.innerHTML = newText
            addDelete(prism)
        }
    }
})


//* Underline property added the text
classEvent(boxes, 'click', (bx) => {
    if (bx.className === 'bx bx-underline') {
        let array = select(text), txt = array[0], start = array[1], end = array[2];
        if (txt.length > 0) {
            txt = `<u>${txt}</u>`
            let newText = text.value.substring(0, start) + txt + text.value.substring(end, text.value.length)
            text.value = newText
            outText.innerHTML = newText
            addDelete(prism)
        }
    }
})


//* Link propert added the text
linkButton.addEventListener('click', () => {
    let array = select(text), txt = array[0], start = array[1], end = array[2];
    if (txt.length > 0 && linkURL.value.length > 0) {
        txt = `<a href="${linkURL.value}">${txt}</a>`
        let newText = text.value.substring(0, start) + txt + text.value.substring(end, text.value.length)
        text.value = newText
        outText.innerHTML = newText
        linkURL.value = ""
        setTimeout(() => {
            linkArea.style.transform = 'translateX(-150%)'
        }, 300)
        linkControl = false
        linkCounter = 0
        addDelete(prism)
    }
})

//* Code propert added in the text area
classEvent(boxes, 'click', (bx) => {
    if (bx.className === 'bx bx-code') {
        let array = select(text), txt = array[0], start = array[1], end = array[2];
        if (txt.length > 0) {
            let convert = `<pre class="${language.value}"><code>${txt}</code></pre>`
            let newText = text.value.substring(0, start) + convert + text.value.substring(end, text.value.length)
            text.value = newText
            outText.innerHTML = newText
            addDelete(prism)
            transfer(code)
        }
    }
})


