let prev = document.querySelector('.prev')
let next = document.querySelector('.next')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slider').appendChild(items[0])
})
prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slider').prepend(items[items.length - 1])
})
