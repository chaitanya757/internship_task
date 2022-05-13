let username = document.querySelector('#top_input');

let password = document.querySelector('.password_field');

let submit_button = document.querySelector('.submit_button');

let caution_message = document.querySelector('.caution');

let success_message = document.querySelector('.success');

let form = document.querySelector('.my-form');


submit_button.addEventListener('click',submit_event)

function submit_event(){
    
    
    if(password.value.length<6){
        caution_message.innerHTML='PassWord Cannot Be Less Than characters' 

    }

    if(password.value.length>6 && password.value.length<15){
        form.reset()
        success_message.innerHTML="User-Details Valid!"

        caution_message.innerHTML="";
    }

}