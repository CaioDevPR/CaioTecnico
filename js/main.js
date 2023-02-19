const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()


    if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {

        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        contactMessage.textContent = 'Mensagem nao enviada ❌'
    }else{
        emailjs.sendForm('service_kv655bp','template_13tdr8l', '#contact-form', '3ny2C-9nvlRFILlwc')
            .then(() => {

                contactMessage.classList.add('color-blue')
                contactMessage.textContent = 'Mensagem enviada ✔ '

                setTimeout(() =>{
                    contactMessage.textContent = ''
                }, 5000)
            }, (error) =>{
                alert('Ops! Falhou... ⚠', error)

            })

        contactName.value = ''
        contactEmail.value = ''
        contactProject.value = ''
    }
}

contactForm.addEventListener('submit', sendEmail)