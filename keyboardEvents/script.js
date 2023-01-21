let divBox = document.createElement('div')
divBox.className = 'div-box';
divBox.style.position = 'absolute'
divBox.style.width = '400px'
divBox.style.top = '40%'
divBox.style.left = '35%'
divBox.style.padding = '1px 50px'
divBox.style.background = '#FEFFFF'
divBox.style.boxShadow ='2.5px 2.5px lightGrey'
divBox.innerHTML = `<p style='text-align:center; color:#3F3F3F; font-size:25px;
font-family:font-family:Arial, Helvetica, sans-serif; font-weight:bold;'>Press any keyboard key</p>`
document.body.appendChild(divBox)

document.body.addEventListener('keydown',press =>{
    let pKeyCode = document.createElement('p')
    pKeyCode.style.position = 'absolute'
    pKeyCode.style.width = '100px'
    pKeyCode.style.marginTop = '50px'
    pKeyCode.style.top = '100%'
    pKeyCode.style.left = '25%'
    pKeyCode.style.padding = '50px 50px'
    pKeyCode.style.background = '#FEFFFF'
    pKeyCode.style.textAlign = 'center'
    pKeyCode.style.color = '#5BBC7A'
    pKeyCode.style.fontWeight = 'bold'
    pKeyCode.style.fontFamily = 'Arial, Helvetica, sans-serif'
    pKeyCode.style.fontSize = '100px'
    pKeyCode.style.boxShadow = '2.5px 2.5px lightGrey'

    if (press.keyCode === 32) {

        divBox.innerHTML = `<p style='text-align:center; color:#3F3F3F; font-size:25px;
        font-family:font-family:Arial, Helvetica, sans-serif; font-weight:bold;'>You pressed <span style='color:#5BBC7A; font-size:40px;'>Space</span></p>`

        pKeyCode.innerHTML = `${press.keyCode}`
        divBox.appendChild(pKeyCode)
        document.body.appendChild(divBox)


    }
    else {
        if (press.keyCode > 99) {
            divBox.innerHTML = `<p style='text-align:center; color:#3F3F3F; font-size:25px;
        font-family:font-family:Arial, Helvetica, sans-serif; font-weight:bold;'>You pressed <span style='color:#5BBC7A; font-size:40px;'> ${press.key}</span></p>`
            pKeyCode.style.textIndent = '-.35em'

            pKeyCode.innerHTML = `${press.keyCode}`
            divBox.appendChild(pKeyCode)
            document.body.appendChild(divBox)
        }
        else {
            divBox.innerHTML = `<p style='text-align:center; color:#3F3F3F; font-size:25px;
        font-family:font-family:Arial, Helvetica, sans-serif; font-weight:bold;'>You pressed <span style='color:#5BBC7A; font-size:40px;'> ${press.key}</span></p>`

            pKeyCode.innerHTML = `${press.keyCode}`
            divBox.appendChild(pKeyCode)
            document.body.appendChild(divBox)
        }

    }

})


