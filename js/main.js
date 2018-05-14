document.addEventListener("DOMContentLoaded", function(event) {

   modal=document.querySelector('.modal')
   button=document.querySelector('.signin')
   close=document.querySelector('.close')
   submit=document.querySelector('.submit')

   button.addEventListener('click', function () {
     modal.style.display='block'
   })

   close.addEventListener('click', function () {
     modal.style.display='none'
   })

   submit.addEventListener('click', function (event) {
     event.stopPropagation();
     document.getElementById("user").classList.add("error");
    document.getElementById("pass").classList.add("error");

    })

   document.getElementById("user").addEventListener('mouseover', function () {
     document.getElementById("user").classList.remove("error");
   })

   document.getElementById("pass").addEventListener('mouseover', function () {
     document.getElementById("pass").classList.remove("error");
   })

   modal.addEventListener('click', function () {
     modal.style.display='none'
   })


  });
