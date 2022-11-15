let inpNeeds = document.querySelectorAll('.myBlue input')
let allInps = document.querySelectorAll('form input')
let btn = document.querySelector('button')
let form = document.forms.reg

let pattern = {
    name: /^[a-z ,.'-]+$/i,// Y
    surname: /^[a-z ,.'-]+$/i,//Y
    password: /^((?=.*[a-z])|(?=.*[A-Z])|(?=.*\\d)|(?=.*(_|[-+_!@#$%^&*.,?]))).{6,12}/,//Y
    phone: /^998[012345789][0-9]{8}$/g,// Y
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    aboutYou: /^[a-z ,.'-]+$/i,
    age: /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/,
    html: /^[a-z ,.'-]+$/i,// Y
    css: /^[a-z ,.'-]+$/i,// Y
    js: /^[a-z ,.'-]+$/i,// Y
    favouriteCar: /^[a-z ,.'-]+$/i,// Y
}


function validate(regex, field) {
    if (regex.test(field.value)) {
        field.parentElement.classList.remove('invalid')
        field.parentElement.classList.add('valid')
    } else {
        field.parentElement.classList.remove('valid')
        field.parentElement.classList.add('invalid')
    }
}

allInps.forEach(inp => {
    inp.onkeyup = () => {

        validate(pattern[inp.name], inp)
    }
})


form.onsubmit = (event) => {
    event.preventDefault()
    let countErrs = 0

    inpNeeds.forEach(inp => {
        if (inp.value.length < 1 || inp.parentElement.classList.contains('invalid')) {
            inp.parentElement.classList.add('invalid')
            countErrs++
        } else {
            inp.parentElement.classList.remove('invalid')
        }
    });

    if (countErrs > 0) {
        console.log('Error')
    } else {
        submit(form)
    }

}



function submit(formElement) {
    let user = {}

    let fm = new FormData(formElement)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}

