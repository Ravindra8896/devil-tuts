let items = document.querySelectorAll('.hero .item-list');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails =document.querySelectorAll('.thumbnail .items-list')

let countItem = items.length;
let itemActivate = 0;
next.onclick =function(){
    itemActive = itemActive + 1;
    if (itemActive >= countItem){
        itemActive = 0;
    }
    showslider();

}
function showslider(){
    let itemActiveOld = document.querySelector('.hero .list-items .hero-img.active');
    let thumbnailActiveOld = document.querySelector('.hero .thumbnail .list-items.active ');
    itemActiveOld.classList.remove('active');

    thumbnailActiveOld.classList.remove('active');

    items[itemActive].classList.add('avtive');
    thumbnails[itemActive].classList.add('active');
}



let pre = document.querySelector('.prev')
let nex = document.querySelector('.next')

nex.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slider').appendChild(items[0])
})
pre.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slider').prepend(items[items.length - 1])
})
