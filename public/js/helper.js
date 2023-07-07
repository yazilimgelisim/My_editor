function classEvent(elements, event,callBack){
    elements.forEach((element)=>{
        element.addEventListener(event, ()=>{
            callBack(element)
        })
    })
}

function select(element){
    let start = element.selectionStart
    let end = element.selectionEnd
    let txt = element.value.substring(start, end)
    let arrays = [txt, start, end]
    return arrays
}



function addDelete(elements){
    if(elements.length > 0){
        elements.forEach(async(element)=>{
            await element.remove()
        })
        let script = document.createElement('script')
        script.src = '/js/prism.js'
        script.className = 'prism'
        document.appendChild(script)
    }
    else{
        let script = document.createElement('script')
        script.src = '/js/prism.js'
        script.className = 'prism'
        document.body.appendChild(script)
    }
}


function transfer(elements){
    for(let i = 0; i < elements.length; i++){
        console.log('çalıştı')
        elements[i].innerText = elements[i].innerHTML
    }
}







export{classEvent, select, addDelete, transfer}