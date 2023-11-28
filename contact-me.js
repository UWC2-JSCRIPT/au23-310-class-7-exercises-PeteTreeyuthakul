// TODO
// TODO
const formEl = document.getElementById('connect-form')
const nameEl = document.getElementById('name')

const emailEl = document.getElementById('email')
const selectEl = document.getElementById('contact-kind')
const jobTitleEl = document.getElementById('job-title')
const companyWebEl = document.getElementById('company-web')
const codeEl = document.getElementById('code-detail')
const messageEl = document.getElementById('message')

const validLengthText = function(input,min){
    if(input.value.trim().length >= min){
        input.parentElement.classList.remove("invalid")
        
        return true
        
    }else{
        input.parentElement.classList.add('invalid')
        input.previousElementSibling.innerText = `${input.previousElementSibling.innerText} (Minimum ${min} charactors)` 
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
    if(selectElValue === 'job') {
        jobTitleEl.parentElement.classList.remove('hidden')
        companyWebEl.parentElement.classList.remove('hidden')
        
        codeEl.parentElement.classList.add('hidden')
        codeEl.parentElement.classList.remove('invalid')
        codeEl.previousElementSibling.innerText = "Coding language"
    }else if(selectElValue === 'talk'){
        jobTitleEl.parentElement.classList.add('hidden')
        companyWebEl.parentElement.classList.add('hidden')
        
        codeEl.parentElement.classList.remove('hidden')
        codeEl.parentElement.classList.add('invalid')
        codeEl.previousElementSibling.innerText = "Coding language (Select one option*)"
    }
}

const validurl= function (url){
    const  urlForm = /http?\:\/\/.+\..+/
    if (urlForm.test(url.value.trim())){
        url.parentElement.classList.remove('invalid')
        return true
    }else {
        url.parentElement.classList.add('invalid')
        url.previousElementSibling.innerText = `Company website (URL FORM /http?\:\/\/.+\..+/)`
        return false
    }
}

let valid = false

selectEl.addEventListener('change',()=>handleSelect(selectEl))
codeEl.addEventListener('change',(e)=>{
    codeEl.parentElement.classList.remove("invalid")
    codeEl.previousElementSibling.innerText = "Coding language"
})

formEl.addEventListener('submit', (e)=>{
    if(validLengthText(nameEl,3) && validEmail(emailEl) && validLengthText(messageEl,10)){
        if(selectEl.value === 'job'&& !validurl(companyWebEl)){
            e.preventDefault()
            console.log('Bad input')
        }else if(selectEl.value === 'talk'&& !codeEl.parentElement.classList.value ==='form-group'){
            e.preventDefault()
            console.log('Bad input')
        }else{
            valid = true
        }
    }else{
        e.preventDefault()
        console.log('Bad input')
    }
})

