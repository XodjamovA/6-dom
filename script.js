let inps = document.querySelectorAll('input')
let form = document.forms.subscribe
let all = document.querySelector('.all')
let need = document.querySelector('.need')
let success = document.querySelector('.success')
let error = document.querySelector('.error')
let imgs = document.querySelectorAll('img')
let btn = document.querySelector('button')
let blue = document.querySelectorAll('.blue input')

form.onsubmit = (event) => {
    event.preventDefault()

}

inps.forEach(inp => {

    inp.onfocus = () => {
        inp.style.border = "3px solid blue"
    }

    inp.onblur = () => {
        if (inp.value.length > 0) {
            let user = {}
            let fm = new FormData(form)
            fm.forEach((value, key) => {
                user[key] = value
            })
            console.log(user);
            imgs.forEach(img => {
                img = img.style.display = "none"
            })

            inp.style.border = "3px solid green"
        } else {
            imgs.forEach(img => {
                img = img.style.display = "block"
            })
            inp.style.border = "3px solid red"

        }
    }

})


// form.onsubmit = (event) => {
//     event.preventDefault()
//     let err = 0

//     inps.forEach(inp => {
//         inp.parentElement.classList.remove('red')
//         if (inp.value.length < 1) {
//             inp.parentElement.classList.add('red')
//             err++
            
//         }
//     })

//     if (errCount < 1) {
//         let user = {}
//         let fm = new FormData(form)
//         fm.forEach((value, key) => {
//             user[key] = value
//         })
//         console.log(user);
//     } 

// }