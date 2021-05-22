    
    // scroll menu  
    
    window.addEventListener("scroll",function(){
        
        var header = document.querySelector("header");
        header.classList.toggle("sticky" , window.scrollY > 0 );
    })

    // menu mobile 
    $(document).ready(function(){
        $('#icon').click(function(){
            $('ul').toggleClass('show')
        });
    });