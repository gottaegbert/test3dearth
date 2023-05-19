
var close_open_user = document.querySelector('.close_open_user');
var leftSide = document.querySelector('.leftSide');
var rightSide = document.querySelector('.rightSide');
var rightSide_button =document.querySelector('.rightSide .header button')
var nav_icons = document.querySelector('.nav_icons');

function sleep(s){
    return new Promise(function(resolve) {
        setTimeout(resolve,s)
    })
}

function close_user() {
    sleep(0) 
        .then(function() {
            Object.assign(leftSide.style , {
                animationName : 'close_leftSide',
                animationDuration: '2s',
                animationDirection: 'normal',
            })
            Object.assign(rightSide.style , {
                animationName : 'open_rightUser',
                animationDuration: '2s',
                animationDirection: 'normal',
            })
            Object.assign(nav_icons.style , {
                display : 'none',
            })
            return sleep(1800)
        })
        .then(function() {
            Object.assign(rightSide_button.style , {
                display: 'block',
            })
            Object.assign(leftSide.style , {
                display: 'none',
            })
            Object.assign(rightSide.style , {
                width : '100%',
            })
            Object.assign(leftSide.style , {
                width : '0%',
            })
        })
}

function open_user() {
    sleep(0) 
        .then(function() {
            Object.assign(rightSide_button.style , {
                display: 'none',
            })
            Object.assign(leftSide.style , {
                display: 'block',
            })
            Object.assign(leftSide.style , {
                animationName : 'open_leftSide',
                animationDuration: '2s',
                animationDirection: 'normal',
            })
            Object.assign(rightSide.style , {
                animationName : 'close_rightUser',
                animationDuration: '2s',
                animationDirection: 'normal',
            })
            
            return sleep(1800)
        })
        .then(function() {
            Object.assign(nav_icons.style , {
                display : 'flex',
            })
            Object.assign(rightSide.style , {
                width : '70%',
            })
            Object.assign(leftSide.style , {
                width : '30%',
            })
        })
}
















