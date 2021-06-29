window.onscroll = function(){
    console.log(document.documentElement.scrollTop )
    if(document.documentElement.scrollTop > 1000){
        document.querySelector('.go-top-button').classList.add('show');
    }else{
        document.querySelector('.go-top-button').classList.remove('show');
    }
}

document.querySelector('.go-top-button').addEventListener('click' , ()=>{
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
});