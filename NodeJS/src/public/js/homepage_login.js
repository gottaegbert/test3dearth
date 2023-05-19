//animate
$('.ctn__content').addClass('animate__animated animate__bounceInUp');
$('.ctn__image').addClass('animate__animated animate__bounceInRight');
$('.content .info_img').addClass('animate__animated animate__bounceInLeft');
$('.content .info_content').addClass('animate__animated animate__bounceInRight');

$(document).ready(function(){
    $(window).scroll(function(){
        var body=$('html,body').scrollTop();
        var width_screen = window.innerWidth;
        console.log(width_screen);
        console.log(body);
        if (body>=100 && body<200 && width_screen>739) {
            
        }
        else if (body>400 && body<900) {
            Object.assign(document.querySelector('.our_impact').style , {
                display : 'initial',    
            })
            Object.assign(document.querySelector('.space_1').style , {
                display : 'none',    
            })
            $('.our_impact h1').addClass('animate__animated animate__fadeInUp');
            $('.our_impact .card').addClass('animate__animated animate__fadeInUp');
        }
        else if (body>=1100 && body<1254 && width_screen>739) {
            Object.assign(document.querySelector('.reason_use').style , {
                display : 'initial',    
            })
            Object.assign(document.querySelector('.space_2').style , {
                display : 'none',    
            })
            $('.reason_title').addClass('animate__animated animate__fadeInUp');
            $('.info_item-1').addClass('animate__animated animate__fadeInUp');
        } else if (body>=1254 && body<1866 && width_screen>739) {
            $('.info_item-2').addClass('animate__animated animate__bounceInUp');
            
        } else if (body>=1866 && body<3000 && width_screen>739) {
            // $('.highlights .title').addClass('animate__animated animate__bounceInUp');
            // $('.highlights .card_project').addClass('animate__animated animate__bounceInUp');
        }
        
    });
})

//btn_project_card

//promise
function sleep(s){
    return new Promise(function(resolve) {
        setTimeout(resolve,s)
    })
}

function trans_pre_card() {
    let card_project = document.querySelector('.card_project');
    let form_card_project = document.querySelectorAll('.card_project .form_card_project');
    let card_project_1 = document.querySelector('.card_project-1');
    // $('.card_project').addClass('animate__animated animate__backOutLeft');
    
    Object.assign(card_project_1.style ,{
        display : 'none',
    })
    Object.assign(card_project.style ,{
        display : 'flex',
    })

    sleep(0)
        .then(function() {
            $('.card_project_1').addClass('animate__animated animate__bounceOutRight');
            $('.card_project').addClass('animate__animated animate__bounceInLeft');
            
            return sleep(500);
        })
        .then(function() {
            Object.assign(card_project.style ,{
                display : 'flex',
            })
        
            Object.assign(card_project_1.style ,{
                display : 'none',
            })

            return sleep(0)
        })
        .then(function() {
            $('.card_project_1').removeClass('animate__animated animate__bounceOutRight');
            $('.card_project').removeClass('animate__animated animate__bounceInLeft');
        })

}

function trans_aft_card() {
    let card_project = document.querySelector('.card_project');
    let form_card_project = document.querySelectorAll('.card_project .form_card_project');
    let card_project_1 = document.querySelector('.card_project-1');
    
    sleep(0)
        .then(function() {
            $('.card_project').addClass('animate__animated animate__bounceOutLeft');
            $('.card_project_1').addClass('animate__animated animate__bounceInRight');
            
            return sleep(500);
        })
        .then(function() {
            Object.assign(card_project.style ,{
                display : 'none',
            })
        
            Object.assign(card_project_1.style ,{
                display : 'flex',
            })

            return sleep(0)
        })
        .then(function() {
            $('.card_project').removeClass('animate__animated animate__bounceOutLeft');
            $('.card_project_1').removeClass('animate__animated animate__bounceInRight');
        })
}

 function handle_user() {
    var update1 = document.querySelector(`.user-drop`);
    
    if (update1.classList.contains('open1')){
        update1.classList.remove('open1');
    } 
    else {
        update1.classList.add('open1');
    }
    
}

//info_details
let modal_1=document.querySelector('.modal_1');
let modal_2=document.querySelector('.modal_2');
let modal_3=document.querySelector('.modal_3');
let modal_4=document.querySelector('.modal_4');
let modal_5=document.querySelector('.modal_5');
let modal_6=document.querySelector('.modal_6');



//open
function open_prj_1() {
    modal_1.classList.add('open');
}

function open_prj_2() {
    modal_2.classList.add('open');
}

function open_prj_3() {
    modal_3.classList.add('open');
}

function open_prj_4() {
    modal_4.classList.add('open');
}

function open_prj_5() {
    modal_5.classList.add('open');
}

function open_prj_6() {
    modal_6.classList.add('open');
}

//close
function close_prj_1() {
    modal_1.classList.remove('open');
}

function close_prj_2() {
    modal_2.classList.remove('open');
}

function close_prj_3() {
    modal_3.classList.remove('open');
}

function close_prj_4() {
    modal_4.classList.remove('open');
}

function close_prj_5() {
    modal_5.classList.remove('open');
}

function close_prj_6() {
    modal_6.classList.remove('open');
}


/* =============loadding================= */
/*-----coi lại promise-------*/
var ctn__loading__home=document.querySelector('.ctn__loading__body');
var homepage=document.querySelector('#homepage');
var product=document.querySelector('#product');
var projects=document.querySelector('#projects');

function sleep(s){
    return new Promise(function(resolve) {
        setTimeout(resolve,s)
    })
}

function onclick__home(){
    sleep(0)
        .then(function() {
            ctn__loading__home.classList.add('open__load');
            
            return sleep(500);
        })
        .then(function() {
            
            ctn__loading__home.classList.remove('open__load')
            homepage.href="homepage"; 
            homepage.click();
        })      
}
homepage.addEventListener('click' , onclick__home);

function onclick__product(){
    sleep(0)
        .then(function() {
            ctn__loading__home.classList.add('open__load');
            return sleep(500);
        })
        .then(function() {
            ctn__loading__home.classList.remove('open__load')
            product.href="Product";
            product.click();
        })      
}

product.addEventListener('click' , onclick__product);


function onclick__projects(){
    sleep(0)
        .then(function() {
            ctn__loading__home.classList.add('open__load');
            return sleep(500);
        })
        .then(function() {
            ctn__loading__home.classList.remove('open__load');
            projects.href="detail";
            projects.click();
        })
}
projects.addEventListener('click' , onclick__projects);
// Tìm cách lấy thẻ 

/*------------RESPONSIVE--------------------*/
/*---------bars--------*/
const nav_mobile = document.querySelector('header .nav_mobile')
function open_nav_mobile() {
    Object.assign(nav_mobile.style , {
        animationName : 'spin_open_nav_mobile',
        animationDuration: '0.5s',
        transform : 'translateX(0%)',
    })
}

function close_nav_mobile() {
    Object.assign(nav_mobile.style , {
        animationName : 'spin_close_nav_mobile',
        animationDuration: '0.5s',
        transform : 'translateX(100%)', 
    })
}

// to top btn

window.scroll({
    top: 2500, 
    left: 0, 
    behavior: 'smooth'
  });
  
  // Scroll certain amounts from current position 
  window.scrollBy({ 
    top: 100, // could be negative value
    left: 0, 
    behavior: 'smooth' 
  });
 
    
  


  
  
  
      








































