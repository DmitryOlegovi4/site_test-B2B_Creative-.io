const btnCall = document.querySelector(".orderCall");
const btnExpertReview = document.querySelector(".expertReview");
const contactsAndBtn = document.querySelector(".contactsAndBtn");
const toggleBtn = document.querySelector(".toggleBtn");
const userPhone = document.querySelector("#userPhone");
const userEmail = document.querySelector("#userEmail");
const btnForm = document.querySelector(".btnForm");

btnCall.addEventListener('click', function () {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    })
})
btnExpertReview.addEventListener('click', function () {
    const heightScroll = window.pageYOffset;
    if (heightScroll) {
        window.scrollBy({
            top: window.innerHeight - heightScroll,
            behavior: 'smooth'
        })
    } else {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        })
    }
})
function openMenu(){
    if(window.innerWidth<=800){
        let menuVal = true;
        contactsAndBtn.style.display = 'none';
        toggleBtn.style.display = 'block';
        toggleBtn.addEventListener('click', function () {
            if(menuVal){
                contactsAndBtn.style.display = 'flex';
                toggleBtn.style.color = 'white'
                menuVal=false
            } else {
                contactsAndBtn.style.display = 'none';
                toggleBtn.style.color = '#bf9037'
                menuVal=true
            }
        })
    } else {
        contactsAndBtn.style.display = 'flex';
        toggleBtn.style.display = 'none';
    }
}
window.addEventListener('resize',openMenu)
openMenu();

btnForm.addEventListener('click',function (e) {
    e.preventDefault();
    if(userPhone.value.trim() || userEmail.value.trim()){
        alert('Заявка на предварительную оценку принята. В скором времени с Вами свяжется наш менеджер.');
        userPhone.value = '';
        userEmail.value = '';
    } else{
        alert('Заполните, пожалуйста, форму до конца.');
    }
})