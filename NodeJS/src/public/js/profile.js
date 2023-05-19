
const user = document.querySelector('.wrapper .user');
const user_i = document.querySelector('.wrapper .user i');
const user_span = document.querySelector('.wrapper .user span');

const my_project = document.querySelector('.wrapper .my_project');
const my_project_i = document.querySelector('.wrapper .my_project i');
const my_project_span = document.querySelector('.wrapper .my_project span');

const prj_history = document.querySelector('.wrapper .prj_history');
const prj_history_i = document.querySelector('.wrapper .prj_history i');
const prj_history_span = document.querySelector('.wrapper .prj_history span');

const left_content = document.querySelector('.left_content');
const left_content_detail = document.querySelector('.left_content_detail');
const right_content = document.querySelector('.right_content');
const wrapper = document.querySelector('.wrapper');
const wrapper_add_profile = document.querySelector('.wrapper .add_profile');

const my_project_statistic = document.querySelector('.my_project_statistic');
const detail_my_project_statistic = document.querySelector('.detail_my_project_statistic');
const myChart1 = document.querySelector('#myChart');
const temp = document.querySelector('.temp');
const detail_statistic = document.querySelector('.detail_statistic');

function sleep(s){
    return new Promise(function(resolve) {
        setTimeout(resolve,s)
    })
}

function set_all() {
    Object.assign(user_i.style , {
        borderRadius: '50%',
        backgroundColor: 'white',
        color: '#5a5a5a',
    })
    Object.assign(user_span.style , {
        opacity: '0.2',
    })
    Object.assign(my_project_i.style , {
        borderRadius: '50%',
        backgroundColor: 'white',
        color: '#5a5a5a',
    })
    Object.assign(my_project_span.style , {
        opacity: '0.2',
    })
    Object.assign(prj_history_i.style , {
        borderRadius: '50%',
        backgroundColor: 'white',
        color: '#5a5a5a',
    })
    Object.assign(prj_history_span.style , {
        opacity: '0.2',
    })
}



//----------------trans_nav_bar------------------
const ctn_about_me = document.querySelector('.ctn_about_me');
const ctn_my_project = document.querySelector('.ctn_my_project');
const ctn_history_project = document.querySelector('.ctn_history_project');


function set_nav_bar_close() {
    Object.assign(ctn_about_me.style , {
        display : 'none',
    })
    Object.assign(ctn_my_project.style , {
        display : 'none',
    })
    Object.assign(ctn_history_project.style , {
        display : 'none',
    })
}

function trans_add_profile() {
    set_all();
    set_nav_bar_close();
    sleep(0) 
        .then(function() {
            Object.assign(right_content.style, {
                animationName : 'open_right_profile',
                animationDuration: '2s',
                animationDirection: 'normal',
            })
            Object.assign(wrapper.style, {
                animationName : 'wrapper_content_profile',
                animationDuration: '2s',
                animationDirection: 'normal',
            })
            return sleep(300);
        })
        .then(function() {
            Object.assign(wrapper.style, {
                justifyContent: 'space-between',
            })
            Object.assign(wrapper_add_profile.style, {
                display: 'none',
            })
            Object.assign(right_content.style , {
                width : '70%',
            })
            Object.assign(detail_my_project_statistic.style, {
                width: '60%',
            })
            Object.assign(detail_statistic.style , {
                display: 'none',
            })
        })


    
    sleep(0)
        .then(function() {
            Object.assign(left_content.style, {
                animationName : 'open_left_profile',
                animationDuration: '2s',
                animationDirection: 'normal',
            })
            return sleep(300);
        })
        .then(function() {
            Object.assign(left_content.style, {
                display : 'flex',
            })
            return sleep(1000);
        })
        .then(function() {
            Object.assign(left_content_detail.style, {
                display : 'block',
            })
        })      
}

function trans_user() {
    set_all();
    set_nav_bar_close();
    Object.assign(user_i.style , {
        borderRadius: '50% 0 0 50%',
        backgroundColor: '#a28ce6',
        color: 'white',
    })
    Object.assign(user_span.style , {
        opacity: '1',
        color: 'white',
    })
    Object.assign(ctn_about_me.style , {
        display : 'flex',
    })
}

function trans_my_project() {
    set_all();
    set_nav_bar_close();
    Object.assign(my_project_i.style , {
        borderRadius: '50% 0 0 50%',
        backgroundColor: '#5766dc',
        color: 'white',
    })
    Object.assign(my_project_span.style , {
        opacity: '1',
        color: 'white',
    })
    Object.assign(ctn_my_project.style , {
        display : 'flex',
    })
}

function trans_prj_history() {
    set_all();
    set_nav_bar_close();
    Object.assign(prj_history_i.style , {
        borderRadius: '50% 0 0 50%',
        backgroundColor: '#dc5788',
        color: 'white',
    })
    Object.assign(prj_history_span.style , {
        opacity: '1',
        color: 'white',
    })
    Object.assign(ctn_history_project.style , {
        display : 'flex',
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

// ----------open and close card project--------------
const card_1 = document.querySelector('.card_1');
const card_2 = document.querySelector('.card_2');
const card_3 = document.querySelector('.card_3');


function close_card() {
    card_1.classList.remove('open');
    card_2.classList.remove('open');
    card_3.classList.remove('open');
}

function open_card_1() {
    close_card();
    card_1.classList.add('open');
    $('.card_1').addClass('animate__animated animate__slideInRight');

}
function open_card_2() {
    close_card();
    card_2.classList.add('open');
    $('.card_2').addClass('animate__animated animate__slideInRight');


}
function open_card_3() {
    close_card();
    card_3.classList.add('open');
    $('.card_3').addClass('animate__animated animate__slideInRight');

}



//---------------statistic all prj of user

const labels = [
    'GAME',
    'ART',
    'SOCIETY',
    'MUSIC',
    'SPORT',
    'OTHER',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: [
            '#FFFF99',
            '#99FFFF',
            '#FFF5EE',  
            '#B0E2FF',
            '#C1FFC1',
            '#CDCDB4',
        ],
        borderColor: 'rgb(255, 99, 132)',
        data: [1 , 1, 2, 1, 2,0],
    }]
};


const config = {
    type: 'pie',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);


//minimize

function btn_hide_close() {
    sleep(0) 
        .then(function() {
            Object.assign(right_content.style, {
                animationName : 'close_right_profile',
                animationDuration: '2s',
                animationDirection: 'normal',
            })
            Object.assign(wrapper.style, {
                animationName : 'wrapper_content_profile',
                animationDuration: '2s',
                animationDirection: 'normal',
            })
            return sleep(300);
        })
        .then(function() {
            Object.assign(wrapper.style, {
                justifyContent: 'space-around'
            })
            Object.assign(wrapper_add_profile.style, {
                display: 'flex',
            })
            Object.assign(right_content.style , {
                width : '100%',
            })
            Object.assign(detail_my_project_statistic.style , {
                width : '40%',
            })
            Object.assign(detail_statistic.style , {
                display : 'block',
                width : '40%',
            })
        })


    
    sleep(0)
        .then(function() {
            Object.assign(left_content.style, {
                animationName : 'close_left_profile',
                animationDuration: '2s',
                animationDirection: 'normal',
            })
            return sleep(300);
        })
        .then(function() {
            Object.assign(left_content_detail.style, {
                display : 'none',
            })
            return sleep(1700);
        })
        .then(function() {
            Object.assign(left_content.style, {
                display : 'none',
            })

        })      

}






















// slider


var swiper = new Swiper(".slide-content", {
    slidesPerView: 2,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
    },
  });