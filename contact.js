// Script to send contact information to my personal google sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbyUq0ElNxhLBk9OSCSvQVuivDiEyL1cVxJIijo1vSp7JIZnXEUnWbSz5lFXiKUPvpJK/exec'
const form = document.forms['portfolio contact form']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerText = "Message sent successfully"
            setTimeout(function () {
                msg.innerText = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})