document.addEventListener('scroll', function () {
    let bttb = document.querySelector('#backtotop');

    if (window.scrollY > 400)
    {
        bttb.style.opacity = '1';
    }
    else 
    {
        bttb.style.opacity = '0';
    }
});

AOS.init({
    duration: 600,
    offset: 300,
    disable: 'mobile' ,
    easing: 'ease-out'
});