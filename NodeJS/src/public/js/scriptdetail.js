$('#featured').addClass('animate__animated animate__bounceInUp');

const body=document.querySelector("body"),
      slidebar=body.querySelector(".the_left_page"),
      toggle=body.querySelector(".toggle"),
      modeSwitch=body.querySelector(".toggle-switch"),
      modeText=body.querySelector(".mode-text");

var logo1 = document.querySelector('.logo1');
var logo2 = document.querySelector('.logo2');

function toggle_dark_light() {
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        Object.assign(logo1.style , {
            display : 'none',
        })
        Object.assign(logo2.style , {
            display : 'block',
        })
        modeText.innerText="Light Mode";
    }else{
        Object.assign(logo2.style , {
            display : 'none',
        })
        Object.assign(logo1.style , {
            display : 'block',
        })
        modeText.innerText="Dark Mode";
    }
}

$(document).ready(function(){
    $(window).scroll(function(){
        var body=$('html,body').scrollTop();

        console.log(body);
        if (body>400) {
            $('#art').addClass('animate__animated animate__bounceInUp');
            
        }
        if (body>1000) {
            $('#game').addClass('animate__animated animate__bounceInUp');

        }

    });
})

// 

// transform thanh chủ đề 
function onmouseover_the_left_page() {
    Object.assign(slidebar.style , {
        animationName : 'trans_slide_bar_to_left',
        animationDuration: '0.5s',
        left: 0,
    })
}

function onmouseout_the_left_page() {
    Object.assign(slidebar.style , {
        animationName : 'trans_slide_bar_to_right',
        animationDuration: '0.5s',
        left : '-14%',
    })
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
            product.href="product"; 
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
            
            ctn__loading__home.classList.remove('open__load')
            projects.href="detail"; 
            projects.click();
        })      
}

projects.addEventListener('click' , onclick__projects);
// loading mobile

var ctn__loading__home=document.querySelector('.ctn__loading__body');
var homepage_mb=document.querySelector('#homepage_mobile');
var product_mb=document.querySelector('#product_mobile');
var projects_mb=document.querySelector('#projects_mobile');

function sleep(s){
    return new Promise(function(resolve) {
        setTimeout(resolve,s)
    })
}

function onclick__home_mb(){
    sleep(0)
        .then(function() {
            ctn__loading__home.classList.add('open__load');
            
            return sleep(1300);
        })
        .then(function() {
            
            ctn__loading__home.classList.remove('open__load')
            homepage_mb.href="homepage"; 
            homepage_mb.click();
        })      
}
homepage_mb.addEventListener('click' , onclick__home_mb);

function onclick__product_mb(){
    sleep(0)
        .then(function() {
            ctn__loading__home.classList.add('open__load');
            
            return sleep(1300);
        })
        .then(function() {
            
            ctn__loading__home.classList.remove('open__load')
            product_mb.href="product"; 
            product_mb.click();
        })      
}

product_mb.addEventListener('click' , onclick__product_mb);


function onclick__projects_mb(){
    sleep(0)
        .then(function() {
            ctn__loading__home.classList.add('open__load');
            return sleep(1300);
        })
        .then(function() {
            
            ctn__loading__home.classList.remove('open__load')
            projects_mb.href="detail"; 
            projects_mb.click();
        })      
}

projects_mb.addEventListener('click' , onclick__projects_mb);

// boxchat

var coll = document.getElementsByClassName("collapsible");
var messenger = document.querySelector('.messenger');

messenger.addEventListener("click", function () {
        coll[0].classList.toggle("active");
        //lay elm ke tiep
        var content = coll[0].nextElementSibling;
        if (content.style.maxHeight) {
            Object.assign(coll[0].style , {
                display : 'none',
            })
            content.style.maxHeight = null;
        } else {
            console.log(content.scrollHeight);
            Object.assign(coll[0].style , {
                display : 'flex',
                justifyContent : 'space-between'
            })
            content.style.maxHeight = content.scrollHeight + "px";
        }
});

var minimize = document.querySelector('.fa-window-minimize');

minimize.addEventListener('click', function () {
    var content = coll[0].nextElementSibling;
    Object.assign(coll[0].style , {
        display : 'none',
    })
    content.style.maxHeight = null;
})

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
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

function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello" || input=="Hello") {
        return "Hello , May I help you?";
    } else if (input == "goodbye" || input=='Goodbye' || input=='bye') {
        return "Thank you for using PRO4, see you soon!";
    } else if(input == "Which team wins the BWD contest?"||input == "which team wins the BWD contest?"||input == "Which team wins the BWD contest"||input == "which team wins the BWD contest"){
        return "4i";
    }else{
        return "Try asking something else!";
    }

}

// tin nhan mac dinh dau tien
function firstBotMessage() {
    let firstMessage = "How's it going?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
}

firstBotMessage();

// add tin nhan
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Xu li Lay text trong input va day len message
function getResponse() {
    //lay text
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "I love Code Palace!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    // tra ve focus ban dau
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    //lan ve UI chinh
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// xu li  gui tin nhan bot
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);

    //scroll den view chinh
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    setTimeout(() => {
        getHardResponse(sampleText);
    }, 1000)
}


function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Heart clicked!")
}

// xu li su kien enter va day tin nhan
$("#textInput").keypress(function (e) {
    console.log('hi');
    if (e.which == 13) {
        getResponse();
    }
});


// to top btn

// window.scroll({
//     top: 2500, 
//     left: 0, 
//     behavior: 'smooth'
//   });
  
//   // Scroll certain amounts from current position 
//   window.scrollBy({ 
//     top: 100, // could be negative value
//     left: 0, 
//     behavior: 'smooth' 
//   });
  
  // Scroll to a certain element
//   document.querySelector('.hello').scrollIntoView({ 
//     behavior: 'smooth' 
//   });













