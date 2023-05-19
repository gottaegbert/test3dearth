<script src='Chart.min.js'></script>
// scroll 
var ctn_content_detail_prj = document.querySelector('.ctn_content_detail_prj');
var header_detail_prj = document.querySelector('.header_detail_prj');
var left_body_prj = document.querySelector('.left_body_prj');
var right_body_prj = document.querySelector('.right_body_prj');
var body_detail_prj = document.querySelector('.body_detail_prj');
var ctn_footer = document.querySelector('.ctn_footer');

$(document).ready(function(){
    $(window).scroll(function(){

        var body = $('html, body').scrollTop();
        var ctn_content_detail_prj_top = $('.ctn_content_detail_prj').offset().top;
        var header_top = $('header').offset().top; 
        var ctn_footer_top = $('.ctn__footer').offset().top;

        if (ctn_content_detail_prj_top<body) {
            if (ctn_footer_top-header_top<=window.screen.height) {
                Object.assign(left_body_prj.style , {
                    position: "initial",
                    display: 'none',
                })
            }
            else {
                Object.assign(left_body_prj.style , {
                    position: "fixed",
                    display: 'block',
                })
            }
            Object.assign(header_detail_prj.style , {

            })
            Object.assign(body_detail_prj.style , {
                justifyContent : 'flex-end',
            })
            Object.assign(left_body_prj.style , {
                position: 'fixed',
                top: '120px',
                left: '0',
            })
            Object.assign(right_body_prj.style , {
                
            })
        } else if (ctn_content_detail_prj_top>=body) {
            Object.assign(body_detail_prj.style , {
                justifyContent : 'center',
            })
            Object.assign(left_body_prj.style , {
                position: "initial",
                display: 'block',
            })
            Object.assign(right_body_prj.style , {
                
            })
        } 
        

    })
})


//trans_header
let block_story = document.querySelector('.block_story');
let block_FAQ = document.querySelector('.block_FAQ');
let block_comments = document.querySelector('.block_comments');
let block_statistic = document.querySelector('.block_statistic');

function close_all_block() {
    block_FAQ.classList.remove('open');
    block_story.classList.remove('open');
    block_comments.classList.remove('open');
    block_statistic.classList.remove('open');
}

function open_story() {
    close_all_block();
    block_story.classList.add('open');
}

function open_FAQ() {
    close_all_block();
    block_FAQ.classList.add('open');
}

function open_comments() {
    close_all_block();
    block_comments.classList.add('open');
}

function open_statistic() {
    close_all_block();
    block_statistic.classList.add('open');
}

//money increase
const total_money = document.querySelector('.main_prj_content .ctn_statistic .ctn_pledged_backers .pledged span');
const total_backers = document.querySelector('.main_prj_content .ctn_statistic .ctn_pledged_backers .backers span');
const percent = document.querySelector('.percent_complete span')

function counterUp(el, to) {
	let speed = 200
	let from = 0
	let step = to / speed
	const counter = setInterval(function () {
		from += step
		if (from > to) {
			clearInterval(counter)
			el.innerText = to
		} else {
			el.innerText = Math.ceil(from)
		}
	}, 1)
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

counterUp(total_money, 231700);
counterUp(total_backers, 1682);
counterUp(percent, 78);


//------------statistic bieu do---------------
const labels = [
    '17/06',
    '18/06',
    '19/06',
    '20/06',
    '21/06',
    '22/06',
    '23/06',
    '24/06',
    '25/06',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Interaction of the day',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [2, 9, 5, 2, 16, 24,20,25,26],
    }]
};

const data2 = {
    labels: labels,
    datasets: [{
        label: 'Cash flow the day',
        backgroundColor: '#0099FF',
        borderColor: '#0099FF',
        data: [2, 4, 5, 8, 10, 6, 10, 12, 26],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};

const config2 = {
    type: 'line',
    data: data2,
    options: {}
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

const myChart_2 = new Chart(
    document.getElementById('myChart_2'),
    config2
);





















