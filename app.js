let audience_btn=document.getElementById('audience_btn');
let show_bx_1=document.getElementsByClassName('show_bx')[0];
audience_btn.addEventListener('click',()=>{
    show_bx_1.classList.toggle('show_bx_active')
})