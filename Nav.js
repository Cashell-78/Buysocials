const menu = document.getElementById('menu');
     const link = document.getElementById('link');
     const x = document.getElementById('x');
     
     menu.addEventListener('click', () =>{
       link.style.marginLeft = '0px';
       menu.style.display = "none";
       x.style.display = "flex"
     })
     x.addEventListener('click', () =>{
       link.style.marginLeft = '-200px';
       menu.style.display = "block";
       x.style.display = "none"
     })