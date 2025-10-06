const imgs = document.querySelectorAll('.section1 .slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 0;
function changeSlide()
{
    for(let i=0;i<imgs.length;i++)
    {
        imgs[i].style.display = "none";
     }
    imgs[n].style.display = "block";
}
changeSlide();

prev_btn.addEventListener('click',(e) => {
    if(n>0) n--;
    else n = imgs.length - 1;
    changeSlide();
})
next_btn.addEventListener('click',(e) => {
    if(n < imgs.length - 1) n++;
    else n = 0;
    changeSlide();
})

function Open()
{
    let opt = document.getElementsByClassName('side-bar')[0];
    opt.style.right = '0px';
    // document.body.style.overflow = "hidden";
}
function Close()
{
    let opt = document.getElementsByClassName('side-bar')[0];
    opt.style.right = '-200px';
    // document.body.style.overflow = "auto";
}
function fun(){
    // let logout = document.getElementsByClassName("output")[0];
    // logout.href = "./home_login.html";
    window.location.href = "./home_login.html"
}
