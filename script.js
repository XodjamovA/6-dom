let inps = document.querySelectorAll('.myBlue input')
let btn = document.querySelector('button')
let inpP = document.querySelector('.input_text')
let bg = document.querySelector('input_p')
let img = document.querySelectorAll('.error_img')
let form = document.forms.form
let err = 0

form.onsubmit = (event) => {
    event.preventDefault()
    inps.forEach(inp => {
        inp.parentElement.classList.remove('red')

        if (inp.value.length < 1) {
            err++
            inp.parentElement.classList.add('red')
            console.log(inp.parentElement.classList.add('red'));
            img.style.display = "block"
        }
    })

    if (errCount == 0) {
        let user = {}

        let fm = new FormData(form)

        fm.forEach((value, key) => {
            user[key] = value
        })

        console.log(user);
    }
}