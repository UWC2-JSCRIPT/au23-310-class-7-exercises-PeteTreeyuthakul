// TODO
const formEl = document.getElementById('connect-form')
const firstNameEl = document.getElementById('first-name')
const lastNameEl = document.getElementById('last-name')
const emailEl = document.getElementById('email')
const selectEl = document.getElementById('contact-kind')
const osEl = document.getElementById('operating-system')
const numEmployeeEl = document.getElementById('num-of-employee')

const validLengthText = function(input,min){
    if(input.value.trim().length >= min){
        input.parentElement.classList.remove("invalid")
        
        return true
        
    }else{
        input.parentElement.classList.add('invalid')
        
        return false
    }
}

const validEmail = function (email){
    const  emailForm = /\w+@\w+\.\w+/
    if (emailForm.test(email.value.trim())){
        email.parentElement.classList.remove('invalid')
        return true
    }else {
        email.parentElement.classList.add('invalid')
        return false
    }
}

const handleSelect = (selectEl) => {
    const selectElValue = selectEl.value
    if(selectElValue === 'business') {
        numEmployeeEl.parentElement.classList.remove('hidden')
        osEl.parentElement.classList.add('hidden')
    }else if(selectElValue === 'technical'){
        osEl.parentElement.classList.remove('hidden')
        numEmployeeEl.parentElement.classList.add('hidden')
    }
}

let valid = false

selectEl.addEventListener('change',()=>handleSelect(selectEl))

formEl.addEventListener('submit', (e)=>{
    if(!validLengthText(firstNameEl,3) || !validLengthText(lastNameEl,3) || !validEmail(emailEl)){
        e.preventDefault()
        console.log('Bad input')
        
    }else{
        valid = true;
    }
})

