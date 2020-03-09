const letter = document.getElementById('letter')
const author = document.getElementById('author')
const message = document.getElementById('message')
const signed = document.getElementById('signed')
const note = document.getElementById('note')

var rawdata
var currentitem = 0

const OpenNote = () => {
    note.style.display = 'block'
}

const CloseNote = () => {
    note.style.display = 'none'
}

const SetUp = async display => {
    const info = await fetch('/messages')
    rawdata = await info.json()
    
    if(currentitem < rawdata.length)
    {
        author.textContent = rawdata[currentitem].signed
        message.textContent = rawdata[currentitem].message
        signed.textContent = `- ${rawdata[currentitem].signed}`
    }
        
}

SetUp()

const SlideInLeftRight = () => {
    if(currentitem > 0 && letter.style.animation == '') 
    {
        currentitem--
        window.setTimeout("letter.style.animation = '';", 4000)
        letter.style.animation = "swipe-left 4s"
    }
    SetUp()
}
const SlideInRightLeft = () => {
    if(currentitem < rawdata.length - 1  && letter.style.animation == '') 
    {
        currentitem++
        window.setTimeout("letter.style.animation = ''; console.log('animation reset') ", 4000)
        letter.style.animation = "swipe-right 4s"
    }
    SetUp()
}

