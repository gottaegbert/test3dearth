$('.ctn__solution__element').addClass('animate__animated animate__bounceInUp');
const space_1 = document.querySelector('.space_1');

function sleep(s){
    return new Promise(function(resolve) {
        setTimeout(resolve,s)
    })
}

$(document).ready(function(){
    $(window).scroll(function(){
        var body=$('html,body').scrollTop();
        var width_screen = window.innerWidth;
        console.log(width_screen);
        console.log(body);
        if (body>=100 && body<200 && width_screen>739) {
            
        }
        else if (body>200 && body<900) {
            sleep(0)
            .then(function() {

                $('.ctn__feature__image').addClass('animate__animated animate__bounceInLeft');
                $('.ctn__feature__content').addClass('animate__animated animate__bounceInRight');
                
                return sleep(500);
            })
            .then(function() {
                Object.assign(space_1.style , {
                    display: 'none',
                })
            
            })     
        }
        else if (body>=1100 && body<1254 && width_screen>739) {
            
        } else if (body>=1254 && body<1866 && width_screen>739) {
            
        } else if (body>=1866 && body<3000 && width_screen>739) {
            
        }
        
    });
})




function handle_user() {
    var update1 = document.querySelector(`.user-drop`);
    if (update1.classList.contains('open1')){
        update1.classList.remove('open1');
    } 
    else {
        update1.classList.add('open1');
    }
    
}



























