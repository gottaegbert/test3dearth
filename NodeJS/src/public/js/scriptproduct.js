const body=document.querySelector("body"),
      slidebar=body.querySelector(".the_left_page"),
      toggle=body.querySelector(".toggle"),
      modeSwitch=body.querySelector(".toggle-switch"),
      modeText=body.querySelector(".mode-text");

const  modeSwitchmobile=document.querySelector(".toggle-switch_mobile"),
       modeTextmobile=document.querySelector(".mode-text_mobile");

   
        
      var deleteform=document.forms['delete_form'];

      function delete_p(class1){
            swal({
                title: "Are you sure?",
                text: "You will not be able to recover this imaginary file!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: '#DD6B55',
                confirmButtonText: 'Yes, delete it!',
                closeOnConfirm: false,
                //closeOnCancel: false
            },
            function(){
                swal("Deleted!", "Your imaginary file has been deleted!", "success");
                deleteform.action='/store/' + class1 + '?_method=DELETE';
                deleteform.submit();
                console.log(class1);
            });
        };

    var logo1 = document.querySelector('.logo1');
    var logo2 = document.querySelector('.logo2');

    var logo1_mobile = document.querySelector('.mobile_nav .logo1');
    var logo2_mobile = document.querySelector('.mobile_nav .logo2');

       modeSwitchmobile.addEventListener("click",()=>{
          body.classList.toggle("dark");
          if(body.classList.contains("dark")){
              Object.assign(logo1_mobile.style , {
                display : 'none',
            })
            Object.assign(logo2_mobile.style , {
                display : 'block',
            })
              modeTextmobile.innerText="Light Mode";
          }else{
            Object.assign(logo2_mobile.style , {
                display : 'none',
            })
            Object.assign(logo1_mobile.style , {
                display : 'block',
            })
              modeTextmobile.innerText="Dark Mode";
          }
      })

      

      modeSwitch.addEventListener("click",()=>{
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
      })
      
      
      $(document).ready(function(){
          var width=$(document).width();
          console.log(width);
        $('.ctn__footer').waypoint(
            function(direction){
                if(direction == 'down'){
                    $('.letf_page').hide(200);
                    // $('.center_page').addClass('center_page_fix'); 
                    $('.investor_rankings').hide(200);
                    $('.Top_project_fix').hide(200);
                }else if(width > 768 ) {
                    $('.letf_page').show(300);
                    //  $('.center_page').removeClass('center_page_fix');
                    $('.investor_rankings').show();
                    $('.Top_project_fix').show();
                }
              
            },{
                offset : "560px"
            }
        )
      })
    
    

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
console.log("cac")

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
            
            return sleep(500);
        })
        .then(function() {
            
            ctn__loading__home.classList.remove('open__load');
            homepage_mb.href="homepage"; 
            homepage_mb.click();
        })      
}
homepage_mb.addEventListener('click' , onclick__home_mb);

function onclick__product_mb(){
    sleep(0)
        .then(function() {
            ctn__loading__home.classList.add('open__load');
            
            return sleep(500);
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
            return sleep(500);
        })
        .then(function() {
            
            ctn__loading__home.classList.remove('open__load')
            projects_mb.href="detail"; 
            projects_mb.click();
        })      
}

projects_mb.addEventListener('click' , onclick__projects_mb);

//comment
var ctn_comment = document.querySelector('.ctn_comment');
var ctn_comment_1 = document.querySelector('.ctn_comment_1');
var ctn_comment_2 = document.querySelector('.ctn_comment_2');

function click_cmt() {
    if (!ctn_comment.classList.contains('open_cmt')) {
        ctn_comment.classList.add('open_cmt');
    }
    else {
        ctn_comment.classList.remove('open_cmt');
    }
}

function click_cmt1() {
    if (!ctn_comment_1.classList.contains('open_cmt')) {
        ctn_comment_1.classList.add('open_cmt');
    }
    else {
        ctn_comment_1.classList.remove('open_cmt');
    }
}

function click_cmt2() {
    if (!ctn_comment_2.classList.contains('open_cmt')) {
        ctn_comment_2.classList.add('open_cmt');
    }
    else {
        ctn_comment_2.classList.remove('open_cmt');
    }
}

// boxchat

var coll = document.getElementsByClassName("collapsible");
var messenger = document.querySelector('.messenger');

messenger.addEventListener("click", function () {
        coll[0].classList.toggle("active");
        //lay elm ke tiep
        console.log('hi');
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
    if (input == 'champion team BWD?') {
        return "It's definitely 4i";
    }
    else if (input == "hello" || input=="Hello") {
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


$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});


//investment
// function handle_mess() {
//     var messenger = document.querySelector('.messenger');
//     messenger.click();
// }

//handle_heart
function handle_heart(class1) {
    var heart = document.querySelector(`.${class1} .heart`);
    if (heart.classList.contains('fa-regular')) {
        heart.classList.remove('fa-regular');
        heart.classList.add('fa-solid');
        Object.assign(heart.style , {
            color : 'red',
        })
    }
    else {
        heart.classList.remove('fa-solid');
        heart.classList.add('fa-regular');
        Object.assign(heart.style , {
            color : 'black',
        })
    }
}

//handle_comment
function handle_comment(class1) {
    console.log(class1);
    var comment1 = document.querySelector(`.${class1} .ctn_comment`);
    
    if (comment1.classList.contains('open_cmt')){
        comment1.classList.remove('open_cmt');
    } 
    else {
        comment1.classList.add('open_cmt');
    }
    
}
//handle update
 
function handle_update(class1) {
    console.log(class1);
     var checkupdate= $('#project-input').prop('checked');
    var update1 = document.querySelector(`.${class1} .update-drop`);
    
    if (update1.classList.contains('open')){
        update1.classList.remove('open');
    } 
    else {
        update1.classList.add('open');
    }
    
}
//handle search
var close = document.querySelector(`.search_close`);

 function close1(){
    var u = document.querySelector(`.search-drop`);
     
        u.classList.remove('open_search');
     
   
 }
function handle_search() {
    var update1 = document.querySelector(`.search-drop`);
    
    if (update1.classList.contains('open_search')){
        update1.classList.remove('open_search');
    } 
    else {
        update1.classList.add('open_search');
    }
    
}
//search

const searchs = document.querySelector('.search-drop')
const filter = document.getElementById('filter')
const listItems = []
// const list=[]
//     const products =require('../../app/models/product')
//     products.find({})
//         .then(products=>{
//                     products=products.map(product => product.toObject() )
//                     list=products
//             }) 
//     console.log(list)        
 getData()
filter.addEventListener('input', (e) => filterData(e.target.value))
async function getData() {
	const res = await fetch('https://62a8d2d0ec36bf40bdaed066.mockapi.io/PD')

	const results = await res.json()
    searchs.innerHTML = ''

	results.forEach((productt) => {
		const li = document.createElement('li')
		li.setAttribute('class', 'searchs')
		listItems.push(li)

		li.innerHTML = `
			<img src="${productt.img1}" alt="">
			<div class="product-detail">
				<h4>${productt.infor.slice(0, 30)}</h4>
			</div>
        `

		searchs.appendChild(li)
	})
}
function filterData(search) {
	listItems.forEach((item) => {
		if (item.innerText.toLowerCase().includes(search.toLowerCase())) {
			item.classList.remove('hide')
		} else {
			item.classList.add('hide')
		}
	})
}
//handle userdropdown
function handle_user() {
    var update1 = document.querySelector(`.user-drop`);
    
    if (update1.classList.contains('open1')){
        update1.classList.remove('open1');
    } 
    else {
        update1.classList.add('open1');
    }
    
}

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
  
//   // Scroll to a certain element
//   document.querySelector('.hello').scrollIntoView({ 
//     behavior: 'smooth' 
//   });
