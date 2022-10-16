let allFaqs = document.querySelectorAll('.faq');

allFaqs.forEach((ques)=>{
    ques.addEventListener('click', ()=>{
        ques.classList.toggle('active')
    })
})