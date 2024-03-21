var $ =document;
var postion = document.documentElement;
var des = $.querySelector('.des')
postion.addEventListener('mousemove',(e)=>{
    postion.style.setProperty('--x',e.clientY + "px")
})


var logo = $.querySelector('.logo')
var content = $.querySelector('.content')
var mobile = $.querySelector('.mobile')


window.addEventListener('scroll',()=>{
    var value = window.scrollY;
    console.log(value)

    if (window.pageYOffset < 435) {
        logo.style.display="none"
    }

    if (window.pageYOffset > 435) {
        logo.style.animation="bounce-in-top 1.1s both"
        logo.style.display="block"
    }

    if (window.pageYOffset > 495) {
        logo.style.display="block"
        logo.style.width="500px"
        logo.style.height="500px"
        logo.style.position="absolute"
    }
    if (window.pageYOffset < 990) {
        content.style.marginRight = "0"
    }
    if (window.pageYOffset > 990) {
        content.style.marginRight = "300px"
    }


    })





//---------------btn-more
var desMore = $.querySelector('.des-more')
var btnMore = $.querySelector('.btn-more')

btnMore.addEventListener('click',()=>{
    desMore.style.height="550px";
    desMore.style.marginTop="-10px";
    btnMore.style.display="none";
})



//------------------go top

var goTop =$.querySelector('.goTop')

goTop.addEventListener('click',()=>{
    window.scrollTo(0,0)
})

