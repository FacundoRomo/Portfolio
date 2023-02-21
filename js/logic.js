 const button= document.querySelector('.button');
 const contentNav=document.querySelector('.content-nav');
 const itemNav=document.getElementsByClassName('item-nav')

 button.addEventListener('click',()=>{
    contentNav.classList.toggle('activo')
 })

 for (var i=0 ; i<itemNav.length; i++){
    itemNav[i].addEventListener('click',()=>{
        contentNav.classList.toggle("activo")
    })
 }

