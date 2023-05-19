
// choose_image
var path_image;
function chooseFile(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e){
            $('#image').attr('src' , e.target.result);
            path_image= e.target.result;
        }
        
        reader.readAsDataURL(fileInput.files[0]);
    }
}


function test() {
    console.log(123);
}

//add FAQ
let question_FAQ = document.querySelector('.question_FAQ');
let data_FAQ = "";
let btn_next = `<button>NEXT</button>`;
let data_add_btn =
    `<div style="width: 100%;">
        <div class="add_FAQ" style="margin : 30px 0;">
            <input type="text" name="question" id="question" onclick="test()">

        </div>
    </div>`;

function add_FAQ() {
    data_FAQ += data_add_btn;
    question_FAQ.innerHTML = data_FAQ;
}

//handle : trans post_project_created : main-> FAQ
let tab;
const main_post = document.querySelector('.main_post');
const faq_post = document.querySelector('.FAQ_post');
const next_step_a = document.querySelector('.next_step a');

console.log(main_post);

function click_main_trans_faq() {
    Object.assign(main_post.style , {
        display : 'none',
    })
    Object.assign(faq_post.style, {
        display : 'flex',
    })
}



// click_main_trans_faq();



// handle nav header 
const over_view = document.querySelector('.main_post');
const faq = document.querySelector('.FAQ_post');
const story = document.querySelector('.story_post');

function close_all() {
    Object.assign(over_view.style , {
        display : 'none',
    })
    Object.assign(story.style , {
        display : 'none',
    })
    // Object.assign(rewards.style , {
    //     display : 'none',
    // })
    Object.assign(faq.style , {
        display : 'none',
    })
}

function open_over_view() {
    close_all();
    Object.assign(over_view.style , {
        display : 'flex',
    })
}

function open_story() {
    close_all();
    Object.assign(story.style , {
        display : 'flex',
    })
}

// function open_rewards() {
//     close_all();
//     Object.assign(rewards.style , {
//         display : 'flex',
//     })
// }

function open_faq() {
    close_all();
    Object.assign(faq.style , {
        display : 'flex',
    })
}


//~~~~~~~   handle add story    ~~~~~~~~~~~
let id_image = 0,id_title = 0,id_content = 0;
let input_add_str = document.querySelector('.input_add_str');
let data_story = "";
// let data_add_title =
//     `<input name="title${id_title}" type="text" style="width: 90%;font-size : 40px; padding: 10px;margin: 10px;">
//     `;
// let data_add_content = 
//     `<input name="content${id_content}" type="text" style="width: 90%;font-size : 20px; padding: 10px;margin: 10px;">
//     `;
// let data_add_image = 
//     `<div style="display: flex; flex-direction: column;">
//     <img style="margin: 0 auto; z-index: 1" src="" alt="" id="image_${id_image}" width="300" height="300">
//     <input style="width: 80%;margin: 20px auto 60px auto;" type="file" class="form-control" id="img_big" name="img_big" onchange=chooseFile_story(this)
//             accept="image/gif , image/jpeg, image/png">
//     </div>
//     `

function add_story_title() {
    id_title++; 
    const div_title = document.createElement("div")
    div_title.innerHTML=`<textarea name="title${id_title}" type="text" style="height: 80px;border_radius:20px;width: 80%;font-size : 30px; padding: 20px;margin: 10px;" placeholder="Title"></textarea>`;
    input_add_str.appendChild(div_title); 
} 

function add_story_content() {
    id_content++; 
    const div_content = document.createElement('div');
    div_content.innerHTML=`<textarea name="content${id_content}" type="text" style="border-radius: 10px; height: 20px;word-break: break-word; width: 90%;font-size : 20px; padding: 30px 10px 140px 30px;margin: 10px;" placeholder="Content"></textarea>`; 
    input_add_str.appendChild(div_content); 
}

function add_story_image() {
    id_image++;
    const div_image = document.createElement('div');
    div_image.innerHTML=`<div style="display: flex; flex-direction: column;">
    <img style="margin: 0 auto; z-index: 1" src="" alt="" id="image_${id_image}" width="300" height="300">
    <input name="image${id_image}" style="width: 80%;margin: 20px auto 60px auto;" type="file" class="form-control" id="img_big" name="img_big" onchange=chooseFile_story_${id_image}(this)
            accept="image/gif , image/jpeg, image/png" placeholder="image">
    </div>
    `;
    input_add_str.appendChild(div_image);
}

//function chay

function chooseFile_story_1(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e){
            $(`#image_1`).attr('src' , e.target.result);
            path_image= e.target.result;
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
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

function chooseFile_story_2(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e){
            $(`#image_2`).attr('src' , e.target.result);
            path_image= e.target.result;
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
}

function chooseFile_story_3(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e){
            $(`#image_3`).attr('src' , e.target.result);
            path_image= e.target.result;
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
}

function chooseFile_story_4(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e){
            $(`#image_4`).attr('src' , e.target.result);
            path_image= e.target.result;
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
}

function chooseFile_story_5(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e){
            $(`#image_5`).attr('src' , e.target.result);
            path_image= e.target.result;
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
}

function chooseFile_story_6(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e){
            $(`#image_6`).attr('src' , e.target.result);
            path_image= e.target.result;
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
}

function chooseFile_story_7(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e){
            $(`#image_7`).attr('src' , e.target.result);
            path_image= e.target.result;
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
}

const button_add_str = document.querySelector('.story_post .button_add_str');

$(document).ready(function(){
    $(window).scroll(function(){
        var body = $('html, body').scrollTop();
        var nav_main_post_top = $('.nav_main_post').offset().top;
        var button_add_str_top = $('.button_add_str').offset().top;
        var header_top = $('header').offset().top; 
        var ctn_footer_top = $('.ctn__footer').offset().top;

        console.log(button_add_str_top + 455.63);
        console.log(ctn_footer_top);

        if ((button_add_str_top + 455.52) < ctn_footer_top) {
            Object.assign(button_add_str.style , {
                display: 'flex',
            })
        }
        else {
            Object.assign(button_add_str.style , {
                display: 'none',
            })
        }
        

    })
})





































// PREVIEW MODAL
const preview = document.querySelector('#modal_preview');

function onClick_close_preview() {
    Object.assign(preview.style, {
        display: 'none',
    })
}

jQuery(document).ready(($) =>{
    BookPostingPreview()
    
    function BookPostingPreview() {
        $('#preview').on('click', () => {
            $('#modal_preview .info_preview h2').text($('#main_title').val());
            $('#modal_preview .info_preview h4').text($('#main_content').val());
            $('#modal_preview .info_preview .ctn_pledged_backers .pledged .title').text(`pledged of $` + $('#title_money_pledged').val() + ` goal`);
            $('#modal_preview .info_preview .percent_complete').text(`0 % of ` + $('#title_money_pledged').val() + ` $`);
           
            $('.main_prj_video').attr('src',$('#image').attr('src'));

            $('#modal_preview').css({
                'display': 'flex',
            })
             
            // setTimeout(() => {
            //     $('.form-posting > form > button[type="submit"]').css({
            //         'display': 'block',
            //     })
            // }, 1000);        
        })     
    }
})











